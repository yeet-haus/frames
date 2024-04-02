import { serveStatic } from "@hono/node-server/serve-static";
import { Frog, TextInput, Button } from "frog";
import { Box, Heading, vars } from "./ui.js";
import yeeterAbi from "./utils/YeeterAbi.json";
import { devtools } from "frog/dev";
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars },
}).frame("/", (c) => {
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
      </Box>
    ),
    intents: [
      <TextInput placeholder="Amount of ETH" />,
      <Button.Transaction target="/yeet">YEET</Button.Transaction>,
    ],
  });
});

app.transaction("/yeet", (c) => {
  // Contract transaction response.
  return c.contract({
    abi: yeeterAbi,
    chainId: "eip155:8453",
    // chainId: 'eip155:11155111',
    functionName: "contributeEth",
    args: ["10000000000000000", "1st Yeet from a frame"],
    to: "0x8bd3eca1b83188f46171e6ef104c80fc82ceb861",
  });
});

app.use("/*", serveStatic({ root: "./public" }));

devtools(app, { serveStatic });
