import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ViewMinimize({
  id = 'ViewMinimizeIcon',
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
        d="M22.5958 3.70711C22.9863 3.31658 22.9863 2.68342 22.5958 2.29289C22.2053 1.90237 21.5721 1.90237 21.1816 2.29289L16.8887 6.58579L16.8887 4.99999C16.8887 4.44771 16.441 3.99999 15.8887 4C15.3364 4 14.8887 4.44771 14.8887 5L14.8887 9C14.8887 9.55228 15.3364 10 15.8887 10L19.8887 10C20.441 10 20.8887 9.55228 20.8887 9C20.8887 8.44772 20.441 8 19.8887 8L18.3029 8L22.5958 3.70711ZM3.18157 21.7071C2.79104 21.3166 2.79104 20.6834 3.18157 20.2929L7.47446 16H5.88867C5.33639 16 4.88867 15.5523 4.88867 15C4.88867 14.4477 5.33639 14 5.88867 14H9.88867C10.441 14 10.8887 14.4477 10.8887 15L10.8887 19C10.8887 19.5523 10.441 20 9.88867 20C9.33639 20 8.88867 19.5523 8.88867 19L8.88867 17.4142L4.59578 21.7071C4.20525 22.0976 3.57209 22.0976 3.18157 21.7071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ViewMinimize;
