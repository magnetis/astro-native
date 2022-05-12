import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function FolderAdd({
  id = 'FolderAddIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H9.88867C10.1539 4 10.4082 4.10536 10.5958 4.29289L12.3029 6H20.8887C21.9932 6 22.8887 6.89543 22.8887 8V18C22.8887 19.1046 21.9932 20 20.8887 20H4.88867C3.7841 20 2.88867 19.1046 2.88867 18V6ZM9.47446 6L4.88867 6V18H20.8887V8H11.8887C11.6235 8 11.3691 7.89464 11.1816 7.70711L9.47446 6ZM12.8887 10C13.441 10 13.8887 10.4477 13.8887 11V12H14.8887C15.441 12 15.8887 12.4477 15.8887 13C15.8887 13.5523 15.441 14 14.8887 14H13.8887V15C13.8887 15.5523 13.441 16 12.8887 16C12.3364 16 11.8887 15.5523 11.8887 15V14H10.8887C10.3364 14 9.88867 13.5523 9.88867 13C9.88867 12.4477 10.3364 12 10.8887 12H11.8887V11C11.8887 10.4477 12.3364 10 12.8887 10Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default FolderAdd;
