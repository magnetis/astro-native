import { Colors } from '@magnetis/astro-galaxy-tokens';
import { GradientID } from '@tokens/gradients';
import * as Icons from '.';

import type { GestureResponderEvent } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'color' | 'onPress'> {
  /** Id for icon gradient. Recomended to pass a unique value. */
  id?: string;
  /** A valid gradient name from `GradientID` */
  gradient?: GradientID;
  /** Width value */
  width?: number | string;
  /** Height value */
  height?: number | string;
  /** A valid color for Astro's colors */
  color?: Colors[keyof Colors];
  /** Size value. This value will be used as icon's width and height internally */
  size?: number;
  /** Called when a single tap gesture is detected */
  onPress?: (event: GestureResponderEvent) => void;
}

type Replace<T extends string, S extends string, D extends string, A extends string = ''> = T extends `${infer L}${S}`
  ? Replace<'', S, D, `${A}${L}${D}`>
  : `${A}${T}`;

export type IconID = Replace<keyof typeof Icons, 'Icon', ''>;
