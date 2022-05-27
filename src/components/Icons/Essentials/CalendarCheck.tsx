import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function CalendarCheck({
  id = 'CalendarCheckIcon',
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
        d="M19.8887 11.75C19.8887 12.3023 20.3364 12.75 20.8887 12.75C21.441 12.75 21.8887 12.3023 21.8887 11.75H19.8887ZM11.8887 22C12.441 22 12.8887 21.5523 12.8887 21C12.8887 20.4477 12.441 20 11.8887 20V22ZM9.88867 3C9.88867 2.44772 9.44096 2 8.88867 2C8.33639 2 7.88867 2.44772 7.88867 3H9.88867ZM7.88867 7C7.88867 7.55228 8.33639 8 8.88867 8C9.44096 8 9.88867 7.55228 9.88867 7H7.88867ZM17.8887 3C17.8887 2.44772 17.441 2 16.8887 2C16.3364 2 15.8887 2.44772 15.8887 3H17.8887ZM15.8887 7C15.8887 7.55228 16.3364 8 16.8887 8C17.441 8 17.8887 7.55228 17.8887 7H15.8887ZM15.5958 18.2929C15.2053 17.9024 14.5721 17.9024 14.1816 18.2929C13.791 18.6834 13.791 19.3166 14.1816 19.7071L15.5958 18.2929ZM16.8887 21L16.1816 21.7071C16.5721 22.0976 17.2053 22.0976 17.5958 21.7071L16.8887 21ZM22.5958 16.7071C22.9863 16.3166 22.9863 15.6834 22.5958 15.2929C22.2053 14.9024 21.5721 14.9024 21.1816 15.2929L22.5958 16.7071ZM6.88867 6H8.88867V4H6.88867V6ZM8.88867 6H16.8887V4H8.88867V6ZM16.8887 6H18.8887V4H16.8887V6ZM19.8887 7V10H21.8887V7H19.8887ZM5.88867 19V10H3.88867V19H5.88867ZM5.88867 10V7H3.88867V10H5.88867ZM20.8887 9H4.88867V11H20.8887V9ZM19.8887 10V11.75H21.8887V10H19.8887ZM11.8887 20H6.88867V22H11.8887V20ZM7.88867 3V5H9.88867V3H7.88867ZM7.88867 5V7H9.88867V5H7.88867ZM15.8887 3V5H17.8887V3H15.8887ZM15.8887 5V7H17.8887V5H15.8887ZM3.88867 19C3.88867 20.6569 5.23182 22 6.88867 22V20C6.33639 20 5.88867 19.5523 5.88867 19H3.88867ZM18.8887 6C19.441 6 19.8887 6.44772 19.8887 7H21.8887C21.8887 5.34315 20.5455 4 18.8887 4V6ZM6.88867 4C5.23182 4 3.88867 5.34315 3.88867 7H5.88867C5.88867 6.44772 6.33639 6 6.88867 6V4ZM14.1816 19.7071L16.1816 21.7071L17.5958 20.2929L15.5958 18.2929L14.1816 19.7071ZM17.5958 21.7071L22.5958 16.7071L21.1816 15.2929L16.1816 20.2929L17.5958 21.7071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CalendarCheck;