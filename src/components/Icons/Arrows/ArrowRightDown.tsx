import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRightDown({
  id = 'ArrowRightDownIcon',
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
        d="M7.18157 6.29289C7.57209 5.90237 8.20525 5.90237 8.59578 6.29289L16.8887 14.5858L16.8887 9C16.8887 8.44772 17.3364 8 17.8887 8C18.441 8 18.8887 8.44772 18.8887 9L18.8887 17C18.8887 17.5523 18.441 18 17.8887 18H9.88867C9.33639 18 8.88867 17.5523 8.88867 17C8.88867 16.4477 9.33639 16 9.88867 16H15.4745L7.18157 7.70711C6.79104 7.31658 6.79104 6.68342 7.18157 6.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRightDown;
