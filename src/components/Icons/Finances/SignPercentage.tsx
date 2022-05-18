import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SignPercentage({
  id = 'SignPercentageIcon',
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
        d="M19.5958 5.29289C19.9863 5.68342 19.9863 6.31658 19.5958 6.70711L7.59578 18.7071C7.20525 19.0976 6.57209 19.0976 6.18157 18.7071C5.79104 18.3166 5.79104 17.6834 6.18157 17.2929L18.1816 5.29289C18.5721 4.90237 19.2053 4.90237 19.5958 5.29289Z"
        fill={fill}
      />
      <Path
        d="M17.8887 19C18.9932 19 19.8887 18.1046 19.8887 17C19.8887 15.8954 18.9932 15 17.8887 15C16.7841 15 15.8887 15.8954 15.8887 17C15.8887 18.1046 16.7841 19 17.8887 19Z"
        fill={fill}
      />
      <Path
        d="M7.88867 9C8.99324 9 9.88867 8.10457 9.88867 7C9.88867 5.89543 8.99324 5 7.88867 5C6.7841 5 5.88867 5.89543 5.88867 7C5.88867 8.10457 6.7841 9 7.88867 9Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SignPercentage;
