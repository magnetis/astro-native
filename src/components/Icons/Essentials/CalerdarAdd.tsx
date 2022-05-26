import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function CalendarAdd({
  id = 'CalendarAddIcon',
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
        d="M8.88867 5H6.88867C5.7841 5 4.88867 5.89543 4.88867 7V10M8.88867 5H16.8887M8.88867 5V3M8.88867 5V7M16.8887 5H18.8887C19.9932 5 20.8887 5.89543 20.8887 7V10M16.8887 5V3M16.8887 5V7M20.8887 10H4.88867M20.8887 10V10.75M4.88867 10V19C4.88867 20.1046 5.7841 21 6.88867 21H12.8887M18.4242 14V17.5355M18.4242 17.5355V21.0711M18.4242 17.5355H21.9597M18.4242 17.5355H14.8887"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export default CalendarAdd;
