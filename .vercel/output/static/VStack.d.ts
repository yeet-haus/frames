import { type BoxProps } from './Box.js';
import type { DefaultVars, Vars } from './vars.js';
export type VStackProps<vars extends Vars = DefaultVars> = Pick<BoxProps<vars>, 'bottom' | 'children' | 'flex' | 'flexBasis' | 'flexFlow' | 'flexShrink' | 'gap' | 'grow' | 'height' | 'left' | 'maxHeight' | 'maxWidth' | 'maxWidth' | 'minWidth' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'right' | 'top' | 'width'> & {
    /** Horizontally aligns the contents. */
    alignHorizontal?: 'left' | 'center' | 'right';
    /** Vertically aligns the contents. */
    alignVertical?: 'top' | 'center' | 'bottom' | 'space-between';
};
export declare function VStack<vars extends Vars>({ alignHorizontal, alignVertical, children, ...rest }: VStackProps<vars>): JSX.Element;
export declare namespace VStack {
    var direction: string;
}
//# sourceMappingURL=VStack.d.ts.map