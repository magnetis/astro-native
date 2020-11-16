import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Phone({
  id = 'PhoneIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 2H9C7.89543 2 7 2.89543 7 4V29C7 30.1046 7.89543 31 9 31H24C25.1046 31 26 30.1046 26 29V4C26 2.89543 25.1046 2 24 2ZM9 29V4H24V29H9ZM22 6H11V23H22V6ZM13 21V8H20V21H13ZM18 25.5C18 26.3284 17.3284 27 16.5 27C15.6716 27 15 26.3284 15 25.5C15 24.6716 15.6716 24 16.5 24C17.3284 24 18 24.6716 18 25.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Phone;
