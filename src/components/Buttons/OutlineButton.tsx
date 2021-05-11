import React from 'react';
import { colors } from '@magnetis/astro-tokens';

import BaseButtonText from './BaseButtonText';
import { getButtonMainColor } from './utils';
import type { ButtonProps } from './types';
import BaseButton from './BaseButton';

/**
 * Outline buttons can be used as secondary roles. Secondary buttons present secondary actions when there's already a primary action in the same section or screen.
 */
const OutlineButton: React.FC<ButtonProps> = ({
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
  const mainColor = disabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const baseProps = {
    activityIndicatorColor: mainColor,
    backgroundColor: 'transparent',
    borderColor: mainColor,
    textColor: mainColor,
    accessibilityLabel,
    disabled,
    loading,
    onPress,
    testID,
    size,
    fill,
  };

  return (
    <BaseButton {...props} {...baseProps}>
      <BaseButtonText size={size} color={mainColor}>
        {text}
      </BaseButtonText>
    </BaseButton>
  );
};

export default OutlineButton;
