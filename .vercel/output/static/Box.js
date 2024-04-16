import { jsx as _jsx } from "frog/jsx/jsx-runtime";
import { defaultVars } from './vars.js';
const alignHorizontalToAlignItems = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    'space-between': 'space-between',
};
const alignVerticalToJustifyContent = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
    'space-between': 'space-between',
};
export function Box({ __context, children, grow, 
// @ts-ignore - private
src, ...rest }) {
    const { __context: _, ...boxProps } = getBoxProps({
        __context,
        children,
        grow,
        ...rest,
    });
    if (src)
        return _jsx("img", { ...boxProps, src: src });
    return _jsx("div", { ...boxProps, children: children });
}
function getBoxProps({ __context, children, grow, ...rest }) {
    const { colors, fonts, frame, units } = (__context?.vars ??
        defaultVars);
    const vheight = frame?.height ?? 630;
    const vwidth = frame?.width ?? 1200;
    const vmax = Math.max(vwidth, vheight);
    const display = rest.display ?? 'flex';
    const flexDirection = rest.flexDirection ?? 'column';
    const background = resolveColorToken(colors, rest.background);
    const backgroundColor = resolveColorToken(colors, rest.backgroundColor);
    const borderBottomColor = resolveColorToken(colors, rest.borderBottomColor);
    const borderBottomLeftRadius = resolveUnitToken(units, rest.borderBottomLeftRadius, vmax);
    const borderBottomRightRadius = resolveUnitToken(units, rest.borderBottomRightRadius, vmax);
    const borderBottomWidth = resolveUnitToken(units, rest.borderBottomWidth, vmax);
    const borderColor = resolveColorToken(colors, rest.borderColor);
    const borderLeftColor = resolveColorToken(colors, rest.borderLeftColor);
    const borderLeftWidth = resolveUnitToken(units, rest.borderLeftWidth, vmax);
    const borderRadius = resolveUnitToken(units, rest.borderRadius, vmax);
    const borderRightColor = resolveColorToken(colors, rest.borderRightColor);
    const borderRightWidth = resolveUnitToken(units, rest.borderRightWidth, vmax);
    const borderTopColor = resolveColorToken(colors, rest.borderTopColor);
    const borderTopLeftRadius = resolveUnitToken(units, rest.borderTopLeftRadius, vmax);
    const borderTopRightRadius = resolveUnitToken(units, rest.borderTopRightRadius, vmax);
    const borderTopWidth = resolveUnitToken(units, rest.borderTopWidth, vmax);
    const borderWidth = resolveUnitToken(units, rest.borderWidth, vmax);
    const bottom = resolveUnitToken(units, rest.bottom, vmax);
    const color = resolveColorToken(colors, rest.color, colors?.text);
    const fontSize = resolveUnitToken(units, rest.fontSize, vmax, units?.[16]);
    const height = resolveUnitToken(units, rest.height, vmax);
    const gap = resolveUnitToken(units, rest.gap, vmax);
    const left = resolveUnitToken(units, rest.left, vmax);
    const letterSpacing = resolveUnitToken(units, rest.letterSpacing, vwidth);
    const lineHeight = resolveUnitToken(units, rest.lineHeight, vheight);
    const margin = resolveUnitToken(units, rest.margin, vmax);
    const marginTop = resolveUnitToken(units, rest.marginTop, vmax);
    const marginBottom = resolveUnitToken(units, rest.marginBottom, vmax);
    const marginLeft = resolveUnitToken(units, rest.marginLeft, vmax);
    const marginRight = resolveUnitToken(units, rest.marginRight, vmax);
    const padding = resolveUnitToken(units, rest.padding, vmax);
    const paddingTop = resolveUnitToken(units, rest.paddingTop, vmax);
    const paddingBottom = resolveUnitToken(units, rest.paddingBottom, vmax);
    const paddingLeft = resolveUnitToken(units, rest.paddingLeft, vmax);
    const paddingRight = resolveUnitToken(units, rest.paddingRight, vmax);
    const right = resolveUnitToken(units, rest.right, vmax);
    const top = resolveUnitToken(units, rest.top, vmax);
    const width = resolveUnitToken(units, rest.width, vmax);
    const fontFamily = (() => {
        if (!rest.fontFamily)
            return fonts?.default?.[0]?.name;
        if (typeof rest.fontFamily === 'object')
            return rest.fontFamily.custom;
        return fonts?.[rest.fontFamily]?.[0]?.name;
    })();
    const alignItems = (() => {
        if (rest.alignItems)
            return rest.alignItems;
        if (flexDirection === 'column') {
            if (!rest.alignHorizontal)
                return;
            return alignHorizontalToAlignItems[rest.alignHorizontal];
        }
        if (!rest.alignVertical)
            return;
        return alignVerticalToJustifyContent[rest.alignVertical];
    })();
    const justifyContent = (() => {
        if (rest.justifyContent)
            return rest.justifyContent;
        if (flexDirection === 'column') {
            if (!rest.alignVertical)
                return;
            return alignVerticalToJustifyContent[rest.alignVertical];
        }
        if (!rest.alignHorizontal)
            return;
        return alignHorizontalToAlignItems[rest.alignHorizontal];
    })();
    const flexGrow = (() => {
        if (rest.flexGrow)
            return rest.flexGrow;
        return grow ? '1' : undefined;
    })();
    const style = {
        ...rest,
        alignItems,
        background,
        backgroundColor,
        borderColor,
        borderBottomColor,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderBottomWidth,
        borderLeftColor,
        borderLeftWidth,
        borderRadius,
        borderRightColor,
        borderRightWidth,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderTopColor,
        borderTopWidth,
        borderWidth,
        bottom,
        color,
        display,
        flexDirection,
        flexGrow,
        fontFamily,
        fontSize,
        height,
        justifyContent,
        gap,
        left,
        letterSpacing,
        lineHeight,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        right,
        top,
        width,
    };
    // remove `undefined` values from style prop
    for (const key of Object.keys(style)) {
        if (style[key])
            continue;
        delete style[key];
    }
    return { __context, style };
}
function resolveToken(vars, value, fallback) {
    if (!value)
        return { type: 'token', value: fallback };
    if (typeof value === 'object')
        return { type: 'custom', value: value.custom };
    return { type: 'token', value: vars?.[value] };
}
export function resolveColorToken(colors, value, fallback) {
    const color = resolveToken(colors, value, fallback);
    return color.value;
}
export function resolveUnitToken(units, value, baseUnit, fallback) {
    const normalizedValue = (() => {
        if (typeof value === 'string' && value.startsWith('-'))
            return value.slice(1);
        return value;
    })();
    const unit = resolveToken(units, normalizedValue, fallback);
    if (normalizedValue === '100%' || unit.value === '100%')
        return '100%';
    if (unit.type === 'custom')
        return unit.value;
    if (!unit.value)
        return undefined;
    const resolved = (typeof value === 'string' && value.startsWith('-') ? -1 : +1) *
        unit.value *
        baseUnit;
    return `${resolved}px`;
}
//# sourceMappingURL=Box.js.map