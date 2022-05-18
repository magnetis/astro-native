import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartBar({
  id = 'ChartBarIcon',
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
        d="M3.88867 5C3.88867 3.89543 4.7841 3 5.88867 3H19.8887C20.9932 3 21.8887 3.89543 21.8887 5V19C21.8887 20.1046 20.9932 21 19.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V5ZM19.8887 5H5.88867V19H19.8887V5ZM12.8887 7C13.441 7 13.8887 7.44772 13.8887 8V16C13.8887 16.5523 13.441 17 12.8887 17C12.3364 17 11.8887 16.5523 11.8887 16V8C11.8887 7.44772 12.3364 7 12.8887 7ZM16.8887 9C17.441 9 17.8887 9.44772 17.8887 10V16C17.8887 16.5523 17.441 17 16.8887 17C16.3364 17 15.8887 16.5523 15.8887 16V10C15.8887 9.44772 16.3364 9 16.8887 9ZM8.88867 11C9.44096 11 9.88867 11.4477 9.88867 12V16C9.88867 16.5523 9.44096 17 8.88867 17C8.33639 17 7.88867 16.5523 7.88867 16V12C7.88867 11.4477 8.33639 11 8.88867 11Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartBar;
