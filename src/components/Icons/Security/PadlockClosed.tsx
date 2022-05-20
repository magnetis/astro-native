import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function PadlockClosed({
  id = 'PadlockClosedIcon',
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
        d="M12.8887 4C11.241 4 9.88867 5.35228 9.88867 7V10H18.8887C19.9932 10 20.8887 10.8954 20.8887 12V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V12C4.88867 10.8954 5.7841 10 6.88867 10H7.88867V7C7.88867 4.24772 10.1364 2 12.8887 2C15.641 2 17.8887 4.24772 17.8887 7C17.8887 7.55228 17.441 8 16.8887 8C16.3364 8 15.8887 7.55228 15.8887 7C15.8887 5.35228 14.5364 4 12.8887 4ZM6.88867 12V20H18.8887V12H6.88867Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default PadlockClosed;
