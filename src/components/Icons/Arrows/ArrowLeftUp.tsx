import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowLeftUp({
  id = 'ArrowLeftUpIcon',
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
        d="M8.88867 9.41421L8.88867 15C8.88867 15.5523 8.44096 16 7.88867 16C7.33639 16 6.88867 15.5523 6.88867 15L6.88867 7C6.88867 6.44772 7.33639 6 7.88867 6L15.8887 6C16.441 6 16.8887 6.44772 16.8887 7C16.8887 7.55228 16.441 8 15.8887 8L10.3029 8L18.5958 16.2929C18.9863 16.6834 18.9863 17.3166 18.5958 17.7071C18.2053 18.0976 17.5721 18.0976 17.1816 17.7071L8.88867 9.41421Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowLeftUp;
