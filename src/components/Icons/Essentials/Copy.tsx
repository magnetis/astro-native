import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Copy({
  id = 'CopyIcon',
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
        d="M2.88867 4C2.88867 2.89543 3.7841 2 4.88867 2H14.8887C15.9932 2 16.8887 2.89543 16.8887 4V8H20.8887C21.9932 8 22.8887 8.89543 22.8887 10V20C22.8887 21.1046 21.9932 22 20.8887 22H10.8887C9.7841 22 8.88867 21.1046 8.88867 20V16H4.88867C3.7841 16 2.88867 15.1046 2.88867 14V4ZM10.8887 16V20H20.8887V10H16.8887V14C16.8887 15.1046 15.9932 16 14.8887 16H10.8887ZM14.8887 14V4L4.88867 4V14H14.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Copy;
