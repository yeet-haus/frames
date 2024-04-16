import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
const alignHorizontalToAlignItems = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
const alignVerticalToJustifyContent = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    'space-between': 'space-between',
};
export function VStack({ alignHorizontal, alignVertical, children, ...rest }) {
    return (_jsx(Box, { alignItems: alignHorizontal
            ? alignHorizontalToAlignItems[alignHorizontal]
            : undefined, justifyContent: alignVertical ? alignVerticalToJustifyContent[alignVertical] : undefined, display: "flex", flexDirection: "column", ...rest, children: children }));
}
VStack.direction = 'horizontal';
//# sourceMappingURL=VStack.js.map