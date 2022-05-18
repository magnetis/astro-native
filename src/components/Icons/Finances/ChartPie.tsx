import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartPie({
  id = 'ChartPieIcon',
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
        d="M21.8887 12C21.8887 16.9706 17.8592 21 12.8887 21C7.91811 21 3.88867 16.9706 3.88867 12C3.88867 7.02944 7.91811 3 12.8887 3M21.8887 12C21.8887 7.02944 17.8592 3 12.8887 3M21.8887 12H12.8887M12.8887 3V11.9379C12.8887 11.9777 12.9045 12.0158 12.9326 12.0439L18.8887 18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export default ChartPie;
