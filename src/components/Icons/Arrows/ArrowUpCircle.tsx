import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowUpCircle({
  id = 'ArrowUpCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM11.8887 9.41421L9.59578 11.7071C9.20525 12.0976 8.57209 12.0976 8.18156 11.7071C7.79104 11.3166 7.79104 10.6834 8.18156 10.2929L12.1816 6.29289C12.5721 5.90237 13.2053 5.90237 13.5958 6.29289L17.5958 10.2929C17.9863 10.6834 17.9863 11.3166 17.5958 11.7071C17.2053 12.0976 16.5721 12.0976 16.1816 11.7071L13.8887 9.41421V17C13.8887 17.5523 13.441 18 12.8887 18C12.3364 18 11.8887 17.5523 11.8887 17V9.41421Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowUpCircle;
