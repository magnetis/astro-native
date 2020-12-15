import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getButtonSecondaryColor, getIconSize } from './utils';
import type { IconLabelButtonProps } from './types';
import BaseButtonText from './BaseButtonText';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

/**
 * Buttons with icons help identify the action or context within the interface.
 * This component consists of a **PrimaryButton** with an icon and some text.
 */
const IconLabelButton: React.FC<IconLabelButtonProps> = ({
  text,
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  fill = false,
  testID,
  iconPosition = 'left',
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
    fill,
    hasIcon: true,
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
        <BaseButtonText size={size} color={textColor}>
          {text}
        </BaseButtonText>
      </View>
    </BaseButton>
  );
};

export default IconLabelButton;
