import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronRight({
  id = 'ArrowChevronRightIcon',
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
        d="M10.1816 18.7071C9.79104 18.3166 9.79104 17.6834 10.1816 17.2929L15.4745 12L10.1816 6.70711C9.79104 6.31658 9.79104 5.68342 10.1816 5.29289C10.5721 4.90237 11.2053 4.90237 11.5958 5.29289L17.5958 11.2929C17.9863 11.6834 17.9863 12.3166 17.5958 12.7071L11.5958 18.7071C11.2053 19.0976 10.5721 19.0976 10.1816 18.7071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronRight;
