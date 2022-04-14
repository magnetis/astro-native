import { PressableProps } from 'react-native';

import { IconID } from '@components/Icons/types';
import type { Size } from '@tokens/sizes';

export type ButtonSize = Size;

export type ButtonColor = 'uranus' | 'earth' | 'venus' | 'mars' | 'moon' | 'space';

export interface ButtonProps extends PressableProps {
  /** Color to be used as background color of button. Defaults to `"uranus"`. */
  color?: ButtonColor;
  /** Button fills entire parent when set to true. Defaults to `false`. */
  fill?: boolean;
  /** Shows activity indicator inside button when true. Defaults to `false`.  */
  loading?: boolean;
  /** Feedback opacity for button. */
  opacity?: number;
  /** Specifies button size. Defaults to `"medium"`. */
  size?: ButtonSize;
  /** Text to be shown inside the button */
  text: string;
}

export interface IconLabelButtonProps extends ButtonProps {
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
  /** Whether icon will be positioned on left or right of text. Defaults to `"left"`. */
  iconPosition?: 'left' | 'right';
}

export interface IconButtonProps extends Omit<ButtonProps, 'text' | 'fill'> {
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
}
