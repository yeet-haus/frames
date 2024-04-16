import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Text } from './Text.js';
export function Heading({ children, size = '32', tracking = '-1', weight = '700', ...rest }) {
    return (_jsx(Text, { tracking: tracking, size: size, weight: weight, ...rest, children: children }));
}
//# sourceMappingURL=Heading.js.map