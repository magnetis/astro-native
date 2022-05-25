import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaPlay({
  id = 'MediaPlayIcon',
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
        d="M6.88867 6.74105C6.88867 5.19747 8.5631 4.23573 9.89641 5.01349L18.9118 10.2725C20.2348 11.0442 20.2348 12.9558 18.9118 13.7276L9.89641 18.9865C8.5631 19.7643 6.88867 18.8026 6.88867 17.259V6.74105ZM17.904 12L8.88867 6.74105V17.259L17.904 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MediaPlay;
