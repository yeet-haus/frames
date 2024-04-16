import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { Box, resolveColorToken } from './Box.js';
import { icons } from './icons.js';
import { defaultVars } from './vars.js';
export function Icon(props) {
    const { __context, collection = __context?.vars?.icons ?? 'lucide', mode = 'auto', name, size = '24', } = props;
    const iconMap = icons[collection];
    let text = iconMap[name];
    if (!text)
        throw new TypeError(`Invalid set: ${collection}`);
    const resolvedMode = (() => {
        if (mode === 'auto')
            return text.includes('currentColor') ? 'mask' : 'bg';
        return mode;
    })();
    // ideally we would use `mask-image`, but satori doesn't support `currentColor` on `background`
    // so need to inject color into svg content directly
    // inspo: https://antfu.me/posts/icons-in-pure-css
    if (resolvedMode === 'mask') {
        const { colors } = (__context?.vars ?? defaultVars);
        const color = resolveColorToken(colors, props.color ?? 'gray700');
        text = text.replace(/currentColor/g, encodeURIComponent(color));
    }
    return (_jsx(Box, { __context: __context, backgroundImage: `url('data:image/svg+xml;utf8,${text}')`, backgroundColor: { custom: 'transparent' }, backgroundSize: "100% 100%", height: size, width: size }));
}
//# sourceMappingURL=Icon.js.map