import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

const GhostIconButton: React.FC<IconButtonProps> = ({
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  testID,
  ...props
}) => {
  const backgroundColor = 'transparent';
  const textColor = disabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
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
      <View testID="GhostIconButton.Icon">
        <Icon {...iconSize} color={textColor} />
      </View>
    </BaseButton>
  );
};

export default GhostIconButton;
