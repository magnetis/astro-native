import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Logout({
  id = 'LogoutIcon',
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
        d="M11.8887 20C11.8887 19.4477 11.441 19 10.8887 19H5.88867V5H10.8887C11.441 5 11.8887 4.55228 11.8887 4C11.8887 3.44771 11.441 3 10.8887 3H5.88867C4.7841 3 3.88867 3.89543 3.88867 5V19C3.88867 20.1046 4.7841 21 5.88867 21H10.8887C11.441 21 11.8887 20.5523 11.8887 20Z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Path
        d="M22.6023 12.7005C22.6949 12.6062 22.7651 12.498 22.8128 12.3828C22.8613 12.2657 22.8883 12.1375 22.8887 12.003L22.8887 12L22.8887 11.997C22.8879 11.7421 22.7903 11.4874 22.5958 11.2929L18.5958 7.29289C18.2053 6.90237 17.5721 6.90237 17.1816 7.29289C16.791 7.68342 16.791 8.31658 17.1816 8.70711L19.4745 11H9.88867C9.33639 11 8.88867 11.4477 8.88867 12C8.88867 12.5523 9.33639 13 9.88867 13H19.4745L17.1816 15.2929C16.791 15.6834 16.791 16.3166 17.1816 16.7071C17.5721 17.0976 18.2053 17.0976 18.5958 16.7071L22.5951 12.7078L22.6023 12.7005Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Logout;
