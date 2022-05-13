import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Inbox({
  id = 'InboxIcon',
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
        d="M3.88867 5C3.88867 3.89543 4.7841 3 5.88867 3H19.8887C20.9932 3 21.8887 3.89543 21.8887 5V19C21.8887 20.1046 20.9932 21 19.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V5ZM5.88867 14V19H19.8887V14H17.6094L16.8374 16.3162C16.7012 16.7246 16.3191 17 15.8887 17H9.88867C9.45824 17 9.0761 16.7246 8.93999 16.3162L8.16791 14H5.88867ZM19.8887 12V5H5.88867V12H8.16791C9.02877 12 9.79305 12.5509 10.0653 13.3675L10.6094 15H15.1679L15.7121 13.3675C15.9843 12.5509 16.7486 12 17.6094 12H19.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Inbox;
