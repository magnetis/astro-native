import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowLeftDown({
  id = 'ArrowLeftDownIcon',
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
        d="M18.5958 6.29289C18.9863 6.68342 18.9863 7.31658 18.5958 7.70711L10.3029 16L15.8887 16C16.441 16 16.8887 16.4477 16.8887 17C16.8887 17.5523 16.441 18 15.8887 18L7.88867 18C7.33639 18 6.88867 17.5523 6.88867 17L6.88867 9C6.88867 8.44771 7.33639 8 7.88867 8C8.44096 8 8.88867 8.44771 8.88867 9L8.88867 14.5858L17.1816 6.29289C17.5721 5.90237 18.2053 5.90237 18.5958 6.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}
export default ArrowLeftDown;
