import "dotenv/config";

import { serveStatic } from "@hono/node-server/serve-static";
import { Frog, TextInput, Button } from "frog";
import { Box, Heading, Text, vars } from "./ui.js";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'
import { formatEther } from "viem";
import { formatShortDateTimeFromSeconds, postData } from "./helpers.js";

const GRAPH_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_KEY}/subgraphs/id/6vyAqRpCyrhLsfd6TfYAssvKywKhxJykkDbPxJZ4ZcEr`;

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars },
}).frame("/", async (c) => {
  //todo: why won't this work with given a path, need to pass a yeeter shaman address in the url
  // const yeeterid = c.req.param("yeeterid");
  const yeeterid = "0x7a023e66b1f607ee9ab3f384198adf668847a4d9";

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
