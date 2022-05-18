import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartPyramid({
  id = 'ChartPyramidIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8883 5.23608L5.5063 20H20.2702L12.8883 5.23608ZM11.8597 2.82113C12.2835 1.97351 13.4931 1.97354 13.9169 2.82113L22.6742 20.3357C23.0565 21.1004 22.5004 22 21.6456 22H4.13098C3.27608 22 2.72007 21.1003 3.10238 20.3357L11.8597 2.82113Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.88827 17C4.88827 16.4477 5.33599 16 5.88827 16H19.8883C20.4406 16 20.8883 16.4477 20.8883 17C20.8883 17.5523 20.4406 18 19.8883 18H5.88827C5.33599 18 4.88827 17.5523 4.88827 17Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.88827 13C6.88827 12.4477 7.33599 12 7.88827 12H17.8883C18.4406 12 18.8883 12.4477 18.8883 13C18.8883 13.5523 18.4406 14 17.8883 14H7.88827C7.33599 14 6.88827 13.5523 6.88827 13Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.88827 9.00002C8.88827 8.44773 9.33599 8.00002 9.88827 8.00002H15.8883C16.4406 8.00002 16.8883 8.44773 16.8883 9.00002C16.8883 9.5523 16.4406 10 15.8883 10H9.88827C9.33599 10 8.88827 9.5523 8.88827 9.00002Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartPyramid;
