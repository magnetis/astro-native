import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronLeft({
  id = 'ArrowChevronLeftIcon',
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
        d="M15.5958 5.29289C15.9863 5.68342 15.9863 6.31658 15.5958 6.70711L10.3029 12L15.5958 17.2929C15.9863 17.6834 15.9863 18.3166 15.5958 18.7071C15.2053 19.0976 14.5721 19.0976 14.1816 18.7071L8.18156 12.7071C7.79104 12.3166 7.79104 11.6834 8.18157 11.2929L14.1816 5.29289C14.5721 4.90237 15.2053 4.90237 15.5958 5.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronLeft;
