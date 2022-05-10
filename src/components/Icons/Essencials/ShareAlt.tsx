import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ShareAlt({
  id = 'ShareAltIcon',
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
        d="M12.1816 2.29289C12.5721 1.90237 13.2053 1.90237 13.5958 2.29289L16.5958 5.29289C16.9863 5.68342 16.9863 6.31658 16.5958 6.70711C16.2053 7.09763 15.5721 7.09763 15.1816 6.70711L13.8887 5.41421V15C13.8887 15.5523 13.441 16 12.8887 16C12.3364 16 11.8887 15.5523 11.8887 15V5.41421L10.5958 6.70711C10.2053 7.09763 9.57209 7.09763 9.18157 6.70711C8.79104 6.31658 8.79104 5.68342 9.18157 5.29289L12.1816 2.29289ZM4.88867 11C4.88867 9.89543 5.7841 9 6.88867 9H8.88867C9.44096 9 9.88867 9.44772 9.88867 10C9.88867 10.5523 9.44096 11 8.88867 11H6.88867V20H18.8887V11H16.8887C16.3364 11 15.8887 10.5523 15.8887 10C15.8887 9.44772 16.3364 9 16.8887 9H18.8887C19.9932 9 20.8887 9.89543 20.8887 11V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V11Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ShareAlt;
