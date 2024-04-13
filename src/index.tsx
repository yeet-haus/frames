import 'dotenv/config';

import { serveStatic } from '@hono/node-server/serve-static';
import { Frog, Button } from 'frog';
import { Box, Column, Columns, Heading, Text, VStack, vars } from './ui.js';
import { devtools } from 'frog/dev';
import { formatEther } from 'viem';
import {
  addParsedContent,
  formatShortDateTimeFromSeconds,
  postData,
} from './helpers.js';
import { DH_GRAPH_ENDPOINT, GRAPH_ENDPOINT } from './constants.js';

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  browserLocation: 'https://app.yeet.haus/',
  verify: 'silent',
  secret: process.env.FROG_SECRET,
  ui: { vars },
  initialState: {
    minTribute: '0',
    shamanAddress: '',
  },
});

app.frame('/yeeter/:yeeterid', async c => {
  const yeeterid = c.req.param('yeeterid');

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
  // const startTime = formatShortDateTimeFromSeconds(
  //   yeetData.data.yeeter.startTime
  // );
  const goal = formatEther(yeetData.data.yeeter.goal);
  const minTribute = formatEther(yeetData.data.yeeter.minTribute);

  return c.res({
    action: `/success/${daoid}`,
    image: (
      <Columns grow>
        <Column
          backgroundColor="banality"
          color="death"
          width="3/4"
          padding="12"
          alignHorizontal="left"
          alignVertical="top"
          textTransform="uppercase"
        >
          <VStack gap="8">
            <Heading size="32">{name}</Heading>
            <Text size="24">Mission</Text>
            <Text size="16">{mission}</Text>
            <Text size="24">WTF</Text>
            <Text size="16">
              YEET {minTribute} ETH supporting {name}. The ETH you contribute
              gives you $nvTREE tokens in our project's DAO.
            </Text>
          </VStack>
        </Column>
        <Column
          backgroundColor="banality"
          color="death"
          width="1/4"
          padding="12"
          alignHorizontal="left"
          alignVertical="top"
          textTransform="uppercase"
        >
          <VStack gap="2">
            <Heading size="24">Goal</Heading>
            <Text size="16">{goal} ETH</Text>
            <Heading size="24">Raised</Heading>
            <Text size="16">{balance} ETH</Text>
            <Heading size="24">Minimum</Heading>
            <Text size="16">{minTribute} ETH</Text>
            <Heading size="24">Ends</Heading>
            <Text size="16">{endTime}</Text>
          </VStack>
        </Column>
      </Columns>
    ),
    intents: [
      <Button.Transaction
        target={`/yeet/${yeeterid}/${yeetData.data.yeeter.minTribute}`}
      >
        YEET
      </Button.Transaction>,
    ],
  });
});

// app.frame('/success', c => {
app.frame(`/success/:daoid`, c => {
  const daoid = c.req.param('daoid');
  return c.res({
    image: '/images/success.png',
    intents: [
      <Button.Link href={`https://app.yeet.haus/#/molochV3/0x2105/${daoid}`}>
        View Project
      </Button.Link>,
    ],
  });
});

app.transaction('/yeet/:yeeterid/:mintribute', c => {
  const yeeterid = c.req.param('yeeterid');
  const mintribute = c.req.param('mintribute');
  const shamanAddress = yeeterid as `0x${string}`;
  const message = 'YEET FROM FRAMES';

  return c.contract({
    abi: [
      {
        inputs: [{ internalType: 'string', name: 'message', type: 'string' }],
        name: 'contributeEth',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    chainId: 'eip155:8453',
    functionName: 'contributeEth',
    value: BigInt(mintribute),
    args: [message],
    to: shamanAddress,
  });
});

app.use('/*', serveStatic({ root: './public' }));

devtools(app, { serveStatic });
