import React from 'react';
import { View } from 'react-native';

import { getButtonProperties, getIconProperties } from './utils';
import { getIcon } from '@components/Buttons/utils';

import BaseButton from './BaseButton';

import type { IconButtonProps } from './types';
import { radius } from '@magnetis/astro-tokens';
/**
 * Primary buttons have a colored background.
 *
 *  Use these for the main action in a section or screen. You should display only one primary button at a time.
 *
 */
function IconButton({
  disabled,
  icon,
  rounded,
  size = 'medium',
  variant = 'primary',
  type = 'solid',
  ...props
}: IconButtonProps) {
  const { backgroundColor, textColor } = getButtonProperties(disabled ? 'disabled' : variant, type);

  const { iconSize } = getIconProperties(size);

  const baseProps = {
    activityIndicatorColor: textColor,
    backgroundColor,
    borderColor: type === 'outline' ? textColor : backgroundColor,
    borderRadius: rounded ? radius.circular : radius.small,
    disabled,
    isIconButton: true,
    textColor,
    size,
  };

  const Icon = getIcon(icon!);

  return (
    <BaseButton {...props} {...baseProps} testID="IconButton">
      <View style={{ alignItems: 'center' }}>
        <View testID="IconButton.IconContainer">
          <Icon size={iconSize} color={textColor} />
        </View>
      </View>
    </BaseButton>
  );
}

export default IconButton;
