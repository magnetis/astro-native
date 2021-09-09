import React from 'react';
import { View } from 'react-native';

import { getIcon } from '@components/Buttons/utils';

import BaseButton from './BaseButton';
import BaseButtonText from './BaseButtonText';
import { getButtonProperties, getIconProperties } from './utils';

import type { ButtonProps } from './types';
/**
 * Primary buttons have a colored background.
 *
 *  Use these for the main action in a section or screen. You should display only one primary button at a time.
 *
 */
function Button({
  disabled,
  iconLeft,
  iconRight,
  size = 'medium',
  text,
  variant = 'primary',
  type = 'solid',
  ...props
}: ButtonProps) {
  const { backgroundColor, textColor } = getButtonProperties(disabled ? 'disabled' : variant, type);

  const { iconMargin, iconSize } = getIconProperties(size);

  const baseProps = {
    activityIndicatorColor: textColor,
    backgroundColor,
    borderColor: type === 'outline' ? textColor : backgroundColor,
    disabled,
    textColor,
    size,
  };

  const IconLeft = getIcon(iconLeft!);
  const IconRight = getIcon(iconRight!);

  return (
    <BaseButton {...props} {...baseProps}>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        {iconLeft && (
          <View testID="Button.IconLeft" style={{ marginRight: iconMargin }}>
            <IconLeft size={iconSize} color={textColor} />
          </View>
        )}
        <BaseButtonText size={size} color={textColor}>
          {text}
        </BaseButtonText>
        {iconRight && (
          <View testID="Button.IconRight" style={{ marginLeft: iconMargin }}>
            <IconRight size={iconSize} color={textColor} />
          </View>
        )}
      </View>
    </BaseButton>
  );
}

export default Button;
