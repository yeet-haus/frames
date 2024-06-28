import { Column, Columns, Heading } from '../api/ui.js';

export const YeetFooter = () => {
  return (
    <Columns grow>
      <Column alignHorizontal="right" alignVertical="center" width="1/6">
        <Heading>Speed</Heading>
      </Column>
      <Column alignHorizontal="right" alignVertical="center" width="1/6">
        <Heading>Speed</Heading>
      </Column>
      <Column alignHorizontal="right" alignVertical="center" width="1/6">
        <Heading>Speed</Heading>
      </Column>
      <Column alignHorizontal="right" alignVertical="center" width="1/6">
        <Heading>Speed</Heading>
      </Column>
      <Column alignHorizontal="right" alignVertical="center" width="1/6">
        <Heading>Speed</Heading>
      </Column>
      <Column alignHorizontal="left" alignVertical="center" width="1/6">
        <Heading>Ball</Heading>
      </Column>
    </Columns>
  );
};
