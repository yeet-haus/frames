import { type TextProps } from './Text.js';
import type { DefaultVars, Vars } from './vars.js';
export type HeadingProps<vars extends Vars = DefaultVars> = TextProps<vars>;
export declare function Heading<vars extends Vars>({ children, size, tracking, weight, ...rest }: HeadingProps<vars>): JSX.Element;
//# sourceMappingURL=Heading.d.ts.map