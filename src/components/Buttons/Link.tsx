import React, { ReactElement } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { isValidTextComponent } from './utils';

interface LinkProps extends PressableProps {
  children: ReactElement;
  /** Link press callback */
  onPress: () => void;
}

/**
 * For inline links in paragraphs and informative texts. Regular links navigate to other pages or external content.
 */
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
