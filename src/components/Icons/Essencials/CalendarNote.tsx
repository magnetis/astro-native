import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function CalendarNote({
  id = 'CalendarNoteIcon',
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
        d="M20.8887 10V7C20.8887 5.89543 19.9932 5 18.8887 5H6.88867C5.7841 5 4.88867 5.89543 4.88867 7V10M20.8887 10V19C20.8887 20.1046 19.9932 21 18.8887 21H6.88867C5.7841 21 4.88867 20.1046 4.88867 19V10M20.8887 10H4.88867M8.88867 3V7M16.8887 3V7M8.88867 14H16.8887M8.88867 17H11.8887"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </BaseIcon>
  );
}

export default CalendarNote;
