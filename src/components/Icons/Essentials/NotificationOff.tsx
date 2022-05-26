import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function NotificationOff({
  id = 'NotificationOffIcon',
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
        d="M19.8888 10C19.8888 6.77579 17.7089 4.06072 14.7426 3.24812C14.4455 2.51616 13.7274 2 12.8888 2C12.0502 2 11.3321 2.51616 11.0349 3.24812C10.4748 3.40155 9.94278 3.62281 9.44815 3.90252L10.9397 5.39411C11.5387 5.14035 12.1973 5 12.8888 5C15.6502 5 17.8888 7.23858 17.8888 10V12.3431L19.8888 14.3431V10Z"
        fill={fill}
      />
      <Path
        d="M4.06408 17.4343L5.88878 14.6972V9.99999C5.88878 8.94987 6.12002 7.95375 6.53435 7.05978L4.18167 4.70711C3.79115 4.31658 3.79115 3.68342 4.18167 3.29289C4.5722 2.90237 5.20536 2.90237 5.59589 3.29289L21.5959 19.2929C21.9864 19.6834 21.9864 20.3166 21.5959 20.7071C21.2054 21.0976 20.5722 21.0976 20.1817 20.7071L18.4746 19H16.3533C16.1107 20.6961 14.652 22 12.8888 22C11.1255 22 9.66684 20.6961 9.42422 19H4.90174C4.80433 19.0014 4.70621 18.9885 4.61064 18.9608C4.4848 18.9244 4.36916 18.864 4.26904 18.7849C4.05547 18.616 3.91246 18.3618 3.89146 18.0738C3.88228 17.9509 3.89568 17.8258 3.93298 17.7051C3.96302 17.6076 4.00756 17.5165 4.06408 17.4343ZM6.75729 17H16.4746L8.08453 8.60997C7.95708 9.05126 7.88878 9.51765 7.88878 9.99999V15C7.88878 15.1974 7.83034 15.3904 7.72083 15.5547L6.75729 17ZM11.4741 19C11.68 19.5826 12.2357 20 12.8888 20C13.5419 20 14.0975 19.5826 14.3034 19H11.4741Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default NotificationOff;
