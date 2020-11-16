import { Colors } from '@magnetis/astro-galaxy-tokens';
import { GradientID } from '@tokens/gradients';
import type { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'color'> {
  id?: string;
  gradient?: GradientID;
  width?: number | string;
  height?: number | string;
  color?: Colors[keyof Colors];
}
