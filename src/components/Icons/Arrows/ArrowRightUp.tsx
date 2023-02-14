import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRightUp({
  id = 'ArrowRightUpIcon',
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
        d="M8.88867 7C8.88867 6.44772 9.33639 6 9.88867 6L17.8887 6C18.441 6 18.8887 6.44772 18.8887 7V15C18.8887 15.5523 18.441 16 17.8887 16C17.3364 16 16.8887 15.5523 16.8887 15V9.41421L8.59578 17.7071C8.20525 18.0976 7.57209 18.0976 7.18157 17.7071C6.79104 17.3166 6.79104 16.6834 7.18157 16.2929L15.4745 8L9.88867 8C9.33639 8 8.88867 7.55228 8.88867 7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRightUp;
