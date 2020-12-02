import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

/**
 * Outline icon buttons can be used for simple microinteractions and commands.
 */
const OutlineIconButton: React.FC<IconButtonProps> = ({
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  testID,
  ...props
}) => {
  const mainColor = disabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const iconSize = getIconSize(size);
  const Icon = getIcon(props.icon);
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
    fill: false,
  };

  return (
    <BaseButton {...props} {...baseProps} noHorizontalPadding>
      <View testID="OutlineIconButton.Icon">
        <Icon {...iconSize} color={mainColor} />
      </View>
    </BaseButton>
  );
};

export default OutlineIconButton;
