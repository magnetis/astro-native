import { PressableProps } from 'react-native';

import { IconID } from '@components/Icons/types';
import { Size } from '@tokens/sizes';

export type ButtonSize = Size;

export type ButtonColor = 'uranus' | 'earth' | 'venus' | 'mars';

export interface ButtonProps extends PressableProps {
  /** Text to be shown inside the button */
  text: string;
  /** Color to be used as background color of button */
  color?: ButtonColor;
  /** Button press callback */
  onPress: () => void;
  /** Shows activity indicator inside button when true  */
  loading?: boolean;
  /** Supress any user interaction with component */
  disabled?: boolean;
  /** TestID string for testing */
  testID?: string;
  accessibilityLabel?: string;
  /** Specifies button size */
  size?: ButtonSize;
  /** Button fills entire parent when set to true */
  fill?: boolean;
}

export interface IconLabelButtonProps extends ButtonProps {
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
  /** Whether icon will be positioned on left or right of text */
  iconPosition?: 'left' | 'right';
}

export interface IconButtonProps extends Omit<ButtonProps, 'text' | 'fill'> {
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
}
