import React, { ReactElement } from 'react';
import type { PrimaryTextProps, SecondaryTextProps } from '@components/Text';
import { Pressable, PressableProps } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

interface LinkProps extends PressableProps {
  children:
    | ReactElement<PrimaryTextProps>
    | ReactElement<SecondaryTextProps>
    | Array<ReactElement<PrimaryTextProps>>
    | Array<ReactElement<SecondaryTextProps>>;
  onPress: () => void;
}

function Link({ children, onPress, ...props }: LinkProps) {
  return (
    <Pressable hitSlop={10} onPress={onPress} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { color: colors.uranus700, style: { textDecorationLine: 'underline' } });
        }
        return null;
      })}
    </Pressable>
  );
}

export default Link;
export type { LinkProps };
