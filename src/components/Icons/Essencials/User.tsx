import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function User({
  id = 'UserIcon',
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
        d="M12.8887 4C10.6795 4 8.88867 5.79086 8.88867 8C8.88867 10.2091 10.6795 12 12.8887 12C15.0978 12 16.8887 10.2091 16.8887 8C16.8887 5.79086 15.0978 4 12.8887 4ZM6.88867 8C6.88867 4.68629 9.57496 2 12.8887 2C16.2024 2 18.8887 4.68629 18.8887 8C18.8887 11.3137 16.2024 14 12.8887 14C9.57496 14 6.88867 11.3137 6.88867 8ZM8.88867 18C7.23182 18 5.88867 19.3431 5.88867 21C5.88867 21.5523 5.44096 22 4.88867 22C4.33639 22 3.88867 21.5523 3.88867 21C3.88867 18.2386 6.12725 16 8.88867 16H16.8887C19.6501 16 21.8887 18.2386 21.8887 21C21.8887 21.5523 21.441 22 20.8887 22C20.3364 22 19.8887 21.5523 19.8887 21C19.8887 19.3431 18.5455 18 16.8887 18H8.88867Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default User;
