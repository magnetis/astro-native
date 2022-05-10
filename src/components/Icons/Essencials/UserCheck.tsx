import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function UserCheck({
  id = 'UserCheckIcon',
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
        d="M10.8887 4C8.67953 4 6.88867 5.79086 6.88867 8C6.88867 10.2091 8.67953 12 10.8887 12C13.0978 12 14.8887 10.2091 14.8887 8C14.8887 5.79086 13.0978 4 10.8887 4ZM4.88867 8C4.88867 4.68629 7.57496 2 10.8887 2C14.2024 2 16.8887 4.68629 16.8887 8C16.8887 11.3137 14.2024 14 10.8887 14C7.57496 14 4.88867 11.3137 4.88867 8ZM22.553 11.2526C22.9658 11.6195 23.003 12.2516 22.6361 12.6644L19.9694 15.6644C19.7796 15.8779 19.5076 16 19.222 16C18.9364 16 18.6644 15.8779 18.4746 15.6644L17.1413 14.1644C16.7743 13.7516 16.8115 13.1195 17.2243 12.7526C17.6371 12.3857 18.2692 12.4229 18.6361 12.8356L19.222 13.4948L21.1413 11.3356C21.5082 10.9229 22.1403 10.8857 22.553 11.2526ZM7.38867 18C6.12921 18 4.88867 19.2135 4.88867 21C4.88867 21.5523 4.44096 22 3.88867 22C3.33639 22 2.88867 21.5523 2.88867 21C2.88867 18.3682 4.78214 16 7.38867 16H14.3887C16.9952 16 18.8887 18.3682 18.8887 21C18.8887 21.5523 18.441 22 17.8887 22C17.3364 22 16.8887 21.5523 16.8887 21C16.8887 19.2135 15.6481 18 14.3887 18H7.38867Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default UserCheck;
