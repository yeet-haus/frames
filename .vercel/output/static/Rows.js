import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
import { VStack } from './VStack.js';
export function Rows({ children, ...rest }) {
    return (_jsx(VStack, { height: "100%", ...rest, children: children }));
}
Rows.direction = 'horizontal';
export function Row({ children, height = '1/1', ...rest }) {
    const [numerator, denominator] = height.split('/');
    return (_jsx(Box, { flex: `${Number(numerator) / Number(denominator)}`, ...rest, children: children }));
}
Row.direction = 'horizontal';
//# sourceMappingURL=Rows.js.map