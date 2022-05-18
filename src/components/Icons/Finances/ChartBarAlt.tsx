import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartBarAlt({
  id = 'ChartBarAltIcon',
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
        d="M12.8887 4C13.441 4 13.8887 4.44772 13.8887 5V19C13.8887 19.5523 13.441 20 12.8887 20C12.3364 20 11.8887 19.5523 11.8887 19V5C11.8887 4.44772 12.3364 4 12.8887 4ZM17.8887 8C18.441 8 18.8887 8.44772 18.8887 9V19C18.8887 19.5523 18.441 20 17.8887 20C17.3364 20 16.8887 19.5523 16.8887 19V9C16.8887 8.44772 17.3364 8 17.8887 8ZM7.88867 12C8.44096 12 8.88867 12.4477 8.88867 13V19C8.88867 19.5523 8.44096 20 7.88867 20C7.33639 20 6.88867 19.5523 6.88867 19V13C6.88867 12.4477 7.33639 12 7.88867 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartBarAlt;
