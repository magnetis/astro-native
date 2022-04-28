import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRight({
  id = 'ArrowRightIcon',
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
        d="M13.1816 5.29289C13.5721 4.90237 14.2053 4.90237 14.5958 5.29289L20.5958 11.2929C20.7833 11.4804 20.8887 11.7348 20.8887 12C20.8887 12.2652 20.7833 12.5196 20.5958 12.7071L14.5958 18.7071C14.2053 19.0976 13.5721 19.0976 13.1816 18.7071C12.791 18.3166 12.791 17.6834 13.1816 17.2929L17.4745 13L5.88867 13C5.33639 13 4.88867 12.5523 4.88867 12C4.88867 11.4477 5.33639 11 5.88867 11L17.4745 11L13.1816 6.70711C12.791 6.31658 12.791 5.68342 13.1816 5.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRight;
