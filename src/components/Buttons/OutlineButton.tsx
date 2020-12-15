import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseButtonText from './BaseButtonText';
import { getButtonMainColor } from './utils';
import type { ButtonProps } from './types';
import BaseButton from './BaseButton';

const OutlineButton: React.FC<ButtonProps> = ({
  ref,
  text,
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  isDisabled = false,
  size = 'medium',
  fill = false,
  testID,
  ...props
}) => {
  const mainColor = isDisabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const baseProps = {
    activityIndicatorColor: mainColor,
    backgroundColor: 'transparent',
    borderColor: mainColor,
    textColor: mainColor,
    accessibilityLabel,
    isDisabled,
    loading,
    onPress,
    testID,
    size,
    fill,
    ref,
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
