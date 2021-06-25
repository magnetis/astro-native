import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-tokens';

import { getButtonMainColor, getButtonSecondaryColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

/**
 * Icon buttons can be used for simple microinteractions and commands.
 */
const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  testID,
  ...props
}) => {
  const backgroundColor = disabled ? colors.moon300 : getButtonMainColor(color);
  const textColor = disabled ? colors.space100 : getButtonSecondaryColor(color);
  const iconSize = getIconSize(size);
  const Icon = getIcon(props.icon);
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
    fill: false,
    hasIcon: true,
  };

  return (
    <BaseButton {...props} {...baseProps} noHorizontalPadding>
      <View testID="IconButton.Icon">
        <Icon {...iconSize} color={textColor} />
      </View>
    </BaseButton>
  );
};

export default IconButton;
