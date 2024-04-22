import { Frog, Button } from 'frog';
import { Column, Columns, Row, Rows, Heading, Text, vars } from './ui.js';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
import { neynar } from 'frog/hubs';
import { handle } from 'frog/vercel';

import { formatEther } from 'viem';

import {
  addParsedContent,
  formatShortDateTimeFromSeconds,
  postData,
} from '../utils/helpers.js';
import { DH_GRAPH_ENDPOINT, GRAPH_ENDPOINT } from '../utils/constants.js';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  origin: 'https://frames.yeet.haus/',
  assetsPath: '/',
  basePath: '/api',
  hub: neynar({ apiKey: process.env.NEYNAR_KEY || '' }),
  browserLocation: 'https://app.yeet.haus/',
  verify: 'silent',
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
        <Rows grow>
          <Row
            backgroundColor="death"
            color="nipple"
            textTransform="uppercase"
            borderTopColor={'angel'}
            borderTopWidth={'4'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="nipple"
            borderTopColor={'angel'}
            borderTopWidth={'2'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'2'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="3/5"
          >
            <Columns grow>
              <Column
                backgroundColor="death"
                color="angel"
                textAlign="center"
                textTransform="uppercase"
                alignHorizontal="center"
                alignVertical="center"
                paddingRight="12"
                paddingLeft="12"
                width="1/1"
              >
                <Heading wrap="balance">Yeeter Not Found</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="death"
            color="angel"
            textTransform="uppercase"
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Goal</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Raised</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Ends</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Tribute</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
            </Columns>
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
            backgroundColor="death"
            color="nipple"
            textTransform="uppercase"
            borderTopColor={'angel'}
            borderTopWidth={'4'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="nipple"
            borderTopColor={'angel'}
            borderTopWidth={'2'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'2'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="3/5"
          >
            <Columns grow>
              <Column
                backgroundColor="death"
                color="angel"
                textAlign="center"
                textTransform="uppercase"
                alignHorizontal="center"
                alignVertical="center"
                paddingRight="12"
                paddingLeft="12"
                width="1/1"
              >
                <Heading wrap="balance">Yeeter Not Active</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="death"
            color="angel"
            textTransform="uppercase"
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Goal</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Raised</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Ends</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Tribute</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
            </Columns>
          </Row>
        </Rows>
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
        <Rows grow>
          <Row
            backgroundColor="death"
            color="nipple"
            textTransform="uppercase"
            borderTopColor={'angel'}
            borderTopWidth={'4'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/6"
              >
                <Heading>Yeet</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="nipple"
            borderTopColor={'angel'}
            borderTopWidth={'2'}
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'2'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="3/5"
          >
            <Columns grow>
              <Column
                backgroundColor="death"
                color="angel"
                textAlign="center"
                textTransform="uppercase"
                alignHorizontal="center"
                alignVertical="center"
                paddingRight="12"
                paddingLeft="12"
                width="1/1"
              >
                <Heading wrap="balance">Missing Yeeter Mission</Heading>
              </Column>
            </Columns>
          </Row>
          <Row
            backgroundColor="death"
            color="angel"
            textTransform="uppercase"
            borderRightColor={'angel'}
            borderRightWidth={'4'}
            borderBottomColor={'angel'}
            borderBottomWidth={'4'}
            borderLeftColor={'angel'}
            borderLeftWidth={'4'}
            height="1/5"
          >
            <Columns grow>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Goal</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Raised</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Ends</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
              <Column
                alignHorizontal="center"
                alignVertical="center"
                width="1/4"
              >
                <Heading size="18">Tribute</Heading>
                <Text size="18" weight="400">
                  xxx
                </Text>
              </Column>
            </Columns>
          </Row>
        </Rows>
      ),
    });
  }

  const name = metaRes.data.records[0].dao.name;
  const mission = meta?.missionStatement;
  const balance = formatEther(yeetData.data.yeeter.balance);
  const endTime = formatShortDateTimeFromSeconds(yeetData.data.yeeter.endTime);
  const goal = formatEther(yeetData.data.yeeter.goal);
  const minTribute = formatEther(yeetData.data.yeeter.minTribute);

  return c.res({
    action: `/success/${daoid}`,
    image: (
      <Rows grow>
        <Row
          backgroundColor="death"
          color="nipple"
          textTransform="uppercase"
          borderTopColor={'angel'}
          borderTopWidth={'4'}
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="1/5"
        >
          <Columns grow>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
          </Columns>
        </Row>
        <Row
          backgroundColor="nipple"
          borderTopColor={'angel'}
          borderTopWidth={'2'}
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderBottomColor={'angel'}
          borderBottomWidth={'2'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="3/5"
        >
          <Columns grow>
            <Column
              backgroundColor="death"
              color="angel"
              textAlign="center"
              alignHorizontal="center"
              alignVertical="center"
              paddingRight="12"
              paddingLeft="12"
              width="1/2"
            >
              <Heading wrap="balance">{name}</Heading>
            </Column>
            <Column
              backgroundColor="death"
              color="angel"
              alignHorizontal="center"
              alignVertical="center"
              paddingRight="12"
              paddingLeft="12"
              width="1/2"
            >
              <Heading size="24" weight="400">
                {mission}
              </Heading>
            </Column>
          </Columns>
        </Row>
        <Row
          backgroundColor="death"
          color="angel"
          textTransform="uppercase"
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderBottomColor={'angel'}
          borderBottomWidth={'4'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="1/5"
        >
          <Columns grow>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Goal</Heading>
              <Text size="18" weight="400">
                {goal} ETH
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Raised</Heading>
              <Text size="18" weight="400">
                {balance} ETH
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Ends</Heading>
              <Text size="18" weight="400">
                {endTime}
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Tribute</Heading>
              <Text size="18" weight="400">
                {minTribute} ETH
              </Text>
            </Column>
          </Columns>
        </Row>
      </Rows>
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

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined';
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development';
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
