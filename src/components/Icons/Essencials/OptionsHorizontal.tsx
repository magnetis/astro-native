import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function OptionsHorizontal({
  id = 'OptionsHorizontalIcon',
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
        d="M12.8887 14C13.9932 14 14.8887 13.1046 14.8887 12C14.8887 10.8954 13.9932 10 12.8887 10C11.7841 10 10.8887 10.8954 10.8887 12C10.8887 13.1046 11.7841 14 12.8887 14Z"
        fill={fill}
      />
      <Path
        d="M6.88867 14C7.99324 14 8.88867 13.1046 8.88867 12C8.88867 10.8954 7.99324 10 6.88867 10C5.7841 10 4.88867 10.8954 4.88867 12C4.88867 13.1046 5.7841 14 6.88867 14Z"
        fill={fill}
      />
      <Path
        d="M18.8887 14C19.9932 14 20.8887 13.1046 20.8887 12C20.8887 10.8954 19.9932 10 18.8887 10C17.7841 10 16.8887 10.8954 16.8887 12C16.8887 13.1046 17.7841 14 18.8887 14Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default OptionsHorizontal;
