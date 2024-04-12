import "dotenv/config";

import { serveStatic } from "@hono/node-server/serve-static";
import { Frog, TextInput, Button } from "frog";
import { Box, Heading, Text, vars } from "./ui.js";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'
import { formatEther } from "viem";
import { formatShortDateTimeFromSeconds, postData } from "./helpers.js";
import { GRAPH_ENDPOINT } from "./constants.js";

export const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // browserLocation: "",
  verify: "silent",
  secret: process.env.FROG_SECRET,
  ui: { vars },
});

app.frame("/yeeter/:daoid/:yeeterid", async (c) => {
  // const yeeterid = "0x7a023e66b1f607ee9ab3f384198adf668847a4d9";
  // const daoid = "0xa150835a5e25a197659e85a42649b5cea8128bb2";
  const yeeterid = c.req.param("yeeterid");
  const daoid = c.req.param("daoid");

  console.log("daoid", daoid);

  const yeetData = await postData(GRAPH_ENDPOINT, {
    query: `{yeeter(id: "${yeeterid}") {id endTime startTime minTribute multiplier goal balance}}`,
  });

  //todo: handle errors - if not yeeter display erorr so tx can't go forward
  console.log("yeetData", yeetData);

  const balance = formatEther(yeetData.data.yeeter.balance);
  const endTime = formatShortDateTimeFromSeconds(yeetData.data.yeeter.endTime);
  const startTime = formatShortDateTimeFromSeconds(
    yeetData.data.yeeter.startTime
  );
  const goal = formatEther(yeetData.data.yeeter.goal);

  //todo: pass this to the tx frame to popluate the value
  const minTribute = formatEther(yeetData.data.yeeter.minTribute);
  // const balance = "0";

  // const { inputText } = c;
  // const amount = inputText;
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
      <Button.Transaction target={`yeet/${yeeterid}`}>YEET</Button.Transaction>,
    ],
  });
});

app.transaction("/yeet/:yeeterid", (c) => {
  // Contract transaction response.
  const yeeterid = c.req.param("yeeterid");
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
    // chainId: 'eip155:11155111',
    functionName: "contributeEth",
    value: 10000000000000000n,
    args: ["1st Yeet from a frame"],
    to: yeeterid as `0x${string}`,
  });
});

app.use("/*", serveStatic({ root: "./public" }));

devtools(app, { serveStatic });
