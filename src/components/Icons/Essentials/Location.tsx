import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Location({
  id = 'LocationIcon',
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
        d="M12.8887 2C8.48867 2 4.88867 5.6 4.88867 10C4.88867 15.4 11.8887 21.5 12.1887 21.8C12.3887 21.9 12.6887 22 12.8887 22C13.0887 22 13.3887 21.9 13.5887 21.8C13.8887 21.5 20.8887 15.4 20.8887 10C20.8887 5.6 17.2887 2 12.8887 2ZM12.8887 19.7C10.7887 17.7 6.88867 13.4 6.88867 10C6.88867 6.7 9.58867 4 12.8887 4C16.1887 4 18.8887 6.7 18.8887 10C18.8887 13.3 14.9887 17.7 12.8887 19.7ZM12.8887 6C10.6887 6 8.88867 7.8 8.88867 10C8.88867 12.2 10.6887 14 12.8887 14C15.0887 14 16.8887 12.2 16.8887 10C16.8887 7.8 15.0887 6 12.8887 6ZM12.8887 12C11.7887 12 10.8887 11.1 10.8887 10C10.8887 8.9 11.7887 8 12.8887 8C13.9887 8 14.8887 8.9 14.8887 10C14.8887 11.1 13.9887 12 12.8887 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Location;
