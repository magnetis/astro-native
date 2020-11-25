import React, { ReactElement } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { isValidTextComponent } from './utils';

interface LinkProps extends PressableProps {
  children: ReactElement;
  onPress: () => void;
}

function Link({ children, onPress, ...props }: LinkProps) {
  return (
    <Pressable hitSlop={10} onPress={onPress} {...props}>
      {isValidTextComponent(children)
        ? React.cloneElement(children, { color: colors.uranus700, style: { textDecorationLine: 'underline' } })
        : null}
    </Pressable>
  );
}

export default Link;
export type { LinkProps };
