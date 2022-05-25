import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Tablet({
  id = 'TabletIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H18.8887C19.9932 2 20.8887 2.89543 20.8887 4V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V4ZM18.8887 4L6.88867 4V20H18.8887V4Z"
        fill={fill}
      />
      <Path
        d="M13.8887 18C13.8887 18.5523 13.441 19 12.8887 19C12.3364 19 11.8887 18.5523 11.8887 18C11.8887 17.4477 12.3364 17 12.8887 17C13.441 17 13.8887 17.4477 13.8887 18Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Tablet;
