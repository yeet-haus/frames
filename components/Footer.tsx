/** @jsxImportSource frog/jsx */
import { Column, Columns, Heading, Text } from '../api/ui.js';

export const Footer = () => {
  return (
    <Columns grow>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="18">Goal</Heading>
        <Text size="18" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="18">Raised</Heading>
        <Text size="18" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="18">Ends</Heading>
        <Text size="18" weight="400">
          xxx
        </Text>
      </Column>
      <Column alignHorizontal="center" alignVertical="center" width="1/4">
        <Heading size="18">Tribute</Heading>
        <Text size="18" weight="400">
          xxx
        </Text>
      </Column>
    </Columns>
  );
};
