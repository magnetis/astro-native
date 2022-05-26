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
        d="M2.88867 5C2.88867 3.89543 3.7841 3 4.88867 3H20.8887C21.9932 3 22.8887 3.89543 22.8887 5V7C22.8887 7.74708 22.4791 8.39848 21.8722 8.74188C21.8831 8.82638 21.8887 8.91253 21.8887 9V19C21.8887 20.1046 20.9932 21 19.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V9C3.88867 8.91253 3.89429 8.82638 3.90518 8.74188C3.29828 8.39848 2.88867 7.74707 2.88867 7V5ZM20.8887 7V5H4.88867V7H20.8887ZM5.88867 9V19H19.8887V9H5.88867ZM8.88867 12C8.88867 11.4477 9.33639 11 9.88867 11H15.8887C16.441 11 16.8887 11.4477 16.8887 12C16.8887 12.5523 16.441 13 15.8887 13H9.88867C9.33639 13 8.88867 12.5523 8.88867 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CalendarData;
