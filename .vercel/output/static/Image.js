import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
export function Image(props) {
    const { borderRadius, borderBottomLeftRadius, borderBottomRightRadius, borderTopLeftRadius, borderTopRightRadius, height, objectFit, src, width, } = props;
    return (_jsx(Box, { borderRadius: borderRadius, borderBottomLeftRadius: borderBottomLeftRadius, borderBottomRightRadius: borderBottomRightRadius, borderTopLeftRadius: borderTopLeftRadius, borderTopRightRadius: borderTopRightRadius, height: height, objectFit: objectFit, 
        // @ts-ignore - private
        src: src, width: width }));
}
//# sourceMappingURL=Image.js.map