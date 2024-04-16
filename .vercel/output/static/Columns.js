import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
import { HStack } from './HStack.js';
export function Columns({ children, ...rest }) {
    return (_jsx(HStack, { wrap: false, ...rest, children: children }));
}
Columns.direction = 'vertical';
export function Column({ children, width = '1/1', ...rest }) {
    const [numerator, denominator] = width.split('/');
    return (_jsx(Box, { flex: `${Number(numerator) / Number(denominator)}`, height: "100%", ...rest, children: children }));
}
Column.direction = 'vertical';
//# sourceMappingURL=Columns.js.map