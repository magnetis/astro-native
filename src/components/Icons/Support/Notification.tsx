import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Notification({
  id = 'NotificationIcon',
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
        d="M16.3958 8.20383C12.2313 8.20383 8.84339 11.5924 8.84339 15.7576V23.7802H10.4059V15.7576C10.4059 12.4543 13.0928 9.76666 16.3958 9.76666C19.6989 9.76666 22.3857 12.4542 22.3857 15.7576V23.7802H23.9483V15.7576C23.9482 11.5924 20.5603 8.20383 16.3958 8.20383Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.8337 22.9988H8.16628C7.73475 22.9988 7.38501 23.3486 7.38501 23.7802C7.38501 24.2118 7.73475 24.5616 8.16628 24.5616H24.8337C25.2653 24.5616 25.615 24.2118 25.615 23.7802C25.615 23.3486 25.2652 22.9988 24.8337 22.9988Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3958 5C15.0747 5 13.9999 6.07498 13.9999 7.39635C13.9999 8.71773 15.0747 9.79271 16.3958 9.79271C17.717 9.79271 18.7918 8.71773 18.7918 7.39635C18.7918 6.07498 17.717 5 16.3958 5ZM16.3958 8.22988C15.944 8.22988 15.5625 7.84804 15.5625 7.39635C15.5625 6.94444 15.944 6.56283 16.3958 6.56283C16.8477 6.56283 17.2292 6.94444 17.2292 7.39635C17.2292 7.84827 16.8477 8.22988 16.3958 8.22988Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.75 23.7803V25.1347C17.75 25.8529 17.1659 26.4371 16.4479 26.4371C15.7299 26.4371 15.1457 25.8529 15.1457 25.1347V23.7803H13.5831V25.1347C13.5831 26.7145 14.8684 28 16.4479 28C18.0274 28 19.3126 26.7146 19.3126 25.1347V23.7803H17.75Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Notification;
