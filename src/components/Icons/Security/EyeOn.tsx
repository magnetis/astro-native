import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EyeOn({
  id = 'EyeOnIcon',
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
        d="M15.8887 12C15.8887 13.6569 14.5455 15 12.8887 15C11.2318 15 9.88867 13.6569 9.88867 12C9.88867 10.3431 11.2318 9 12.8887 9C14.5455 9 15.8887 10.3431 15.8887 12Z"
        fill={fill}
      />
      <Path
        d="M22.7831 11.5528C20.6249 7.23635 16.7918 5 12.8887 5C8.98555 5 5.15246 7.23635 2.99424 11.5528C2.85348 11.8343 2.85348 12.1657 2.99424 12.4472C5.15246 16.7637 8.98555 19 12.8887 19C16.7918 19 20.6249 16.7637 22.7831 12.4472C22.9239 12.1657 22.9239 11.8343 22.7831 11.5528ZM12.8887 17C9.91989 17 6.88673 15.3792 5.01833 12C6.88673 8.62078 9.91989 7 12.8887 7C15.8575 7 18.8906 8.62078 20.759 12C18.8906 15.3792 15.8575 17 12.8887 17Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EyeOn;
