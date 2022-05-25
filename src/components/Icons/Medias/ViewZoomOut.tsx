import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ViewZoomOut({
  id = 'ViewZoomOutIcon',
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
        d="M16.8887 4C16.8887 3.44772 16.441 3 15.8887 3C15.3364 3 14.8887 3.44772 14.8887 4V9C14.8887 9.55228 15.3364 10 15.8887 10H20.8887C21.441 10 21.8887 9.55228 21.8887 9C21.8887 8.44772 21.441 8 20.8887 8H16.8887V4Z"
        fill={fill}
      />
      <Path
        d="M20.8887 16C21.441 16 21.8887 15.5523 21.8887 15C21.8887 14.4477 21.441 14 20.8887 14H15.8887C15.3364 14 14.8887 14.4477 14.8887 15V20C14.8887 20.5523 15.3364 21 15.8887 21C16.441 21 16.8887 20.5523 16.8887 20V16H20.8887Z"
        fill={fill}
      />
      <Path
        d="M9.88867 21C9.33639 21 8.88867 20.5523 8.88867 20L8.88867 16H4.88867C4.33639 16 3.88867 15.5523 3.88867 15C3.88867 14.4477 4.33639 14 4.88867 14H9.88867C10.441 14 10.8887 14.4477 10.8887 15L10.8887 20C10.8887 20.5523 10.441 21 9.88867 21Z"
        fill={fill}
      />
      <Path
        d="M4.88867 8C4.33639 8 3.88867 8.44772 3.88867 9C3.88867 9.55228 4.33639 10 4.88867 10L9.88867 10C10.441 10 10.8887 9.55229 10.8887 9L10.8887 4C10.8887 3.44772 10.441 3 9.88867 3C9.33639 3 8.88867 3.44772 8.88867 4L8.88867 8L4.88867 8Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ViewZoomOut;
