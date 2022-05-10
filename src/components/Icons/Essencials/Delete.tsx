import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Delete({
  id = 'DeleteIcon',
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
        d="M7.88867 4C7.88867 2.89543 8.7841 2 9.88867 2H15.8887C16.9932 2 17.8887 2.89543 17.8887 4V6H19.8784C19.8845 5.99994 19.8907 5.99994 19.8969 6H21.8887C22.441 6 22.8887 6.44772 22.8887 7C22.8887 7.55228 22.441 8 21.8887 8H20.8198L19.9525 20.1425C19.8777 21.1891 19.0068 22 17.9576 22H7.81979C6.77051 22 5.89963 21.1891 5.82487 20.1425L4.95755 8H3.88867C3.33639 8 2.88867 7.55228 2.88867 7C2.88867 6.44772 3.33639 6 3.88867 6H5.88042C5.88662 5.99994 5.89281 5.99994 5.89899 6H7.88867V4ZM9.88867 6H15.8887V4H9.88867V6ZM6.96265 8L7.81979 20H17.9576L18.8147 8H6.96265ZM10.8887 10C11.441 10 11.8887 10.4477 11.8887 11V17C11.8887 17.5523 11.441 18 10.8887 18C10.3364 18 9.88867 17.5523 9.88867 17V11C9.88867 10.4477 10.3364 10 10.8887 10ZM14.8887 10C15.441 10 15.8887 10.4477 15.8887 11V17C15.8887 17.5523 15.441 18 14.8887 18C14.3364 18 13.8887 17.5523 13.8887 17V11C13.8887 10.4477 14.3364 10 14.8887 10Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Delete;
