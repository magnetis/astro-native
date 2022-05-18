import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartCandlestick({
  id = 'ChartCandlestickIcon',
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
        d="M8.88867 2C9.44096 2 9.88867 2.44772 9.88867 3V5H10.0887C11.0828 5 11.8887 5.80589 11.8887 6.8V13.2C11.8887 14.1941 11.0828 15 10.0887 15H9.88867V17C9.88867 17.5523 9.44096 18 8.88867 18C8.33639 18 7.88867 17.5523 7.88867 17V15H7.68867C6.69456 15 5.88867 14.1941 5.88867 13.2V6.8C5.88867 5.80589 6.69456 5 7.68867 5H7.88867V3C7.88867 2.44772 8.33639 2 8.88867 2ZM7.88867 7V13H9.88867V7H7.88867ZM16.8887 6C17.441 6 17.8887 6.44772 17.8887 7V11H18.0887C19.0828 11 19.8887 11.8059 19.8887 12.8V16.2C19.8887 17.1941 19.0828 18 18.0887 18H17.8887V20C17.8887 20.5523 17.441 21 16.8887 21C16.3364 21 15.8887 20.5523 15.8887 20V18H15.6887C14.6946 18 13.8887 17.1941 13.8887 16.2V12.8C13.8887 11.8059 14.6946 11 15.6887 11H15.8887V7C15.8887 6.44772 16.3364 6 16.8887 6ZM15.8887 13V16H17.8887V13H15.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartCandlestick;
