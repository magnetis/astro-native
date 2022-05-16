import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Email({
  id = 'EmailIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H20.8887C21.9932 4 22.8887 4.89543 22.8887 6V18C22.8887 19.1046 21.9932 20 20.8887 20H4.88867C3.7841 20 2.88867 19.1046 2.88867 18V6ZM6.40726 6L12.8887 11.6712L19.3701 6H6.40726ZM20.8887 7.32877L13.5472 13.7526C13.1702 14.0825 12.6072 14.0825 12.2302 13.7526L4.88867 7.32877V18H20.8887V7.32877Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Email;
