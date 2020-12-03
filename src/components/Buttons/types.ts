import { PressableProps } from 'react-native';

import { IconID } from '@components/Icons/types';
import { Size } from '@tokens/sizes';

export type ButtonSize = Size;

export type ButtonColor = 'uranus' | 'earth' | 'venus' | 'mars';

export interface ButtonProps extends PressableProps {
  /** Text to be shown inside the button */
  text: string;
  /** Color to be used as background color of button. Defaults to `"uranus"`. */
  color?: ButtonColor;
  /** Button press callback */
  onPress: () => void;
  /** Shows activity indicator inside button when true. Defaults to `false`.  */
  loading?: boolean;
  /** Supress any user interaction with component. Defaults to `false`. */
  disabled?: boolean;
  /** Used to locate this component in end-to-end tests */
  testID?: string;
  accessibilityLabel?: string;
  /** Specifies button size. Defaults to `"medium"`. */
  size?: ButtonSize;
  /** Button fills entire parent when set to true. Defaults to `false`. */
  fill?: boolean;
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
