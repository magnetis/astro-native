import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function CalendarData({
  id = 'CalendarDataIcon',
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
        d="M7.95215 12C7.39986 12 6.95215 12.4477 6.95215 13V15C6.95215 15.5523 7.39986 16 7.95215 16H9.95215C10.5044 16 10.9521 15.5523 10.9521 15V13C10.9521 12.4477 10.5044 12 9.95215 12H7.95215Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.88867 3C9.88867 2.44772 9.44096 2 8.88867 2C8.33639 2 7.88867 2.44772 7.88867 3V4H6.88867C5.23182 4 3.88867 5.34315 3.88867 7V19C3.88867 20.6569 5.23182 22 6.88867 22H18.8887C20.5455 22 21.8887 20.6569 21.8887 19V7C21.8887 5.34315 20.5455 4 18.8887 4H17.8887V3.00025C17.8887 2.44797 17.441 2 16.8887 2C16.3364 2 15.8887 2.44772 15.8887 3V4H9.88867V3ZM6.88867 6H7.88867V7C7.88867 7.55228 8.33639 8 8.88867 8C9.44096 8 9.88867 7.55228 9.88867 7V6H15.8887V7C15.8887 7.55228 16.3364 8 16.8887 8C17.441 8 17.8887 7.55228 17.8887 7V6H18.8887C19.441 6 19.8887 6.44772 19.8887 7V9H5.88867V7C5.88867 6.44772 6.33639 6 6.88867 6ZM5.88867 11H19.8887V19C19.8887 19.5523 19.441 20 18.8887 20H6.88867C6.33639 20 5.88867 19.5523 5.88867 19V11Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CalendarData;
