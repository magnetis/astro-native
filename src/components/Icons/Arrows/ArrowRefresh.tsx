import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRefresh({
  id = 'ArrowRefreshIcon',
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
        d="M13.6816 2.29289C14.0721 1.90237 14.7053 1.90237 15.0958 2.29289L18.0958 5.29289C18.4863 5.68342 18.4863 6.31658 18.0958 6.70711L15.0958 9.70711C14.7053 10.0976 14.0721 10.0976 13.6816 9.70711C13.291 9.31658 13.291 8.68342 13.6816 8.29289L14.9745 7H13.3887C9.84096 7 6.88867 9.95228 6.88867 13.5C6.88867 17.0477 9.84096 20 13.3887 20C16.9364 20 19.8887 17.0477 19.8887 13.5C19.8887 12.9477 20.3364 12.5 20.8887 12.5C21.441 12.5 21.8887 12.9477 21.8887 13.5C21.8887 18.1523 18.041 22 13.3887 22C8.73639 22 4.88867 18.1523 4.88867 13.5C4.88867 8.84772 8.73639 5 13.3887 5H14.9745L13.6816 3.70711C13.291 3.31658 13.291 2.68342 13.6816 2.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRefresh;
