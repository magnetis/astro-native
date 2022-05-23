import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Gift({
  id = 'GiftIcon',
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
        fill-Rule="evenodd"
        clip-Rule="evenodd"
        d="M1.88867 9C1.88867 7.34315 3.23182 6 4.88867 6H20.8887C22.5455 6 23.8887 7.34315 23.8887 9V10C23.8887 11.6569 22.5455 13 20.8887 13H4.88867C3.23182 13 1.88867 11.6569 1.88867 10V9ZM4.88867 8C4.33639 8 3.88867 8.44772 3.88867 9V10C3.88867 10.5523 4.33639 11 4.88867 11H20.8887C21.441 11 21.8887 10.5523 21.8887 10V9C21.8887 8.44772 21.441 8 20.8887 8H4.88867Z"
        fill={fill}
      />
      <Path
        fill-Rule="evenodd"
        clip-Rule="evenodd"
        d="M3.88867 12C3.88867 11.4477 4.33639 11 4.88867 11H20.8887C21.441 11 21.8887 11.4477 21.8887 12V19C21.8887 20.6569 20.5455 22 18.8887 22H6.88867C5.23182 22 3.88867 20.6569 3.88867 19V12ZM5.88867 13V19C5.88867 19.5523 6.33639 20 6.88867 20H18.8887C19.441 20 19.8887 19.5523 19.8887 19V13H5.88867Z"
        fill={fill}
      />
      <Path
        fill-Rule="evenodd"
        clip-Rule="evenodd"
        d="M12.8887 6C13.441 6 13.8887 6.44772 13.8887 7V21C13.8887 21.5523 13.441 22 12.8887 22C12.3364 22 11.8887 21.5523 11.8887 21V7C11.8887 6.44772 12.3364 6 12.8887 6Z"
        fill={fill}
      />
      <Path
        fill-Rule="evenodd"
        clip-Rule="evenodd"
        d="M4.88867 5.23438C4.88867 3.45616 6.32943 2 8.11594 2H9.0177C11.7079 2 13.8887 4.18081 13.8887 6.87097C13.8887 7.49451 13.3832 8 12.7596 8H7.64867C6.12022 8 4.88867 6.75454 4.88867 5.23438ZM8.11594 4C7.44228 4 6.88867 4.55243 6.88867 5.23438C6.88867 5.65827 7.23308 6 7.64867 6H11.7542C11.3854 4.84022 10.2997 4 9.0177 4H8.11594Z"
        fill={fill}
      />
      <Path
        fill-Rule="evenodd"
        clip-Rule="evenodd"
        d="M20.8887 5.23438C20.8887 3.45616 19.4479 2 17.6614 2H16.7596C14.0695 2 11.8887 4.18081 11.8887 6.87097C11.8887 7.49451 12.3942 8 13.0177 8H18.1287C19.6571 8 20.8887 6.75454 20.8887 5.23438ZM17.6614 4C18.3351 4 18.8887 4.55243 18.8887 5.23438C18.8887 5.65827 18.5443 6 18.1287 6H14.0232C14.392 4.84022 15.4777 4 16.7596 4H17.6614Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Gift;
