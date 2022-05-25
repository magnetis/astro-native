import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaStop({
  id = 'MediaStopIcon',
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
        d="M5.88867 7C5.88867 5.89543 6.7841 5 7.88867 5H17.8887C18.9932 5 19.8887 5.89543 19.8887 7V17C19.8887 18.1046 18.9932 19 17.8887 19H7.88867C6.7841 19 5.88867 18.1046 5.88867 17V7ZM17.8887 7L7.88867 7V17H17.8887V7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MediaStop;
