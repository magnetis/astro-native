import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Mobile({
  id = 'MobileIcon',
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
        d="M6.88867 5C6.88867 3.89543 7.7841 3 8.88867 3H16.8887C17.9932 3 18.8887 3.89543 18.8887 5V19C18.8887 20.1046 17.9932 21 16.8887 21H8.88867C7.7841 21 6.88867 20.1046 6.88867 19V5ZM16.8887 5H8.88867V19H16.8887V5Z"
        fill={fill}
      />
      <Path
        d="M13.8887 17C13.8887 17.5523 13.441 18 12.8887 18C12.3364 18 11.8887 17.5523 11.8887 17C11.8887 16.4477 12.3364 16 12.8887 16C13.441 16 13.8887 16.4477 13.8887 17Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Mobile;
