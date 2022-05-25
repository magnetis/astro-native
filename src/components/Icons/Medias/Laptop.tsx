import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Laptop({
  id = 'LaptopIcon',
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
        d="M7.88867 4C6.23182 4 4.88867 5.34315 4.88867 7V15H3.88867C3.33639 15 2.88867 15.4477 2.88867 16V17C2.88867 18.6569 4.23182 20 5.88867 20H19.8887C21.5455 20 22.8887 18.6569 22.8887 17V16C22.8887 15.4477 22.441 15 21.8887 15H20.8887V7C20.8887 5.34315 19.5455 4 17.8887 4H7.88867ZM18.8887 15V7C18.8887 6.44772 18.441 6 17.8887 6H7.88867C7.33639 6 6.88867 6.44772 6.88867 7V15H18.8887ZM5.88867 17H4.88867C4.88867 17.5523 5.33639 18 5.88867 18H19.8887C20.441 18 20.8887 17.5523 20.8887 17H19.8887H5.88867Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Laptop;
