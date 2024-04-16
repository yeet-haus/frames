import type { Child } from 'hono/jsx';
import { type BoxProps } from './Box.js';
import type { DefaultVars, Vars } from './vars.js';
export type TextProps<vars extends Vars = DefaultVars> = {
    /** Sets the horizontal alignment of the text. */
    align?: BoxProps<vars>['textAlign'];
    children: Child;
    /** Sets the color of the text. */
    color?: BoxProps<vars>['color'];
    /** Sets the text decoration. */
    decoration?: BoxProps<vars>['textDecoration'];
    /** Sets the font family of the text. */
    font?: BoxProps<vars>['fontFamily'];
    /** Sets the overflow behavior of the text. */
    overflow?: BoxProps<vars>['textOverflow'];
    /** Sets the shadow of the text. */
    shadow?: BoxProps<vars>['textShadow'];
    /** Sets the size of the font. */
    size?: BoxProps<vars>['fontSize'];
    /** Sets the style of the font. */
    style?: BoxProps<vars>['fontStyle'];
    /** Sets the horizontal spacing behavior between text characters. */
    tracking?: BoxProps<vars>['letterSpacing'];
    /** Sets the transform behavior of the text. */
    transform?: BoxProps<vars>['textTransform'];
    /** Sets the weight (or boldness) of the font. */
    weight?: BoxProps<vars>['fontWeight'];
    /** Defines how the text should be wrapped. */
    wrap?: true | 'balance';
};
export declare function Text<vars extends Vars>({ align, children, color, decoration, font, overflow, shadow, style, size, tracking, transform, weight, wrap, }: TextProps<vars>): JSX.Element;
//# sourceMappingURL=Text.d.ts.map