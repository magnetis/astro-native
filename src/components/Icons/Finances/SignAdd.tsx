import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SignAdd({
  id = 'SignAddIcon',
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
        d="M12.8887 4C13.441 4 13.8887 4.44772 13.8887 5V11H19.8887C20.441 11 20.8887 11.4477 20.8887 12C20.8887 12.5523 20.441 13 19.8887 13H13.8887V19C13.8887 19.5523 13.441 20 12.8887 20C12.3364 20 11.8887 19.5523 11.8887 19V13H5.88867C5.33639 13 4.88867 12.5523 4.88867 12C4.88867 11.4477 5.33639 11 5.88867 11H11.8887V5C11.8887 4.44772 12.3364 4 12.8887 4Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SignAdd;
