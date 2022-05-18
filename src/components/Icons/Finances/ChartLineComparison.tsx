import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartLineComparison({
  id = 'ChartLineComparisonIcon',
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
        d="M3.88867 14.5313L9.61014 8.80986C10.0007 8.41933 10.6338 8.41933 11.0243 8.80986L13.4673 11.2528C13.8578 11.6433 14.491 11.6433 14.8815 11.2528L21.8887 4.24561M4.88867 19.847L10.244 18.2364C10.3983 18.19 10.5615 18.1815 10.7198 18.2118L16.1599 19.2516C16.3737 19.2925 16.595 19.2624 16.7902 19.1661L20.8887 17.143"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default ChartLineComparison;
