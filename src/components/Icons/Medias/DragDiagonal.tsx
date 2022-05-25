import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DragDiagonal({
  id = 'DragDiagonalIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8459 4.98406C20.2365 5.37458 20.2365 6.00774 19.8459 6.39827L7.23152 19.0127C6.841 19.4032 6.20783 19.4032 5.81731 19.0127C5.42678 18.6222 5.42678 17.989 5.81731 17.5985L18.4317 4.98406C18.8223 4.59353 19.4554 4.59353 19.8459 4.98406Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4943 9.89083C20.8849 10.2814 20.8849 10.9145 20.4943 11.305L12.1707 19.6287C11.7802 20.0192 11.147 20.0192 10.7565 19.6287C10.366 19.2382 10.366 18.605 10.7565 18.2145L19.0801 9.89083C19.4707 9.50031 20.1038 9.50031 20.4943 9.89083Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DragDiagonal;
