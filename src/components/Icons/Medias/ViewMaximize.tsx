import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ViewMaximize({
  id = 'ViewMaximizeIcon',
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
        d="M17.8887 2C17.3364 2 16.8887 2.44772 16.8887 3C16.8887 3.55228 17.3364 4 17.8887 4L19.4745 4L15.1816 8.29289C14.791 8.68342 14.791 9.31658 15.1816 9.70711C15.5721 10.0976 16.2053 10.0976 16.5958 9.70711L20.8887 5.41422L20.8887 7.00001C20.8887 7.55229 21.3364 8 21.8887 8C22.441 8 22.8887 7.55229 22.8887 7L22.8887 3C22.8887 2.44772 22.441 2 21.8887 2H17.8887ZM4.88867 18.5858L4.88867 17C4.88867 16.4477 4.44096 16 3.88867 16C3.33639 16 2.88867 16.4477 2.88867 17L2.88868 21C2.88868 21.5523 3.33639 22 3.88867 22H7.88867C8.44096 22 8.88867 21.5523 8.88867 21C8.88867 20.4477 8.44096 20 7.88867 20H6.30288L10.5958 15.7071C10.9863 15.3166 10.9863 14.6834 10.5958 14.2929C10.2053 13.9024 9.57209 13.9024 9.18157 14.2929L4.88867 18.5858Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ViewMaximize;
