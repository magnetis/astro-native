import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ShieldInfo({
  id = 'ShieldInfoIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3392 2.11699C12.6983 2.01439 13.079 2.01439 13.4381 2.11699L19.4381 3.83128C20.2967 4.07659 20.8887 4.86136 20.8887 5.75432V10.8538C20.8887 14.4063 19.173 17.7401 16.2823 19.8049L14.0511 21.3986C13.3558 21.8953 12.4216 21.8953 11.7262 21.3986L9.49505 19.8049C6.60429 17.7401 4.88867 14.4063 4.88867 10.8538V5.75432C4.88867 4.86136 5.48063 4.07659 6.33923 3.83128L12.3392 2.11699ZM12.8887 4.04004L6.88867 5.75432V10.8538C6.88867 13.7604 8.29236 16.488 10.6575 18.1774L12.8887 19.7711L15.1198 18.1774C17.485 16.488 18.8887 13.7604 18.8887 10.8538L18.8887 5.75432L12.8887 4.04004ZM12.8887 10C13.441 10 13.8887 10.4477 13.8887 11V14C13.8887 14.5523 13.441 15 12.8887 15C12.3364 15 11.8887 14.5523 11.8887 14V11C11.8887 10.4477 12.3364 10 12.8887 10Z"
        fill={fill}
      />
      <Path
        d="M13.8887 8.00002C13.8887 8.55231 13.441 9.00002 12.8887 9.00002C12.3364 9.00002 11.8887 8.55231 11.8887 8.00002C11.8887 7.44774 12.3364 7.00002 12.8887 7.00002C13.441 7.00002 13.8887 7.44774 13.8887 8.00002Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ShieldInfo;
