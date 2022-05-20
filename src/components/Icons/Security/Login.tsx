import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Login({
  id = 'LoginIcon',
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
        d="M14.8887 19C14.3364 19 13.8887 19.4477 13.8887 20C13.8887 20.5523 14.3364 21 14.8887 21H19.8887C20.9932 21 21.8887 20.1046 21.8887 19V5C21.8887 3.89543 20.9932 3 19.8887 3H14.8887C14.3364 3 13.8887 3.44771 13.8887 4C13.8887 4.55228 14.3364 5 14.8887 5H19.8887V19H14.8887Z"
        fill={fill}
      />
      <Path
        d="M16.6023 12.7005C16.6949 12.6062 16.7651 12.498 16.8128 12.3828C16.8613 12.2657 16.8883 12.1375 16.8887 12.003L16.8887 12L16.8887 11.997C16.8879 11.7421 16.7903 11.4874 16.5958 11.2929L12.5958 7.29289C12.2053 6.90237 11.5721 6.90237 11.1816 7.29289C10.791 7.68342 10.791 8.31658 11.1816 8.70711L13.4745 11H3.88867C3.33639 11 2.88867 11.4477 2.88867 12C2.88867 12.5523 3.33639 13 3.88867 13H13.4745L11.1816 15.2929C10.791 15.6834 10.791 16.3166 11.1816 16.7071C11.5721 17.0976 12.2053 17.0976 12.5958 16.7071L16.5951 12.7078L16.6023 12.7005Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Login;
