import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { getFontSize } from './utils';
import { ButtonSize } from './types';
import { getIcon } from './utils';
import { IconID } from '@components/Icons/types';
import { getSecondaryTextFromSize } from '@components/Text/utils';

interface IconLinkButtonProps extends PressableProps {
  text: string;
  bold?: boolean;
  onPress: () => void;
  icon: IconID;
  iconPosition?: 'left' | 'right';
  size?: ButtonSize;
  isDisabled?: boolean;
}

function IconLinkButton({
  text,
  onPress,
  size = 'medium',
  isDisabled = false,
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
    <Pressable hitSlop={10} disabled={isDisabled} onPress={onPress} {...props}>
      {({ pressed }) => {
        const color = isDisabled ? colors.moon300 : pressed ? colors.uranus700 : colors.space100;

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
