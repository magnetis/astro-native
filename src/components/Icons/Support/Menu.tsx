import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Menu({
  id = 'MenuIcon',
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
        d="M8 8C7.44771 8 7 8.44772 7 9C7 9.55228 7.44771 10 8 10H17.5C18.0523 10 18.5 9.55228 18.5 9C18.5 8.44772 18.0523 8 17.5 8H8ZM8.5 15C7.94772 15 7.5 15.4477 7.5 16C7.5 16.5523 7.94772 17 8.5 17H24.5C25.0523 17 25.5 16.5523 25.5 16C25.5 15.4477 25.0523 15 24.5 15H8.5ZM15.5 23C15.5 22.4477 15.9477 22 16.5 22H25C25.5523 22 26 22.4477 26 23C26 23.5523 25.5523 24 25 24H16.5C15.9477 24 15.5 23.5523 15.5 23Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Menu;
