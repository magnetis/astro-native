import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronDoubleLeft({
  id = 'ArrowChevronDoubleLeftIcon',
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
        d="M18.5958 5.29289C18.9863 5.68342 18.9863 6.31658 18.5958 6.70711L13.3029 12L18.5958 17.2929C18.9863 17.6834 18.9863 18.3166 18.5958 18.7071C18.2053 19.0976 17.5721 19.0976 17.1816 18.7071L11.1816 12.7071C10.791 12.3166 10.791 11.6834 11.1816 11.2929L17.1816 5.29289C17.5721 4.90237 18.2053 4.90237 18.5958 5.29289ZM12.5958 5.29289C12.9863 5.68342 12.9863 6.31658 12.5958 6.70711L7.30289 12L12.5958 17.2929C12.9863 17.6834 12.9863 18.3166 12.5958 18.7071C12.2053 19.0976 11.5721 19.0976 11.1816 18.7071L5.18157 12.7071C4.99403 12.5196 4.88867 12.2652 4.88867 12C4.88867 11.7348 4.99403 11.4804 5.18157 11.2929L11.1816 5.29289C11.5721 4.90237 12.2053 4.90237 12.5958 5.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDoubleLeft;
