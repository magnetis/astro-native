import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getButtonSecondaryColor } from './utils';
import BaseButtonText from './BaseButtonText';
import type { ButtonProps } from './types';
import BaseButton from './BaseButton';

const PrimaryButton: React.FC<ButtonProps> = ({
  ref,
  text,
  onPress,
  accessibilityLabel = '',
  isLoading = false,
  color = 'uranus',
  isDisabled = false,
  size = 'medium',
  fill = false,
  testID,
  ...props
}) => {
  const backgroundColor = isDisabled ? colors.moon300 : getButtonMainColor(color);
  const textColor = isDisabled ? colors.space100 : getButtonSecondaryColor(color);
  const baseProps = {
    activityIndicatorColor: textColor,
    borderColor: backgroundColor,
    accessibilityLabel,
    backgroundColor,
    isDisabled,
    textColor,
    isLoading,
    onPress,
    testID,
    size,
    fill,
    ref,
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
