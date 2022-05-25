import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Video({
  id = 'VideoIcon',
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
        d="M22.3887 6.1C22.0887 5.9 21.6887 5.9 21.3887 6.1L16.9887 9.1V7C16.9887 5.9 16.0887 5 14.9887 5H4.88867C3.78867 5 2.88867 5.9 2.88867 7V17C2.88867 18.1 3.78867 19 4.88867 19H14.8887C15.9887 19 16.8887 18.1 16.8887 17V14.9L21.2887 17.9C21.4887 18 21.6887 18.1 21.8887 18.1C22.0887 18.1 22.1887 18.1 22.3887 18C22.6887 17.8 22.8887 17.5 22.8887 17.1V7C22.8887 6.6 22.6887 6.3 22.3887 6.1ZM14.8887 17H4.88867V7H14.8887V11V13V17ZM20.8887 15.1L16.8887 12.4V11.5L20.8887 8.8V15.1Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Video;
