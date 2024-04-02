import { serveStatic } from '@hono/node-server/serve-static';
import { Frog } from 'frog';
import { Box, Heading, vars } from './ui.js';
import { devtools } from 'frog/dev';
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars },
}).frame('/', c => {
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
  });
});

app.use('/*', serveStatic({ root: './public' }));

devtools(app, { serveStatic });
