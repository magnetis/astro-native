import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DocumentAdd({
  id = 'DocumentAddIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H14.8887C15.1539 2 15.4082 2.10536 15.5958 2.29289L20.5958 7.29289C20.7833 7.48043 20.8887 7.73478 20.8887 8V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V4ZM18.4745 8L14.8887 4.41421V8H18.4745ZM12.8887 4L6.88867 4V20H18.8887V10H13.8887C13.3364 10 12.8887 9.55228 12.8887 9V4ZM12.8887 12C13.441 12 13.8887 12.4477 13.8887 13V14H14.8887C15.441 14 15.8887 14.4477 15.8887 15C15.8887 15.5523 15.441 16 14.8887 16H13.8887V17C13.8887 17.5523 13.441 18 12.8887 18C12.3364 18 11.8887 17.5523 11.8887 17V16H10.8887C10.3364 16 9.88867 15.5523 9.88867 15C9.88867 14.4477 10.3364 14 10.8887 14H11.8887V13C11.8887 12.4477 12.3364 12 12.8887 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DocumentAdd;
