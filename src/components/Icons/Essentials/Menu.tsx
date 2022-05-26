import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Menu({
  id = 'MenuIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M4.88867 7C4.88867 6.44772 5.33639 6 5.88867 6H19.8887C20.441 6 20.8887 6.44772 20.8887 7C20.8887 7.55228 20.441 8 19.8887 8H5.88867C5.33639 8 4.88867 7.55228 4.88867 7ZM4.88867 12C4.88867 11.4477 5.33639 11 5.88867 11H19.8887C20.441 11 20.8887 11.4477 20.8887 12C20.8887 12.5523 20.441 13 19.8887 13H5.88867C5.33639 13 4.88867 12.5523 4.88867 12ZM4.88867 17C4.88867 16.4477 5.33639 16 5.88867 16H19.8887C20.441 16 20.8887 16.4477 20.8887 17C20.8887 17.5523 20.441 18 19.8887 18H5.88867C5.33639 18 4.88867 17.5523 4.88867 17Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Menu;
