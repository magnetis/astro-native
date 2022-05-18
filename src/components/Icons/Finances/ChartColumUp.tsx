import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartColumUp({
  id = 'ChartColumUpIcon',
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
        d="M21.8887 21C22.441 21 22.8887 20.5523 22.8887 20C22.8887 19.4477 22.441 19 21.8887 19V21ZM3.88867 19C3.33639 19 2.88867 19.4477 2.88867 20C2.88867 20.5523 3.33639 21 3.88867 21V19ZM9.88867 16C9.88867 16.5523 10.3364 17 10.8887 17C11.441 17 11.8887 16.5523 11.8887 16H9.88867ZM5.88867 16C5.88867 16.5523 6.33639 17 6.88867 17C7.44096 17 7.88867 16.5523 7.88867 16H5.88867ZM17.8887 16C17.8887 16.5523 18.3364 17 18.8887 17C19.441 17 19.8887 16.5523 19.8887 16H17.8887ZM13.8887 16C13.8887 16.5523 14.3364 17 14.8887 17C15.441 17 15.8887 16.5523 15.8887 16H13.8887ZM21.8887 19H3.88867V21H21.8887V19ZM9.88867 10V16H11.8887V10H9.88867ZM7.88867 16V10H5.88867V16H7.88867ZM8.88867 9C9.44096 9 9.88867 9.44772 9.88867 10H11.8887C11.8887 8.34315 10.5455 7 8.88867 7V9ZM8.88867 7C7.23182 7 5.88867 8.34315 5.88867 10H7.88867C7.88867 9.44772 8.33639 9 8.88867 9V7ZM17.8887 6V16H19.8887V6H17.8887ZM15.8887 16V6H13.8887V16H15.8887ZM16.8887 5C17.441 5 17.8887 5.44772 17.8887 6H19.8887C19.8887 4.34315 18.5455 3 16.8887 3V5ZM16.8887 3C15.2318 3 13.8887 4.34315 13.8887 6H15.8887C15.8887 5.44772 16.3364 5 16.8887 5V3Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartColumUp;
