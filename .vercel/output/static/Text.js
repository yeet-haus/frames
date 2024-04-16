import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
const alignToAlignItems = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
export function Text({ align, children, color, decoration, font, overflow, shadow, style, size, tracking, transform, weight, wrap, }) {
    return (_jsx(Box, { alignItems: align ? alignToAlignItems[align] : undefined, color: color, fontFamily: font, fontSize: size, fontStyle: style, fontWeight: weight, letterSpacing: tracking, textDecoration: decoration, textOverflow: overflow, textShadow: shadow, textTransform: transform, textWrap: wrap === true ? 'wrap' : wrap, children: children }));
}
//# sourceMappingURL=Text.js.map