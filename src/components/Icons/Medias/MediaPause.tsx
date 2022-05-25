import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaPause({
  id = 'MediaPauseIcon',
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
        d="M9.88867 6C10.441 6 10.8887 6.44772 10.8887 7V17C10.8887 17.5523 10.441 18 9.88867 18C9.33639 18 8.88867 17.5523 8.88867 17V7C8.88867 6.44772 9.33639 6 9.88867 6ZM15.8887 6C16.441 6 16.8887 6.44772 16.8887 7V17C16.8887 17.5523 16.441 18 15.8887 18C15.3364 18 14.8887 17.5523 14.8887 17V7C14.8887 6.44772 15.3364 6 15.8887 6Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MediaPause;
