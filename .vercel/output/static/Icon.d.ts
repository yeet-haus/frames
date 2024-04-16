import { type BoxProps } from './Box.js';
import { icons } from './icons.js';
import { type DefaultVars, type Vars } from './vars.js';
export type IconProps<vars extends Vars = DefaultVars, collection extends Vars['icons'] = DefaultVars['icons']> = {
    __context?: {
        vars?: Vars | undefined;
    } | undefined;
    /**
     * Sets the color of the icon.
     *
     * Note: This prop is only supported when {@link mode} is `'mask'` or `'auto'` (and the icon with {@link name} is inferred as `'mask'`).
     */
    color?: BoxProps<vars>['backgroundColor'];
    /**
     * Sets rendering mode of the icon.
     *
     * @default auto
     */
    mode?: 'auto' | 'bg' | 'mask' | undefined;
    /**
     * Icon collection to use for resolving icons.
     *
     * @default 'lucide'
     */
    collection?: collection | Vars['icons'] | undefined;
    /** Icon name in the current icon collection. */
    name: keyof (typeof icons)[collection extends keyof typeof icons ? collection : never];
    /** Sets the size of the icon. */
    size?: BoxProps<vars>['width'];
};
export declare function Icon<vars extends Vars, collection extends Vars['icons'] = DefaultVars['icons']>(props: IconProps<vars, collection>): JSX.Element;
//# sourceMappingURL=Icon.d.ts.map