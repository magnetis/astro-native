import React from 'react';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getButtonSecondaryColor, getIconSize } from './utils';
import type { IconLabelButtonProps } from './types';
import BaseButton from './BaseButton';
import BaseText from './BaseText';
import { View } from 'react-native';
import { getIcon } from '@components/Icons/utils';

const IconLabelButton: React.FC<IconLabelButtonProps> = ({
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
  iconPosition = 'left',
  ...props
}) => {
  const backgroundColor = isDisabled ? colors.moon300 : getButtonMainColor(color);
  const textColor = isDisabled ? colors.space100 : getButtonSecondaryColor(color);
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
    fill,
    ref,
  };

  const iconWrapperStyle = {
    marginLeft: iconPosition === 'left' ? 0 : 9,
    marginRight: iconPosition === 'right' ? 0 : 9,
  };

  return (
    <BaseButton {...props} {...baseProps}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
        }}
      >
        <View testID="IconLabelButton.Icon" style={iconWrapperStyle}>
          <Icon {...iconSize} color={textColor} />
        </View>
        <BaseText size={size} color={textColor}>
          {text}
        </BaseText>
      </View>
    </BaseButton>
  );
};

export default IconLabelButton;
