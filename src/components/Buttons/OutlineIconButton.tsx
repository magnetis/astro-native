import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

const OutlineIconButton: React.FC<IconButtonProps> = ({
  ref,
  onPress,
  accessibilityLabel = '',
  isLoading = false,
  color = 'uranus',
  isDisabled = false,
  size = 'medium',
  testID,
  ...props
}) => {
  const mainColor = isDisabled ? colors.moon300 : getButtonMainColor(color, { outline: true });
  const iconSize = getIconSize(size);
  const Icon = getIcon(props.icon);
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
    fill: false,
    ref,
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
