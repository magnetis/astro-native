import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SignRemove({
  id = 'SignRemoveIcon',
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
        d="M4.88867 12C4.88867 11.4477 5.33639 11 5.88867 11H19.8887C20.441 11 20.8887 11.4477 20.8887 12C20.8887 12.5523 20.441 13 19.8887 13H5.88867C5.33639 13 4.88867 12.5523 4.88867 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SignRemove;
