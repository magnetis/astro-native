import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function NotificationOn({
  id = 'NotificationOnIcon',
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
        d="M11.0348 3.24812C11.332 2.51616 12.05 2 12.8887 2C13.7273 2 14.4454 2.51616 14.7425 3.24812C17.7088 4.06072 19.8887 6.77579 19.8887 10V14.6972L21.7207 17.4453C21.9253 17.7522 21.9444 18.1467 21.7703 18.4719C21.5963 18.797 21.2575 19 20.8887 19H16.3532C16.1106 20.6961 14.6519 22 12.8887 22C11.1254 22 9.66673 20.6961 9.42412 19H4.88867C4.51988 19 4.18102 18.797 4.007 18.4719C3.83298 18.1467 3.85205 17.7522 4.05662 17.4453L5.88867 14.6972V10C5.88867 6.77579 8.0685 4.06072 11.0348 3.24812ZM11.474 19C11.6799 19.5826 12.2356 20 12.8887 20C13.5418 20 14.0974 19.5826 14.3033 19H11.474ZM12.8887 5C10.1272 5 7.88867 7.23858 7.88867 10V15C7.88867 15.1974 7.83024 15.3904 7.72072 15.5547L6.75719 17H19.0202L18.0566 15.5547C17.9471 15.3904 17.8887 15.1974 17.8887 15V10C17.8887 7.23858 15.6501 5 12.8887 5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default NotificationOn;
