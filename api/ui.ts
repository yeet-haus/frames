import { createSystem } from 'frog/ui';

export const {
  Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars,
} = createSystem({
  colors: {
    white: '#E6F9F4',
    black: '#000000',
    teal: '#57BCAD',
    blue: '#3B8FF2',
    orange: `#F08643`,
  },
  fonts: {
    default: [
      {
        name: 'Jersey 15',
        source: 'google',
        weight: 400,
      },
    ],
  },
});
