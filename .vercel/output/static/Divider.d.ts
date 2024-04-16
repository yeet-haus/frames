import { type BoxProps } from './Box.js';
import type { Direction } from './types.js';
import type { DefaultVars, Vars } from './vars.js';
export type DividerProps<vars extends Vars = DefaultVars> = Pick<BoxProps<vars>, 'color'> & {
    __context?: {
        direction?: Direction;
    } | undefined;
    /**
     * Sets the direction of the divider based on container.
     *
     * @default 'auto'
     */
    direction?: 'auto' | Direction | undefined;
};
export declare function Divider<vars extends Vars = DefaultVars>(props: DividerProps<vars>): JSX.Element;
//# sourceMappingURL=Divider.d.ts.map