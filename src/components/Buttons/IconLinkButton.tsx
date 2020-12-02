import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { ButtonSize } from './types';
import { getIcon } from './utils';
import { getFontSize } from '@tokens/utils';
import { IconID } from '@components/Icons/types';
import { getSecondaryTextFromSize } from '@components/Text/utils';

interface IconLinkButtonProps extends PressableProps {
  /** Text to be shown inside the button */
  text: string;
  /** renders text as bold when true */
  bold?: boolean;
  /** IconLinkButton press callback */
  onPress: () => void;
  /** Name of valid Astro's icon in PascalCase */
  icon: IconID;
  /** Whether icon will be positioned on left or right of text */
  iconPosition?: 'left' | 'right';
  /** Specifies button size */
  size?: ButtonSize;
  /** Supress any user interaction with component */
  disabled?: boolean;
}

/**
 * Icon link buttons can be used for menu items and simple interactions or commands.
 */
function IconLinkButton({
  text,
  onPress,
  size = 'medium',
  disabled = false,
  iconPosition = 'left',
  bold = false,
  ...props
}: IconLinkButtonProps) {
  const iconSize = getFontSize(size) * 1.5;
  const Icon = getIcon(props.icon);

  const iconWrapperStyle = {
    marginLeft: iconPosition === 'left' ? 0 : 9,
    marginRight: iconPosition === 'right' ? 0 : 9,
  };

  const TextComponent = getSecondaryTextFromSize(size);

  return (
    <Pressable hitSlop={10} disabled={disabled} onPress={onPress} {...props}>
      {({ pressed }) => {
        const color = disabled ? colors.moon300 : pressed ? colors.uranus700 : colors.space100;

        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
            }}
          >
            <View testID="IconLinkButton.Icon" style={iconWrapperStyle}>
              <Icon width={iconSize} height={iconSize} color={color} />
            </View>
            <TextComponent color={color} bold={bold}>
              {text}
            </TextComponent>
          </View>
        );
      }}
    </Pressable>
  );
}

export default IconLinkButton;
export type { IconLinkButtonProps };
