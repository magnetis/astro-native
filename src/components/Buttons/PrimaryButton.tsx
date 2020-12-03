import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getButtonSecondaryColor } from './utils';
import BaseButtonText from './BaseButtonText';
import type { ButtonProps } from './types';
import BaseButton from './BaseButton';

/**
 * Primary buttons have a colored background.
 *
 *  Use these for the main action in a section or screen. You should display only one primary button at a time.
 *
 */
const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  fill = false,
  testID,
  ...props
}) => {
  const backgroundColor = disabled ? colors.moon300 : getButtonMainColor(color);
  const textColor = disabled ? colors.space100 : getButtonSecondaryColor(color);
  const baseProps = {
    activityIndicatorColor: textColor,
    borderColor: backgroundColor,
    accessibilityLabel,
    backgroundColor,
    disabled,
    textColor,
    loading,
    onPress,
    testID,
    size,
    fill,
  };

  return (
    <BaseButton {...props} {...baseProps}>
      <BaseButtonText size={size} color={textColor}>
        {text}
      </BaseButtonText>
    </BaseButton>
  );
};

export default PrimaryButton;
