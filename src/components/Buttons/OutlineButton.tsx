import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor } from './utils';
import type { ButtonProps } from './types';
import BaseButton from './BaseButton';
import BaseText from './BaseText';

const OutlineButton: React.FC<ButtonProps> = ({
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
  const mainColor = isDisabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const baseProps = {
    activityIndicatorColor: mainColor,
    backgroundColor: 'transparent',
    borderColor: mainColor,
    textColor: mainColor,
    accessibilityLabel,
    isDisabled,
    isLoading,
    onPress,
    testID,
    size,
    fill,
    ref,
  };

  return (
    <BaseButton {...props} {...baseProps}>
      <BaseText size={size} color={mainColor}>
        {text}
      </BaseText>
    </BaseButton>
  );
};

export default OutlineButton;
