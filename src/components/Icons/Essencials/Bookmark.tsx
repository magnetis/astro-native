import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Bookmark({
  id = 'BookmarkIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H18.8887C19.9932 2 20.8887 2.89543 20.8887 4V21C20.8887 21.3746 20.6793 21.7178 20.3463 21.8892C20.0132 22.0606 19.6122 22.0315 19.3074 21.8137L12.8887 17.2289L6.46991 21.8137C6.1651 22.0315 5.76416 22.0606 5.43109 21.8892C5.09802 21.7178 4.88867 21.3746 4.88867 21V4ZM18.8887 4L6.88867 4V19.0568L12.3074 15.1863C12.6551 14.9379 13.1222 14.9379 13.4699 15.1863L18.8887 19.0568V4Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Bookmark;
