import type { Assign } from '../types/utils.js';
import { Box } from './Box.js';
import { Column, Columns } from './Columns.js';
import { Divider } from './Divider.js';
import { HStack } from './HStack.js';
import { Heading } from './Heading.js';
import { type IconProps } from './Icon.js';
import { Image } from './Image.js';
import { Row, Rows } from './Rows.js';
import { Spacer } from './Spacer.js';
import { Text } from './Text.js';
import { VStack } from './VStack.js';
import { type DefaultVars, type Vars } from './vars.js';
/**
 * Creates a UI System with optional variables.
 *
 * @example
 * ```tsx
 * import { createSystem } from 'frog/ui'
 *
 * const { Box, Columns, Text } = createSystem()
 * ```
 *
 * @example
 * ```tsx
 * import { colors, createSystem } from 'frog/ui'
 *
 * const { Box, HStack, Text } = createSystem({
 *   colors: colors.light,
 *   fonts: [...]
 * })
 * ```
 */
export declare function createSystem<vars extends Vars = DefaultVars>(vars?: vars | undefined): {
    /**
     * The fundamental primitive component that includes style
     * properties (such as: `backgroundColor`, `border`,
     * `padding`, and more), and corresponding vars as values.
     *
     * By default, it renders a `div` element.
     *
     * @example
     * ```tsx
     * <Box backgroundColor="red" padding="16" />
     *   Hello, world!
     * </Box>
     * ```
     *
     * @see https://frog.fm/ui/box
     */
    Box: ({ __context, children, grow, src, ...rest }: import("./Box.js").BoxProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Renders children horizontally, with consistent spacing (if specified)
     * between them. Columns can also have a specific `width` value.
     *
     * @example
     * ```tsx
     * <Columns gap="8" grow>
     *   <Column backgroundColor="red" height="100%" />
     *   <Column backgroundColor="red" height="100%" />
     *   <Column backgroundColor="red" height="100%" />
     *   <Column backgroundColor="red" height="100%" />
     * </Columns>
     * ```
     *
     * @example
     * ```tsx
     * <Columns gap="8" grow>
     *   <Column backgroundColor="red" height="100%" width="1/3" />
     *   <Column backgroundColor="red" height="100%" width="2/3" />
     * </Columns>
     * ```
     *
     * @see https://frog.fm/ui/columns
     */
    Columns: {
        ({ children, ...rest }: import("./Columns.js").ColumnsProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * The child component of `Columns`.
     *
     * @see https://frog.fm/ui/columns
     */
    Column: {
        ({ children, width, ...rest }: import("./Columns.js").ColumnProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * Renders a visual element that can be used to separate other content.
     *
     * When contained in a stack, the divider extends across the minor axis of the stack, or horizontally when not in a stack.
     *
     * @example
     *
     * <HStack gap="8">
     *   <Box backgroundColor="red" height="100%" />
     *   <Divider />
     *   <Box backgroundColor="red" height="100%" />
     * </HStack>
     *
     * @see https://frog.fm/ui/divider
     */
    Divider: (props: import("./Divider.js").DividerProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Renders a heading element.
     *
     * @example
     * <Heading>Hello world</Heading>
     *
     * @see https://frog.fm/ui/heading
     */
    Heading: ({ children, size, tracking, weight, ...rest }: import("./Heading.js").HeadingProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Arranges child nodes horizontally, wrapping to multiple lines if needed,
     * with equal spacing between items.
     *
     * @example
     * <HStack gap="8">
     *   <Box backgroundColor="red" height="100%" />
     *   <Box backgroundColor="red" height="100%" />
     *   <Box backgroundColor="red" height="100%" />
     *   <Box backgroundColor="red" height="100%" />
     * </HStack>
     *
     * @see https://frog.fm/ui/hstack
     */
    HStack: {
        ({ alignHorizontal, alignVertical, children, wrap, ...rest }: import("./HStack.js").HStackProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * Renders a icon element.
     *
     * @example
     * <Icon color="green800" name="bolt" />
     *
     * @see https://frog.fm/ui/icon
     */
    Icon: <vars_1 extends Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>, collection extends "heroicons" | "lucide" | "radix-icons" | undefined = "lucide">(props: IconProps<vars_1, collection>) => JSX.Element;
    /**
     * Renders a image element.
     *
     * @example
     * <Image
     *   objectFit="contain"
     *   src="/frog.png"
     *   height="100%"
     *   width="100%"
     * />
     *
     * @see https://frog.fm/ui/image
     */
    Image: (props: import("./Image.js").ImageProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Renders children vertically in equal-height rows by default,
     * with consistent spacing between them.
     *
     * @example
     * <Rows gap="8">
     *   <Row backgroundColor="red" width="100%" />
     *   <Row backgroundColor="red" width="100%" />
     *   <Row backgroundColor="red" width="100%" />
     *   <Row backgroundColor="red" width="100%" />
     * </Rows>
     *
     * @example
     * <Rows gap="8">
     *   <Row backgroundColor="red" width="100%" height="1/3" />
     *   <Row backgroundColor="red" width="100%" height="2/3" />
     * </Rows>
     *
     * @see https://frog.fm/ui/rows
     */
    Rows: {
        ({ children, ...rest }: import("./Rows.js").RowsProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * The child component of `Rows`.
     *
     * @see https://frog.fm/ui/rows
     */
    Row: {
        ({ children, height, ...rest }: import("./Rows.js").RowProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * Adds spacing between nodes. If no size is specified,
     * it will span between the nodes.
     *
     * @example
     * <Spacer size="16" />
     *
     * @see https://frog.fm/ui/spacer
     */
    Spacer: ({ size }: import("./Spacer.js").SpacerProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Renders a text element.
     *
     * @example
     * <Text>Hello world</Text>
     *
     * @see https://frog.fm/ui/text
     */
    Text: ({ align, children, color, decoration, font, overflow, shadow, style, size, tracking, transform, weight, wrap, }: import("./Text.js").TextProps<Assign<{
        readonly colors: {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        readonly fontSizes: {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        readonly frame: {
            readonly height: 630;
            readonly width: 1200;
        };
        readonly icons: "lucide";
        readonly units: {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    }, vars>>) => JSX.Element;
    /**
     * Arranges children vertically with equal spacing between them.
     *
     * @example
     * <VStack gap="8" grow>
     *  <Box backgroundColor="red" width="100%" />
     *  <Box backgroundColor="red" width="100%" />
     *  <Box backgroundColor="red" width="100%" />
     *  <Box backgroundColor="red" width="100%" />
     * </VStack>
     *
     * @see https://frog.fm/ui/vstack
     */
    VStack: {
        ({ alignHorizontal, alignVertical, children, ...rest }: import("./VStack.js").VStackProps<Assign<{
            readonly colors: {
                readonly background: "#000000";
                readonly background100: "#000000";
                readonly background200: "#191A1C";
                readonly invert: "#ffffff";
                readonly text: "#ffffff";
                readonly text100: "#ffffff";
                readonly text200: "#C2C5CB";
                readonly text300: "#9A9BA1";
                readonly text400: "#78797E";
                readonly gray100: "#1a1a1a";
                readonly gray200: "#1f1f1f";
                readonly gray300: "#292929";
                readonly gray400: "#2e2e2e";
                readonly gray500: "#454545";
                readonly gray600: "#878787";
                readonly gray: "#8f8f8f";
                readonly gray700: "#8f8f8f";
                readonly gray800: "#7d7d7d";
                readonly gray900: "#a1a1a1";
                readonly gray1000: "#ededed";
                readonly blue100: "#06193a";
                readonly blue200: "#06193a";
                readonly blue300: "#012f61";
                readonly blue400: "#003674";
                readonly blue500: "#00418c";
                readonly blue600: "#008fff";
                readonly blue: "#006ffe";
                readonly blue700: "#006ffe";
                readonly blue800: "#005be7";
                readonly blue900: "#47a8ff";
                readonly blue1000: "#ebf6ff";
                readonly red100: "#330a10";
                readonly red200: "#440c13";
                readonly red300: "#5d0e18";
                readonly red400: "#6e101c";
                readonly red500: "#871620"; /**
                 * The fundamental primitive component that includes style
                 * properties (such as: `backgroundColor`, `border`,
                 * `padding`, and more), and corresponding vars as values.
                 *
                 * By default, it renders a `div` element.
                 *
                 * @example
                 * ```tsx
                 * <Box backgroundColor="red" padding="16" />
                 *   Hello, world!
                 * </Box>
                 * ```
                 *
                 * @see https://frog.fm/ui/box
                 */
                readonly red600: "#f22e41";
                readonly red: "#f13342";
                readonly red700: "#f13342";
                readonly red800: "#e2162a";
                readonly red900: "#ff575e";
                readonly red1000: "#ffe9ed";
                readonly amber100: "#2a1700";
                readonly amber200: "#361a00";
                readonly amber300: "#502800";
                readonly amber400: "#5b3000";
                readonly amber500: "#703f00";
                readonly amber600: "#ed9a00";
                readonly amber: "#ffae00";
                readonly amber700: "#ffae00";
                readonly amber800: "#ff9300";
                readonly amber900: "#ff9300";
                readonly amber1000: "#fff2d5";
                readonly green100: "#002608";
                readonly green200: "#00320b";
                readonly green300: "#00390e"; /**
                 * Renders children horizontally, with consistent spacing (if specified)
                 * between them. Columns can also have a specific `width` value.
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 *   <Column backgroundColor="red" height="100%" />
                 * </Columns>
                 * ```
                 *
                 * @example
                 * ```tsx
                 * <Columns gap="8" grow>
                 *   <Column backgroundColor="red" height="100%" width="1/3" />
                 *   <Column backgroundColor="red" height="100%" width="2/3" />
                 * </Columns>
                 * ```
                 *
                 * @see https://frog.fm/ui/columns
                 */
                readonly green400: "#004614";
                readonly green500: "#006717";
                readonly green600: "#00952d";
                readonly green: "#00ac3a";
                readonly green700: "#00ac3a";
                readonly green800: "#009431";
                readonly green900: "#00ca51";
                readonly green1000: "#d8ffe4";
                readonly teal100: "#00231b";
                readonly teal200: "#002b22";
                readonly teal300: "#003d34";
                readonly teal400: "#004036";
                readonly teal500: "#006354";
                readonly teal600: "#009e86";
                readonly teal: "#00aa96";
                readonly teal700: "#00aa96";
                readonly teal800: "#00927f";
                readonly teal900: "#00cfb7";
                readonly teal1000: "#cbfff5";
                readonly purple100: "#2a0c33";
                readonly purple200: "#331141";
                readonly purple300: "#48185e";
                readonly purple400: "#551a76";
                readonly purple500: "#642290";
                readonly purple600: "#9340d5";
                readonly purple: "#9340d5";
                readonly purple700: "#9340d5";
                readonly purple800: "#7e2bbb";
                readonly purple900: "#c372fc";
                readonly purple1000: "#faedff";
                readonly pink100: "#310d1d";
                readonly pink200: "#420d26";
                readonly pink300: "#561033";
                readonly pink400: "#5d0d35";
                readonly pink500: "#75073f";
                readonly pink600: "#ba0056";
                readonly pink: "#f12b82";
                readonly pink700: "#f12b82";
                readonly pink800: "#e7006d";
                readonly pink900: "#ff4c8d";
                readonly pink1000: "#ffe8f4";
            };
            readonly fontSizes: {
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '24': number;
                readonly '32': number;
                readonly '48': number;
                readonly '64': number;
            };
            readonly frame: {
                readonly height: 630;
                readonly width: 1200;
            };
            readonly icons: "lucide";
            readonly units: {
                readonly '0': 0;
                readonly '1': number;
                readonly '2': number;
                readonly '3': number;
                readonly '4': number;
                readonly '6': number;
                readonly '8': number;
                readonly '10': number;
                readonly '12': number;
                readonly '14': number;
                readonly '16': number;
                readonly '18': number;
                readonly '20': number;
                readonly '22': number;
                readonly '24': number;
                readonly '26': number;
                readonly '28': number;
                readonly '30': number;
                readonly '32': number;
                readonly '34': number;
                readonly '36': number;
                readonly '38': number;
                readonly '40': number;
                readonly '42': number;
                readonly '44': number;
                readonly '46': number;
                readonly '48': number;
                readonly '52': number;
                readonly '56': number;
                readonly '60': number;
                readonly '64': number;
                readonly '72': number;
                readonly '80': number;
                readonly '96': number;
                readonly '128': number; /**
                 * Arranges children vertically with equal spacing between them.
                 *
                 * @example
                 * <VStack gap="8" grow>
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 *  <Box backgroundColor="red" width="100%" />
                 * </VStack>
                 *
                 * @see https://frog.fm/ui/vstack
                 */
                readonly '160': number;
                readonly '192': number;
                readonly '224': number;
                readonly '256': number;
            };
        }, vars>>): JSX.Element;
        direction: string;
    };
    /**
     * The vars object that includes all the UI vars to be used
     * on the primitive components.
     */
    vars: {
        colors: Record<string, string> | {
            readonly background: "#000000";
            readonly background100: "#000000";
            readonly background200: "#191A1C";
            readonly invert: "#ffffff";
            readonly text: "#ffffff";
            readonly text100: "#ffffff";
            readonly text200: "#C2C5CB";
            readonly text300: "#9A9BA1";
            readonly text400: "#78797E";
            readonly gray100: "#1a1a1a";
            readonly gray200: "#1f1f1f";
            readonly gray300: "#292929";
            readonly gray400: "#2e2e2e";
            readonly gray500: "#454545";
            readonly gray600: "#878787";
            readonly gray: "#8f8f8f";
            readonly gray700: "#8f8f8f";
            readonly gray800: "#7d7d7d";
            readonly gray900: "#a1a1a1";
            readonly gray1000: "#ededed";
            readonly blue100: "#06193a";
            readonly blue200: "#06193a";
            readonly blue300: "#012f61";
            readonly blue400: "#003674";
            readonly blue500: "#00418c";
            readonly blue600: "#008fff";
            readonly blue: "#006ffe";
            readonly blue700: "#006ffe";
            readonly blue800: "#005be7";
            readonly blue900: "#47a8ff";
            readonly blue1000: "#ebf6ff";
            readonly red100: "#330a10";
            readonly red200: "#440c13";
            readonly red300: "#5d0e18";
            readonly red400: "#6e101c";
            readonly red500: "#871620"; /**
             * The fundamental primitive component that includes style
             * properties (such as: `backgroundColor`, `border`,
             * `padding`, and more), and corresponding vars as values.
             *
             * By default, it renders a `div` element.
             *
             * @example
             * ```tsx
             * <Box backgroundColor="red" padding="16" />
             *   Hello, world!
             * </Box>
             * ```
             *
             * @see https://frog.fm/ui/box
             */
            readonly red600: "#f22e41";
            readonly red: "#f13342";
            readonly red700: "#f13342";
            readonly red800: "#e2162a";
            readonly red900: "#ff575e";
            readonly red1000: "#ffe9ed";
            readonly amber100: "#2a1700";
            readonly amber200: "#361a00";
            readonly amber300: "#502800";
            readonly amber400: "#5b3000";
            readonly amber500: "#703f00";
            readonly amber600: "#ed9a00";
            readonly amber: "#ffae00";
            readonly amber700: "#ffae00";
            readonly amber800: "#ff9300";
            readonly amber900: "#ff9300";
            readonly amber1000: "#fff2d5";
            readonly green100: "#002608";
            readonly green200: "#00320b";
            readonly green300: "#00390e"; /**
             * Renders children horizontally, with consistent spacing (if specified)
             * between them. Columns can also have a specific `width` value.
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             *   <Column backgroundColor="red" height="100%" />
             * </Columns>
             * ```
             *
             * @example
             * ```tsx
             * <Columns gap="8" grow>
             *   <Column backgroundColor="red" height="100%" width="1/3" />
             *   <Column backgroundColor="red" height="100%" width="2/3" />
             * </Columns>
             * ```
             *
             * @see https://frog.fm/ui/columns
             */
            readonly green400: "#004614";
            readonly green500: "#006717";
            readonly green600: "#00952d";
            readonly green: "#00ac3a";
            readonly green700: "#00ac3a";
            readonly green800: "#009431";
            readonly green900: "#00ca51";
            readonly green1000: "#d8ffe4";
            readonly teal100: "#00231b";
            readonly teal200: "#002b22";
            readonly teal300: "#003d34";
            readonly teal400: "#004036";
            readonly teal500: "#006354";
            readonly teal600: "#009e86";
            readonly teal: "#00aa96";
            readonly teal700: "#00aa96";
            readonly teal800: "#00927f";
            readonly teal900: "#00cfb7";
            readonly teal1000: "#cbfff5";
            readonly purple100: "#2a0c33";
            readonly purple200: "#331141";
            readonly purple300: "#48185e";
            readonly purple400: "#551a76";
            readonly purple500: "#642290";
            readonly purple600: "#9340d5";
            readonly purple: "#9340d5";
            readonly purple700: "#9340d5";
            readonly purple800: "#7e2bbb";
            readonly purple900: "#c372fc";
            readonly purple1000: "#faedff";
            readonly pink100: "#310d1d";
            readonly pink200: "#420d26";
            readonly pink300: "#561033";
            readonly pink400: "#5d0d35";
            readonly pink500: "#75073f";
            readonly pink600: "#ba0056";
            readonly pink: "#f12b82";
            readonly pink700: "#f12b82";
            readonly pink800: "#e7006d";
            readonly pink900: "#ff4c8d";
            readonly pink1000: "#ffe8f4";
        };
        fonts?: Record<string, import("../types/frame.js").Font[]> | undefined;
        fontSizes: Record<string, number> | {
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '24': number;
            readonly '32': number;
            readonly '48': number;
            readonly '64': number;
        };
        frame: {
            height?: undefined;
            width?: undefined;
        } | {
            height: number;
            width: number;
        } | {
            readonly height: 630;
            readonly width: 1200;
        };
        icons: "heroicons" | "lucide" | "radix-icons";
        units: Record<string, number | "100%"> | {
            readonly '0': 0;
            readonly '1': number;
            readonly '2': number;
            readonly '3': number;
            readonly '4': number;
            readonly '6': number;
            readonly '8': number;
            readonly '10': number;
            readonly '12': number;
            readonly '14': number;
            readonly '16': number;
            readonly '18': number;
            readonly '20': number;
            readonly '22': number;
            readonly '24': number;
            readonly '26': number;
            readonly '28': number;
            readonly '30': number;
            readonly '32': number;
            readonly '34': number;
            readonly '36': number;
            readonly '38': number;
            readonly '40': number;
            readonly '42': number;
            readonly '44': number;
            readonly '46': number;
            readonly '48': number;
            readonly '52': number;
            readonly '56': number;
            readonly '60': number;
            readonly '64': number;
            readonly '72': number;
            readonly '80': number;
            readonly '96': number;
            readonly '128': number; /**
             * Arranges children vertically with equal spacing between them.
             *
             * @example
             * <VStack gap="8" grow>
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             *  <Box backgroundColor="red" width="100%" />
             * </VStack>
             *
             * @see https://frog.fm/ui/vstack
             */
            readonly '160': number;
            readonly '192': number;
            readonly '224': number;
            readonly '256': number;
        };
    };
};
//# sourceMappingURL=createSystem.d.ts.map