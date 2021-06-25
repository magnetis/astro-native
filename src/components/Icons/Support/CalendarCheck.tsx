import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CalendarCheck({
  id = 'CalendarCheckIcon',
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
        d="M12 4C12 3.44772 11.5523 3 11 3C10.4477 3 10 3.44772 10 4V5V6V7V9C10 9.55228 10.4477 10 11 10C11.5523 10 12 9.55228 12 9V7V6V5V4ZM23 5H25C26.6569 5 28 6.34315 28 8V26C28 27.6569 26.6569 29 25 29H7C5.34315 29 4 27.6569 4 26V8C4 6.34315 5.34315 5 7 5H9V6V7H7C6.44772 7 6 7.44772 6 8V12.1111H26V8C26 7.44772 25.5523 7 25 7H23V6V5ZM26 14.1111H6V26C6 26.5523 6.44772 27 7 27H25C25.5523 27 26 26.5523 26 26V14.1111ZM19 7V6V5H13V6V7H19ZM19.4628 18.2633C19.7088 17.989 20.1306 17.9661 20.4049 18.212C20.6792 18.458 20.7022 18.8798 20.4562 19.1541L15.9878 24.1367C15.7323 24.4216 15.29 24.4336 15.0194 24.163L12.3794 21.5231C12.1189 21.2625 12.1189 20.8401 12.3794 20.5796C12.64 20.319 13.0624 20.319 13.3229 20.5796L15.4648 22.7215L19.4628 18.2633ZM22 7V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V7V6V5V4C20 3.44772 20.4477 3 21 3C21.5523 3 22 3.44772 22 4V5V6V7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CalendarCheck;
