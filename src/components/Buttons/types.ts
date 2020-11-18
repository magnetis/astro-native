import React from 'react';
import { PressableProps } from 'react-native';

export type ButtonSize = 'very-small' | 'small' | 'medium' | 'large';

export type ButtonColor = 'uranus' | 'earth' | 'venus' | 'mars';

export interface ButtonProps extends PressableProps {
  text: string;
  color?: ButtonColor;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  ref?: React.Ref<any>;
  size?: ButtonSize;
  fill?: boolean;
}

export interface IconLabelButtonProps extends ButtonProps {
  icon: string;
  iconPosition?: 'left' | 'right';
}
