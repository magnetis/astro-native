import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowChevronDoubleRight({
  id = 'ArrowChevronDoubleRightIcon',
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
        d="M13.1816 5.29289C13.5721 4.90237 14.2053 4.90237 14.5958 5.29289L20.5958 11.2929C20.9863 11.6834 20.9863 12.3166 20.5958 12.7071L14.5958 18.7071C14.2053 19.0976 13.5721 19.0976 13.1816 18.7071C12.791 18.3166 12.791 17.6834 13.1816 17.2929L18.4745 12L13.1816 6.70711C12.791 6.31658 12.791 5.68342 13.1816 5.29289ZM7.18157 5.29289C7.57209 4.90237 8.20526 4.90237 8.59578 5.29289L14.5958 11.2929C14.7833 11.4804 14.8887 11.7348 14.8887 12C14.8887 12.2652 14.7833 12.5196 14.5958 12.7071L8.59578 18.7071C8.20525 19.0976 7.57209 19.0976 7.18157 18.7071C6.79104 18.3166 6.79104 17.6834 7.18157 17.2929L12.4745 12L7.18157 6.70711C6.79104 6.31658 6.79104 5.68342 7.18157 5.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDoubleRight;
