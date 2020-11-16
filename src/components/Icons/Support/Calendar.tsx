import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Calendar({
  id = 'CalendarIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C12 3.44772 11.5523 3 11 3C10.4477 3 10 3.44772 10 4V5V6V7V9C10 9.55228 10.4477 10 11 10C11.5523 10 12 9.55228 12 9V7V6V5V4ZM25 5H23V6V7H25C25.5523 7 26 7.44772 26 8V12.1111H6V8C6 7.44772 6.44772 7 7 7H9V6V5H7C5.34315 5 4 6.34315 4 8V26C4 27.6569 5.34315 29 7 29H25C26.6569 29 28 27.6569 28 26V8C28 6.34315 26.6569 5 25 5ZM6 14.1111V26C6 26.5523 6.44772 27 7 27H25C25.5523 27 26 26.5523 26 26V14.1111H6ZM19 6V7H13V6V5H19V6ZM11 20C11.5523 20 12 19.5523 12 19C12 18.4477 11.5523 18 11 18C10.4477 18 10 18.4477 10 19C10 19.5523 10.4477 20 11 20ZM20 7V6V5V4C20 3.44772 20.4477 3 21 3C21.5523 3 22 3.44772 22 4V5V6V7V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V7ZM12 23C12 23.5523 11.5523 24 11 24C10.4477 24 10 23.5523 10 23C10 22.4477 10.4477 22 11 22C11.5523 22 12 22.4477 12 23ZM16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20ZM17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23ZM21 20C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20ZM22 23C22 23.5523 21.5523 24 21 24C20.4477 24 20 23.5523 20 23C20 22.4477 20.4477 22 21 22C21.5523 22 22 22.4477 22 23Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Calendar;
