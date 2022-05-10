import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function OptionsVertical({
  id = 'OptionsVerticalIcon',
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
        d="M10.8887 12C10.8887 13.1046 11.7841 14 12.8887 14C13.9932 14 14.8887 13.1046 14.8887 12C14.8887 10.8954 13.9932 10 12.8887 10C11.7841 10 10.8887 10.8954 10.8887 12Z"
        fill={fill}
      />
      <Path
        d="M10.8887 6C10.8887 7.10457 11.7841 8 12.8887 8C13.9932 8 14.8887 7.10457 14.8887 6C14.8887 4.89543 13.9932 4 12.8887 4C11.7841 4 10.8887 4.89543 10.8887 6Z"
        fill={fill}
      />
      <Path
        d="M10.8887 18C10.8887 19.1046 11.7841 20 12.8887 20C13.9932 20 14.8887 19.1046 14.8887 18C14.8887 16.8954 13.9932 16 12.8887 16C11.7841 16 10.8887 16.8954 10.8887 18Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default OptionsVertical;
