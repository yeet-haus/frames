import "dotenv/config";

import { serveStatic } from "@hono/node-server/serve-static";
import { Frog, TextInput, Button } from "frog";
import { Box, Heading, Text, vars } from "./ui.js";
import { devtools } from "frog/dev";
import { formatEther } from "viem";
import {
  addParsedContent,
  formatShortDateTimeFromSeconds,
  postData,
} from "./helpers.js";
import { DH_GRAPH_ENDPOINT, GRAPH_ENDPOINT } from "./constants.js";

export const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  browserLocation: "https://app.yeet.haus/",
  verify: "silent",
  secret: process.env.FROG_SECRET,
  ui: { vars },
  initialState: {
    minTribute: "0",
    shamanAddress: "",
  },
});

app.frame("/yeeter/:yeeterid", async (c) => {
  const yeeterid = c.req.param("yeeterid");

  const yeetData = await postData(GRAPH_ENDPOINT, {
    query: `{yeeter(id: "${yeeterid}") {id endTime startTime minTribute multiplier goal balance dao { id }}}`,
  });

  if (!yeetData.data.yeeter) {
    return c.res({
      image: (
        <Box
          grow
          alignHorizontal="center"
          alignVertical="center"
          backgroundColor="nipple"
          padding="32"
        >
          <Heading size="64">INVALID YEET</Heading>
        </Box>
      ),
    });
  }

  const now = Date.now() / 1000;
  const isActive =
    now > Number(yeetData.data.yeeter.startTime) &&
    now < Number(yeetData.data.yeeter.endTime);

  if (!isActive) {
    return c.res({
      image: (
        <Box
          grow
          alignHorizontal="center"
          alignVertical="center"
          backgroundColor="nipple"
          padding="32"
        >
          <Heading size="64">YEET CLOSED</Heading>
        </Box>
      ),
    });
  }

  const daoid = yeetData.data.yeeter.dao.id;

  const metaRes = await postData(DH_GRAPH_ENDPOINT, {
    query: `{records(where: { dao: "${daoid}", table: "yeetDetails" }) {id content dao { name } }}`,
  });

  const meta = addParsedContent(metaRes.data.records[0].content);

  if (!metaRes.data.records[0]) {
    return c.res({
      image: (
        <Box
          grow
          alignHorizontal="center"
          alignVertical="center"
          backgroundColor="nipple"
          padding="32"
        >
          <Heading size="64">INVALID YEET</Heading>
        </Box>
      ),
    });
  }

  const name = metaRes.data.records[0].dao.name;
  const mission = meta?.missionStatement;
  const balance = formatEther(yeetData.data.yeeter.balance);
  const endTime = formatShortDateTimeFromSeconds(yeetData.data.yeeter.endTime);
  const startTime = formatShortDateTimeFromSeconds(
    yeetData.data.yeeter.startTime
  );
  const goal = formatEther(yeetData.data.yeeter.goal);
  const minTribute = formatEther(yeetData.data.yeeter.minTribute);

  return c.res({
    action: "/success",
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="nipple"
        padding="32"
      >
        <Heading size="64">YEET</Heading>
        <Heading>{name}</Heading>
        <Text>{mission}</Text>
        <Text>
          Raised {balance} eth of the {goal} eth goal
        </Text>
        <Text>
          Starts {startTime} and ends {endTime}
        </Text>
        <Text>Yeet amount: {minTribute} base eth</Text>
      </Box>
    ),
    intents: [
      <TextInput placeholder="Amount of ETH" />,
      <Button.Transaction
        target={`/yeet/${yeeterid}/${yeetData.data.yeeter.minTribute}`}
      >
        YEET
      </Button.Transaction>,
    ],
  });
});

app.frame("/success", (c) => {
  const { transactionId } = c;
  return c.res({
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="nipple"
        padding="32"
      >
        <Heading size="64">YEET</Heading>
        <Text>{transactionId}</Text>
      </Box>
    ),
  });
});

app.transaction("/yeet/:yeeterid/:mintribute", (c) => {
  const yeeterid = c.req.param("yeeterid");
  const mintribute = c.req.param("mintribute");
  const shamanAddress = yeeterid as `0x${string}`;
  const message = "YEET FROM FRAMES";

  return c.contract({
    abi: [
      {
        inputs: [{ internalType: "string", name: "message", type: "string" }],
        name: "contributeEth",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    chainId: "eip155:8453",
    functionName: "contributeEth",
    value: BigInt(mintribute),
    args: [message],
    to: shamanAddress,
  });
});

app.use("/*", serveStatic({ root: "./public" }));

devtools(app, { serveStatic });
