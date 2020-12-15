import React from 'react';
import { PressableProps } from 'react-native';

import { IconID } from '@components/Icons/types';
import { Size } from '@tokens/sizes';

export type ButtonSize = Size;

export type ButtonColor = 'uranus' | 'earth' | 'venus' | 'mars';

export interface ButtonProps extends PressableProps {
  text: string;
  color?: ButtonColor;
  onPress: () => void;
  loading?: boolean;
  isDisabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  ref?: React.Ref<any>;
  size?: ButtonSize;
  fill?: boolean;
}

export interface IconLabelButtonProps extends ButtonProps {
  icon: IconID;
  iconPosition?: 'left' | 'right';
}

export interface IconButtonProps extends Omit<ButtonProps, 'text' | 'fill'> {
  icon: IconID;
}
