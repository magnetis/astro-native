import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';
import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Additional({
  id = 'AdditionalIcon',
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
        d="M16 2C16.5523 2 17 2.44772 17 3C17 3.55228 16.5523 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 15.4477 28.4477 15 29 15C29.5523 15 30 15.4477 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2ZM17 21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17H11C10.4477 17 10 16.5523 10 16C10 15.4477 10.4477 15 11 15H15V11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H17V21Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Additional;
