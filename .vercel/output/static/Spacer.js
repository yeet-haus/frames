import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
export function Spacer({ size }) {
    return _jsx(Box, { grow: size ? undefined : true, height: size, width: size });
}
//# sourceMappingURL=Spacer.js.map