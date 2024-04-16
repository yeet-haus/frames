import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
const alignHorizontalToJustifyContent = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    'space-between': 'space-between',
};
const alignVerticalToAlignItems = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
};
export function HStack({ alignHorizontal = 'left', alignVertical = 'top', children, wrap = true, ...rest }) {
    return (_jsx(Box, { alignContent: wrap ? alignVerticalToAlignItems[alignVertical] : undefined, alignItems: !wrap ? alignVerticalToAlignItems[alignVertical] : undefined, display: "flex", flexDirection: "row", justifyContent: alignHorizontalToJustifyContent[alignHorizontal], flexWrap: wrap ? 'wrap' : 'nowrap', ...rest, children: children }));
}
HStack.direction = 'vertical';
//# sourceMappingURL=HStack.js.map