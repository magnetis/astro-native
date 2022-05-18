import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SignCheck({
  id = 'SignCheckIcon',
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
        d="M21.553 5.2526C21.9658 5.61952 22.003 6.25159 21.6361 6.66437L10.9694 18.6644C10.7797 18.8779 10.5077 19 10.222 19C9.93638 19 9.66437 18.8779 9.47461 18.6644L4.14127 12.6644C3.77436 12.2516 3.81154 11.6195 4.22432 11.2526C4.6371 10.8857 5.26917 10.9229 5.63609 11.3356L10.222 16.4948L20.1413 5.33565C20.5082 4.92286 21.1403 4.88568 21.553 5.2526Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SignCheck;
