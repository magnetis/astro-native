import React, { ReactElement } from 'react';
import { TextProps } from 'react-native';

import type { ButtonColor } from './types';
import { getButtonMainColor, isValidTextComponent } from './utils';

interface LinkProps extends TextProps {
  children: ReactElement;
  /** Color to be used as background color of button. Defaults to `"uranus"`. */
  color?: ButtonColor;
  /** Link press callback */
  onPress: () => void;
}

/**
 * For inline links in paragraphs and informative texts. Regular links navigate to other pages or external content.
 */
function Link({ children, onPress, color = 'uranus', ...props }: LinkProps) {
  return isValidTextComponent(children)
    ? React.cloneElement(children, {
        ...props,
        color: getButtonMainColor(color),
        onPress,
        style: { textDecorationLine: 'underline' },
      })
    : null;
}

export default Link;
export type { LinkProps };
