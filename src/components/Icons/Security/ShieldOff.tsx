import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ShieldOff({
  id = 'ShieldOffIcon',
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
        d="M6.88867 7.7233L4.88891 5.72353C4.88875 5.73378 4.88867 5.74405 4.88867 5.75432V10.8538C4.88867 14.4063 6.60429 17.7401 9.49505 19.8049L11.7262 21.3986C12.4216 21.8953 13.3558 21.8953 14.0511 21.3986L16.2823 19.8049C16.805 19.4316 17.2893 19.0167 17.7319 18.5666L16.3177 17.1523C15.9523 17.5252 15.5521 17.8687 15.1198 18.1774L12.8887 19.7711L10.6575 18.1774C8.29236 16.488 6.88867 13.7604 6.88867 10.8538V7.7233Z"
        fill={fill}
      />
      <Path
        d="M18.8887 10.8538C18.8887 11.8133 18.7357 12.7533 18.4457 13.6428L19.9964 15.1936C20.5773 13.8408 20.8887 12.3672 20.8887 10.8538V5.75432C20.8887 4.86136 20.2967 4.07659 19.4381 3.83128L13.4381 2.11699C13.079 2.01439 12.6983 2.01439 12.3392 2.11699L8.12416 3.3213L9.74196 4.9391L12.8887 4.04004L18.8887 5.75432L18.8887 10.8538Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.18157 2.60198C3.57209 2.21145 4.20525 2.21145 4.59578 2.60198L20.5958 18.602C20.9863 18.9925 20.9863 19.6257 20.5958 20.0162C20.2053 20.4067 19.5721 20.4067 19.1816 20.0162L3.18157 4.01619C2.79104 3.62566 2.79104 2.9925 3.18157 2.60198Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ShieldOff;
