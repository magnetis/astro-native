import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronDoubleDown({
  id = 'ArrowChevronDoubleDownIcon',
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
        d="M6.18157 6.29289C6.57209 5.90237 7.20526 5.90237 7.59578 6.29289L12.8887 11.5858L18.1816 6.2929C18.5721 5.90237 19.2053 5.90237 19.5958 6.2929C19.9863 6.68342 19.9863 7.31658 19.5958 7.70711L13.5958 13.7071C13.2053 14.0976 12.5721 14.0976 12.1816 13.7071L6.18157 7.70711C5.79104 7.31658 5.79104 6.68342 6.18157 6.29289ZM6.18157 12.2929C6.57209 11.9024 7.20525 11.9024 7.59578 12.2929L12.8887 17.5858L18.1816 12.2929C18.5721 11.9024 19.2053 11.9024 19.5958 12.2929C19.9863 12.6834 19.9863 13.3166 19.5958 13.7071L13.5958 19.7071C13.2053 20.0976 12.5721 20.0976 12.1816 19.7071L6.18156 13.7071C5.79104 13.3166 5.79104 12.6834 6.18157 12.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDoubleDown;
