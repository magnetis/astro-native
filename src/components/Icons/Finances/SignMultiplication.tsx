import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SignMultiplication({
  id = 'SignMultiplicationIcon',
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
        d="M6.18157 5.29289C6.57209 4.90237 7.20525 4.90237 7.59578 5.29289L12.8887 10.5858L18.1816 5.29289C18.5721 4.90237 19.2053 4.90237 19.5958 5.29289C19.9863 5.68342 19.9863 6.31658 19.5958 6.70711L14.3029 12L19.5958 17.2929C19.9863 17.6834 19.9863 18.3166 19.5958 18.7071C19.2053 19.0976 18.5721 19.0976 18.1816 18.7071L12.8887 13.4142L7.59578 18.7071C7.20525 19.0976 6.57209 19.0976 6.18157 18.7071C5.79104 18.3166 5.79104 17.6834 6.18157 17.2929L11.4745 12L6.18157 6.70711C5.79104 6.31658 5.79104 5.68342 6.18157 5.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SignMultiplication;
