import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconLabelButtonProps } from './types';
import BaseButton from './BaseButton';
import { getIcon } from '@components/Icons/utils';
import BaseText from './BaseText';

const GhostIconButton: React.FC<IconLabelButtonProps> = ({
  ref,
  text,
  onPress,
  accessibilityLabel = '',
  isLoading = false,
  color = 'uranus',
  isDisabled = false,
  size = 'medium',
  testID,
  iconPosition = 'left',
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
    isLoading,
    onPress,
    testID,
    size,
    fill: false,
    ref,
  };

  const iconWrapperStyle = {
    marginLeft: iconPosition === 'left' ? 0 : 9,
    marginRight: iconPosition === 'right' ? 0 : 9,
  };

  return (
    <BaseButton {...props} {...baseProps} noHorizontalPadding>
      <View
        style={{
          alignItems: 'center',
          flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        }}
      >
        <View testID="GhostIconLabelButton.Icon" style={iconWrapperStyle}>
          <Icon {...iconSize} color={textColor} />
        </View>
        <BaseText size={size} color={textColor}>
          {text}
        </BaseText>
      </View>
    </BaseButton>
  );
};

export default GhostIconButton;
