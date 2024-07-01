import { Column, Columns, Heading, Text } from '../api/ui.js';

export const YeetTopper = () => {
  return (
    <Columns grow>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="48">Goal</Heading>
        <Text size="32" color="white" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="48">Price</Heading>
        <Text size="32" color="white" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="48">Tokens</Heading>
        <Text size="32" color="white" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="48">Ends</Heading>
        <Text size="32" color="white" weight="400">
          xxx
        </Text>
      </Column>
    </Columns>
  );
};
