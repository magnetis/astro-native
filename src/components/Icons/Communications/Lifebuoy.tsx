import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Lifebuoy({
  id = 'LifebuoyIcon',
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
        d="M18.8887 6L15.7171 9.17157M15.7171 9.17157C14.9932 8.44772 13.9932 8 12.8887 8C11.7841 8 10.7841 8.44772 10.0602 9.17157M15.7171 9.17157C16.441 9.89543 16.8887 10.8954 16.8887 12C16.8887 13.1046 16.441 14.1046 15.7171 14.8284M18.8887 18L15.7171 14.8284M15.7171 14.8284C14.9932 15.5523 13.9932 16 12.8887 16C11.7841 16 10.7841 15.5523 10.0602 14.8284M6.88867 18L10.0602 14.8284M10.0602 14.8284C9.33639 14.1046 8.88867 13.1046 8.88867 12C8.88867 10.8954 9.33639 9.89543 10.0602 9.17157M6.88867 6L10.0602 9.17157M21.8887 12C21.8887 16.9706 17.8592 21 12.8887 21C7.91811 21 3.88867 16.9706 3.88867 12C3.88867 7.02944 7.91811 3 12.8887 3C17.8592 3 21.8887 7.02944 21.8887 12Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default Lifebuoy;
