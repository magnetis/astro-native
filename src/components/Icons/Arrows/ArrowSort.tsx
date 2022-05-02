import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowSort({
  id = 'ArrowSortIcon',
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
        d="M7.18157 4.29289C7.57209 3.90237 8.20525 3.90237 8.59578 4.29289L12.5958 8.29289C12.9863 8.68342 12.9863 9.31658 12.5958 9.70711C12.2053 10.0976 11.5721 10.0976 11.1816 9.70711L8.88867 7.41421V19C8.88867 19.5523 8.44096 20 7.88867 20C7.33639 20 6.88867 19.5523 6.88867 19V7.41421L4.59578 9.70711C4.20525 10.0976 3.57209 10.0976 3.18157 9.70711C2.79104 9.31658 2.79104 8.68342 3.18157 8.29289L7.18157 4.29289ZM16.8887 16.5858V5C16.8887 4.44772 17.3364 4 17.8887 4C18.441 4 18.8887 4.44772 18.8887 5V16.5858L21.1816 14.2929C21.5721 13.9024 22.2053 13.9024 22.5958 14.2929C22.9863 14.6834 22.9863 15.3166 22.5958 15.7071L18.5958 19.7071C18.4082 19.8946 18.1539 20 17.8887 20C17.6235 20 17.3691 19.8946 17.1816 19.7071L13.1816 15.7071C12.791 15.3166 12.791 14.6834 13.1816 14.2929C13.5721 13.9024 14.2053 13.9024 14.5958 14.2929L16.8887 16.5858Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowSort;
