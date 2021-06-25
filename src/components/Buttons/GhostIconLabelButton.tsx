import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconLabelButtonProps } from './types';
import BaseButtonText from './BaseButtonText';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

/**
 * Ghost iconlabel buttons are also used in microinteractions and smaller commands. Usage works the same as regular **IconLabelButton**.
 */
const GhostIconLabelButton: React.FC<IconLabelButtonProps> = ({
  text,
  onPress,
  accessibilityLabel = '',
  loading = false,
  color = 'uranus',
  disabled = false,
  size = 'medium',
  testID,
  iconPosition = 'left',
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
    hasIcon: true,
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
        <BaseButtonText size={size} color={textColor}>
          {text}
        </BaseButtonText>
      </View>
    </BaseButton>
  );
};

export default GhostIconLabelButton;
