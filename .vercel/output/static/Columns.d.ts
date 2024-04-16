import { type BoxProps } from './Box.js';
import { type HStackProps } from './HStack.js';
import type { Fraction } from './types.js';
import type { DefaultVars, Vars } from './vars.js';
export type ColumnsProps<vars extends Vars = DefaultVars> = HStackProps<vars>;
export declare function Columns<vars extends Vars>({ children, ...rest }: ColumnsProps<vars>): JSX.Element;
export declare namespace Columns {
    var direction: string;
}
export type ColumnProps<vars extends Vars = DefaultVars> = Omit<BoxProps<vars>, 'width'> & {
    /** Sets the width span of the column (in fractions). */
    width?: '1/1' | Fraction<2> | Fraction<3> | Fraction<4> | Fraction<5> | Fraction<6> | Fraction<7>;
};
export declare function Column<vars extends Vars>({ children, width, ...rest }: ColumnProps<vars>): JSX.Element;
export declare namespace Column {
    var direction: string;
}
//# sourceMappingURL=Columns.d.ts.map