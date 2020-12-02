import React from 'react';
import { View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getButtonMainColor, getIconSize } from './utils';
import type { IconLabelButtonProps } from './types';
import BaseButtonText from './BaseButtonText';
import BaseButton from './BaseButton';
import { getIcon } from './utils';

const OutlineIconLabelButton: React.FC<IconLabelButtonProps> = ({
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
    fill,
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
        <View testID="OutlineIconLabelButton.Icon" style={iconWrapperStyle}>
          <Icon {...iconSize} color={mainColor} />
        </View>
        <BaseButtonText size={size} color={mainColor}>
          {text}
        </BaseButtonText>
      </View>
    </BaseButton>
  );
};

export default OutlineIconLabelButton;
