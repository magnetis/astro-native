import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartBarWaterfall({
  id = 'ChartBarWaterfallIcon',
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
        d="M20.8887 4C21.441 4 21.8887 4.44772 21.8887 5V15C21.8887 15.5523 21.441 16 20.8887 16C20.3364 16 19.8887 15.5523 19.8887 15V5C19.8887 4.44772 20.3364 4 20.8887 4ZM12.8887 8C13.441 8 13.8887 8.44772 13.8887 9V12C13.8887 12.5523 13.441 13 12.8887 13C12.3364 13 11.8887 12.5523 11.8887 12V9C11.8887 8.44772 12.3364 8 12.8887 8ZM8.88867 9C9.44096 9 9.88867 9.44772 9.88867 10V16C9.88867 16.5523 9.44096 17 8.88867 17C8.33639 17 7.88867 16.5523 7.88867 16V10C7.88867 9.44772 8.33639 9 8.88867 9ZM16.8887 10C17.441 10 17.8887 10.4477 17.8887 11V13C17.8887 13.5523 17.441 14 16.8887 14C16.3364 14 15.8887 13.5523 15.8887 13V11C15.8887 10.4477 16.3364 10 16.8887 10ZM4.88867 13C5.44096 13 5.88867 13.4477 5.88867 14V16C5.88867 16.5523 5.44096 17 4.88867 17C4.33639 17 3.88867 16.5523 3.88867 16V14C3.88867 13.4477 4.33639 13 4.88867 13ZM2.88867 21C2.88867 20.4477 3.33639 20 3.88867 20H21.8887C22.441 20 22.8887 20.4477 22.8887 21C22.8887 21.5523 22.441 22 21.8887 22H3.88867C3.33639 22 2.88867 21.5523 2.88867 21Z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  );
}

export default ChartBarWaterfall;
