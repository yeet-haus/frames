import { type BoxProps } from './Box.js';
import { type VStackProps } from './VStack.js';
import type { Fraction } from './types.js';
import type { DefaultVars, Vars } from './vars.js';
export type RowsProps<vars extends Vars = DefaultVars> = VStackProps<vars>;
export declare function Rows<vars extends Vars>({ children, ...rest }: RowsProps<vars>): JSX.Element;
export declare namespace Rows {
    var direction: string;
}
export type RowProps<vars extends Vars = DefaultVars> = Omit<BoxProps<vars>, 'height'> & {
    /** Sets the height span of the column (in fractions). */
    height?: '1/1' | Fraction<2> | Fraction<3> | Fraction<4> | Fraction<5> | Fraction<6> | Fraction<7>;
};
export declare function Row<vars extends Vars>({ children, height, ...rest }: RowProps<vars>): JSX.Element;
export declare namespace Row {
    var direction: string;
}
//# sourceMappingURL=Rows.d.ts.map