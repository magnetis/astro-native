import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartDoughnut({
  id = 'ChartDoughnutIcon',
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
        d="M3.88867 12C3.88867 16.9706 7.91811 21 12.8887 21C17.8592 21 21.8887 16.9706 21.8887 12C21.8887 7.02944 17.8592 3 12.8887 3M3.88867 12C3.88867 7.02944 7.91811 3 12.8887 3M3.88867 12H8.38867M12.8887 3V7.5M15.8887 9L18.8887 6M15.8887 15L18.8887 18M16.8887 12C16.8887 14.2091 15.0978 16 12.8887 16C10.6795 16 8.88867 14.2091 8.88867 12C8.88867 9.79086 10.6795 8 12.8887 8C15.0978 8 16.8887 9.79086 16.8887 12Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export default ChartDoughnut;
