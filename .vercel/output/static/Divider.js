import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box } from './Box.js';
export function Divider(props) {
    const { __context, color, direction = 'auto' } = props;
    const horizontalProps = { height: { custom: '1px' }, width: '100%' };
    const verticalProps = { height: '100%', width: { custom: '1px' } };
    const resolvedDirection = direction === 'auto' ? __context?.direction : direction;
    const resolvedProps = resolvedDirection === 'horizontal' ? horizontalProps : verticalProps;
    return (_jsx(Box, { backgroundColor: color ?? { custom: 'rgba(255,255,255,0.5)' }, ...resolvedProps }));
}
//# sourceMappingURL=Divider.js.map