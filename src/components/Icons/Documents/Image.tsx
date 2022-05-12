import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Image({
  id = 'ImageIcon',
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
        d="M16.3887 10C17.2171 10 17.8887 9.32843 17.8887 8.5C17.8887 7.67157 17.2171 7 16.3887 7C15.5602 7 14.8887 7.67157 14.8887 8.5C14.8887 9.32843 15.5602 10 16.3887 10Z"
        fill={fill}
      />
      <Path
        d="M3.88867 5C3.88867 3.89543 4.7841 3 5.88867 3H19.8887C20.9932 3 21.8887 3.89543 21.8887 5V19C21.8887 20.1046 20.9932 21 19.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V5ZM19.8887 5H5.88867V12.9194L9.26401 10.2191C9.62923 9.92696 10.1482 9.92696 10.5134 10.2191L14.8145 13.66L16.1816 12.2929C16.5721 11.9024 17.2053 11.9024 17.5958 12.2929L19.8887 14.5857V5ZM5.88867 19H19.8887V17.4142L16.8887 14.4142L15.5958 15.7071C15.2355 16.0674 14.6619 16.0992 14.264 15.7809L9.88871 12.2806L5.88867 15.4807V19Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Image;
