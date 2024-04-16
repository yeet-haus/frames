import { type VariableValue } from './Box.js';
import type { DefaultVars, Vars } from './vars.js';
export type SpacerProps<vars extends Vars = DefaultVars> = {
    /** Sets the size of the spacing. */
    size?: VariableValue<'width', keyof vars['units']>;
};
export declare function Spacer<vars extends Vars>({ size }: SpacerProps<vars>): JSX.Element;
//# sourceMappingURL=Spacer.d.ts.map