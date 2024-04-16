import { type BoxProps } from './Box.js';
import type { DefaultVars, Vars } from './vars.js';
export type HStackProps<vars extends Vars = DefaultVars> = Pick<BoxProps<vars>, 'bottom' | 'children' | 'flex' | 'flexBasis' | 'flexFlow' | 'flexShrink' | 'gap' | 'grow' | 'height' | 'left' | 'maxHeight' | 'maxWidth' | 'maxWidth' | 'minWidth' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'right' | 'top' | 'width'> & {
    /** Horizontally aligns the contents. */
    alignHorizontal?: 'left' | 'center' | 'right' | 'space-between';
    /** Vertically aligns the contents. */
    alignVertical?: 'top' | 'center' | 'bottom';
    /** Wraps the contents if they overflow. */
    wrap?: boolean;
};
export declare function HStack<vars extends Vars>({ alignHorizontal, alignVertical, children, wrap, ...rest }: HStackProps<vars>): JSX.Element;
export declare namespace HStack {
    var direction: string;
}
//# sourceMappingURL=HStack.d.ts.map