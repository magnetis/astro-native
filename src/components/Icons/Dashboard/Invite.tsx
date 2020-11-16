import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Invite({
  id = 'InviteIcon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 3C17 2.44772 16.5523 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30C16.5523 30 17 29.5523 17 29C17 28.4477 16.5523 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C16.5523 4 17 3.55228 17 3ZM18 11.5C18 13.9853 20.0147 16 22.5 16C24.9853 16 27 13.9853 27 11.5C27 9.01472 24.9853 7 22.5 7C20.0147 7 18 9.01472 18 11.5ZM25 11.5C25 12.8807 23.8807 14 22.5 14C21.1193 14 20 12.8807 20 11.5C20 10.1193 21.1193 9 22.5 9C23.8807 9 25 10.1193 25 11.5ZM11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V14H9C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H11V10ZM17 24.5C17 25.0523 16.5523 25.5 16 25.5C15.4477 25.5 15 25.0523 15 24.5C15 20.3579 18.3579 17 22.5 17C26.6421 17 30 20.3579 30 24.5C30 25.0523 29.5523 25.5 29 25.5C28.4477 25.5 28 25.0523 28 24.5C28 21.4624 25.5376 19 22.5 19C19.4624 19 17 21.4624 17 24.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Invite;
