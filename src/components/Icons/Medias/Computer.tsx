import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Computer({
  id = 'ComputerIcon',
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
        d="M2.88867 5C2.88867 3.89543 3.7841 3 4.88867 3H20.8887C21.9932 3 22.8887 3.89543 22.8887 5V16C22.8887 17.1046 21.9932 18 20.8887 18H13.8887V20H16.8887C17.441 20 17.8887 20.4477 17.8887 21C17.8887 21.5523 17.441 22 16.8887 22H8.88867C8.33639 22 7.88867 21.5523 7.88867 21C7.88867 20.4477 8.33639 20 8.88867 20H11.8887V18H4.88867C3.7841 18 2.88867 17.1046 2.88867 16V5ZM20.8887 16V5H4.88867V16H20.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Computer;
