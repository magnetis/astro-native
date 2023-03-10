import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronDown({
  id = 'ArrowChevronDownIcon',
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
        d="M6.18157 9.29289C6.57209 8.90237 7.20525 8.90237 7.59578 9.29289L12.8887 14.5858L18.1816 9.29289C18.5721 8.90237 19.2053 8.90237 19.5958 9.29289C19.9863 9.68342 19.9863 10.3166 19.5958 10.7071L13.5958 16.7071C13.2053 17.0976 12.5721 17.0976 12.1816 16.7071L6.18157 10.7071C5.79104 10.3166 5.79104 9.68342 6.18157 9.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDown;
