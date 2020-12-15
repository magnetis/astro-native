import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

const GhostIconButton: React.FC<IconButtonProps> = ({
  ref,
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  isDisabled = false,
  size = 'medium',
  testID,
  ...props
}) => {
  const backgroundColor = 'transparent';
  const textColor = isDisabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const iconSize = getIconSize(size);
  const Icon = getIcon(props.icon);
  const baseProps = {
    activityIndicatorColor: textColor,
    borderColor: backgroundColor,
    accessibilityLabel,
    backgroundColor,
    isDisabled,
    textColor,
    loading,
    onPress,
    testID,
    size,
    fill: false,
    ref,
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
