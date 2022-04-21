import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowLeftCircle({
  id = 'ArrowLeftCircletIcon',
  color = colors.space100,
  viewBox = '0 0 24 24',
  width = 24,
  height = 24,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM12.5958 7.29289C12.9863 7.68342 12.9863 8.31658 12.5958 8.70711L10.3029 11H17.8887C18.441 11 18.8887 11.4477 18.8887 12C18.8887 12.5523 18.441 13 17.8887 13H10.3029L12.5958 15.2929C12.9863 15.6834 12.9863 16.3166 12.5958 16.7071C12.2053 17.0976 11.5721 17.0976 11.1816 16.7071L7.18157 12.7071C6.79104 12.3166 6.79104 11.6834 7.18157 11.2929L11.1816 7.29289C11.5721 6.90237 12.2053 6.90237 12.5958 7.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowLeftCircle;
