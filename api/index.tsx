import "dotenv/config";

import { Frog, Button } from "frog";
import { Column, Columns, Row, Rows, Heading, Text, vars, Box } from "./ui.js";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import { handle } from "frog/vercel";

import { formatEther, getAddress } from "viem";

import { formatShortDateTimeFromSeconds, postData } from "../utils/helpers.js";
import { DH_GRAPH_ENDPOINT, GRAPH_ENDPOINT } from "../utils/constants.js";

import { YeetTopper } from "../components/YeetTopper.js";
import { YeetFooter } from "../components/YeetFooter.js";

export const app = new Frog({
  origin: "https://speed-frame.vercel.app",
  headers: {
    "cache-control": "max-age=0",
  },
  assetsPath: "/",
  basePath: "/api",
  browserLocation: "https://speedball.daohaus.club/",
  verify: "silent",
  ui: { vars },
  initialState: {
    minTribute: "0",
    shamanAddress: "",
  },
});

app.frame("/yeeter/:yeeterid", async (c) => {
  const yeeterid = c.req.param("yeeterid");

  const yeetData = await postData(GRAPH_ENDPOINT, {
    query: `{yeeter(id: "${yeeterid.toLowerCase()}") {id endTime startTime minTribute multiplier goal dao { id shareTokenSymbol  }}}`,
  });

  if (!yeetData || !yeetData.data || !yeetData.data.yeeter) {
    return c.res({
      image: (
        <Rows grow>
          <Row
            backgroundColor="black"
            color="blue"
            textTransform="uppercase"
            borderTopColor={"white"}
            borderTopWidth={"4"}
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="2/5"
          >
            <YeetTopper />
          </Row>
          <Row
            backgroundColor="black"
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="2/5"
          >
            <Columns grow>
              <Column
                backgroundColor="black"
                color="white"
                textAlign="center"
                textTransform="uppercase"
                alignHorizontal="center"
                paddingRight="12"
                paddingLeft="12"
                width="1/1"
              >
                <Heading size="64" wrap="balance">
                  Stash Not Found
                </Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="black"
            color="teal"
            textTransform="uppercase"
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderBottomColor={"white"}
            borderBottomWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="1/5"
          >
            <YeetFooter />
          </Row>
        </Rows>
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
        <Rows grow>
          <Row
            backgroundColor="black"
            color="blue"
            textTransform="uppercase"
            borderTopColor={"white"}
            borderTopWidth={"4"}
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="2/5"
          >
            <YeetTopper />
          </Row>
          <Row
            backgroundColor="black"
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="2/5"
          >
            <Columns grow>
              <Column
                backgroundColor="black"
                color="white"
                textAlign="center"
                textTransform="uppercase"
                alignHorizontal="center"
                paddingRight="12"
                paddingLeft="12"
                width="1/1"
              >
                <Heading size="64" wrap="balance">
                  Not Ready to Bang
                </Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="black"
            color="teal"
            textTransform="uppercase"
            borderRightColor={"white"}
            borderRightWidth={"4"}
            borderBottomColor={"white"}
            borderBottomWidth={"4"}
            borderLeftColor={"white"}
            borderLeftWidth={"4"}
            height="1/5"
          >
            <YeetFooter />
          </Row>
        </Rows>
      ),
    });
  }

  const daoid = yeetData.data.yeeter.dao.id;

  console.log("daoid on Not Ready to Bang:", daoid);
  console.log("yeeterid on Not Ready to Bang:", yeeterid);

  const metaRes = await postData(DH_GRAPH_ENDPOINT, {
    query: `{records(where: { dao: "${daoid.toLowerCase()}", table: "daoProfile" }, orderBy: createdAt, orderDirection: desc) {id content dao { name } }}`,
  });

  const name = metaRes.data.records[0].dao.name;
  const endTime = formatShortDateTimeFromSeconds(yeetData.data.yeeter.endTime);
  const goal = formatEther(yeetData.data.yeeter.goal);
  const minTribute = formatEther(yeetData.data.yeeter.minTribute);
  const shareTokenSymbol = yeetData.data.yeeter.dao.shareTokenSymbol;

  return c.res({
    action: `/success/${daoid}/${yeeterid}`,
    image: (
      <Rows grow>
        <Row
          backgroundColor="black"
          color="blue"
          textTransform="uppercase"
          borderTopColor={"white"}
          borderTopWidth={"4"}
          borderRightColor={"white"}
          borderRightWidth={"4"}
          borderLeftColor={"white"}
          borderLeftWidth={"4"}
          height="2/5"
        >
          <Columns grow>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="48">Goal</Heading>
              <Text size="32" color="white" weight="400">
                {goal} ETH
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="48">Price</Heading>
              <Text size="32" color="white" weight="400">
                {minTribute} ETH
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="48">Tokens</Heading>
              <Text size="32" color="white" weight="400">
                1000
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="48">Ends</Heading>
              <Text size="32" color="white" weight="400">
                {endTime}
              </Text>
            </Column>
          </Columns>
        </Row>
        <Row
          backgroundColor="black"
          color="white"
          borderRightColor={"white"}
          borderRightWidth={"4"}
          borderLeftColor={"white"}
          borderLeftWidth={"4"}
          height="3/5"
          // alignHorizontal="center"
          // alignVertical="center"
        >
          <Box paddingTop="28" textTransform="uppercase">
            <Heading size="48" color="orange" align="center" wrap="balance">
              {name} pre-sale
            </Heading>
            <Text size="32" color="white" align="center" wrap="balance">
              Contribute {minTribute} ETH and receive 1000 ${shareTokenSymbol}
            </Text>
          </Box>
        </Row>
        <Row
          backgroundColor="black"
          color="teal"
          textTransform="uppercase"
          borderRightColor={"white"}
          borderRightWidth={"4"}
          borderBottomColor={"white"}
          borderBottomWidth={"4"}
          borderLeftColor={"white"}
          borderLeftWidth={"4"}
          height="1/5"
        >
          <YeetFooter />
        </Row>
      </Rows>
    ),
    intents: [
      <Button.Transaction
        target={`/yeet/${yeeterid}/${yeetData.data.yeeter.minTribute}`}
      >
        BANG IT
      </Button.Transaction>,
    ],
  });
});

app.frame(`/success/:daoid/:yeeterid`, (c) => {
  const daoid = c.req.param("daoid");
  const yeeterid = c.req.param("yeeterid");
  console.log("daoid on success button:", daoid);
  console.log("yeeterid on success button:", yeeterid);
  return c.res({
    // image: "/img",
    image: "/images/success.png",
    intents: [
      <Button.Link
        href={`https://speedball.daohaus.club/#/molochv3/0x2105/${daoid.toLowerCase()}/${yeeterid.toLowerCase()}`}
      >
        View Project
      </Button.Link>,
    ],
  });
});

// app.image("/img", (c) => {
//   return c.res({ image: "/images/success.png" });
// });

app.transaction("/yeet/:yeeterid/:mintribute", (c) => {
  const yeeterid = c.req.param("yeeterid");
  const mintribute = c.req.param("mintribute");
  const shamanAddress = getAddress(yeeterid);
  const message = "WE BALL FROM FRAMES";

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

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined";
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development";
devtools(app, isProduction ? { assetsPath: "/.frog" } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
