import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Laptop({
  id = 'LaptopIcon',
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
        d="M5 6H28C28.5523 6 29 6.44772 29 7V20H30C30.5523 20 31 20.4477 31 21V23C31 24.6569 29.6569 26 28 26H5C3.34315 26 2 24.6569 2 23V21C2 20.4477 2.44772 20 3 20H4V7C4 6.44772 4.44772 6 5 6ZM27 8V20H6V8H27ZM4 22H5H28H29V23C29 23.5523 28.5523 24 28 24H5C4.44772 24 4 23.5523 4 23V22ZM9 9H24C24.5523 9 25 9.44772 25 10V18C25 18.5523 24.5523 19 24 19H9C8.44772 19 8 18.5523 8 18V10C8 9.44772 8.44772 9 9 9ZM10 11V17H23V11H10ZM14 23C14 23.2761 14.2239 23.5 14.5 23.5H18.4243C18.7005 23.5 18.9243 23.2761 18.9243 23C18.9243 22.7239 18.7005 22.5 18.4243 22.5H14.5C14.2239 22.5 14 22.7239 14 23Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Laptop;
