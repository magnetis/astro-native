import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Filter({
  id = 'FilterIcon',
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
        d="M9.88867 5C9.33639 5 8.88867 5.44772 8.88867 6C8.88867 6.55228 9.33639 7 9.88867 7C10.441 7 10.8887 6.55228 10.8887 6C10.8887 5.44772 10.441 5 9.88867 5ZM7.05938 5C7.47121 3.83481 8.58245 3 9.88867 3C11.1949 3 12.3061 3.83481 12.718 5H19.8887C20.441 5 20.8887 5.44772 20.8887 6C20.8887 6.55228 20.441 7 19.8887 7H12.718C12.3061 8.16519 11.1949 9 9.88867 9C8.58245 9 7.47121 8.16519 7.05938 7H5.88867C5.33639 7 4.88867 6.55228 4.88867 6C4.88867 5.44772 5.33639 5 5.88867 5H7.05938ZM15.8887 11C15.3364 11 14.8887 11.4477 14.8887 12C14.8887 12.5523 15.3364 13 15.8887 13C16.441 13 16.8887 12.5523 16.8887 12C16.8887 11.4477 16.441 11 15.8887 11ZM13.0594 11C13.4712 9.83481 14.5825 9 15.8887 9C17.1949 9 18.3061 9.83481 18.718 11H19.8887C20.441 11 20.8887 11.4477 20.8887 12C20.8887 12.5523 20.441 13 19.8887 13H18.718C18.3061 14.1652 17.1949 15 15.8887 15C14.5825 15 13.4712 14.1652 13.0594 13H5.88867C5.33639 13 4.88867 12.5523 4.88867 12C4.88867 11.4477 5.33639 11 5.88867 11H13.0594ZM9.88867 17C9.33639 17 8.88867 17.4477 8.88867 18C8.88867 18.5523 9.33639 19 9.88867 19C10.441 19 10.8887 18.5523 10.8887 18C10.8887 17.4477 10.441 17 9.88867 17ZM7.05938 17C7.47121 15.8348 8.58245 15 9.88867 15C11.1949 15 12.3061 15.8348 12.718 17H19.8887C20.441 17 20.8887 17.4477 20.8887 18C20.8887 18.5523 20.441 19 19.8887 19H12.718C12.3061 20.1652 11.1949 21 9.88867 21C8.58245 21 7.47121 20.1652 7.05938 19H5.88867C5.33639 19 4.88867 18.5523 4.88867 18C4.88867 17.4477 5.33639 17 5.88867 17H7.05938Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Filter;