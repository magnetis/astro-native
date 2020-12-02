import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getButtonSecondaryColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

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
