import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function PadlockOpen({
  id = 'PadlockOpenIcon',
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
        d="M12.8887 4C14.5364 4 15.8887 5.35228 15.8887 7V10H9.88867V7C9.88867 5.35228 11.241 4 12.8887 4ZM17.8887 10V7C17.8887 4.24772 15.641 2 12.8887 2C10.1364 2 7.88867 4.24772 7.88867 7V10H6.88867C5.7841 10 4.88867 10.8954 4.88867 12V20C4.88867 21.1046 5.7841 22 6.88867 22H18.8887C19.9932 22 20.8887 21.1046 20.8887 20V12C20.8887 10.8954 19.9932 10 18.8887 10H17.8887ZM6.88867 12H18.8887V20H6.88867V12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default PadlockOpen;
