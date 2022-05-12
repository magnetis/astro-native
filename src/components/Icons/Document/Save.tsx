import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Save({
  id = 'SaveIcon',
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
        d="M3.88867 5C3.88867 3.89543 4.7841 3 5.88867 3H9.88867H15.8887H17.4745C18.0049 3 18.5136 3.21071 18.8887 3.58579L21.5958 6.29289C21.7833 6.48043 21.8887 6.73478 21.8887 7V19C21.8887 20.1046 20.9932 21 19.8887 21H15.8887H9.88867H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V5ZM9.88867 19H15.8887V13H9.88867V19ZM17.8887 19H19.8887V7.41421L17.8887 5.41421V7C17.8887 8.10457 16.9932 9 15.8887 9H9.88867C8.7841 9 7.88867 8.10457 7.88867 7V5H5.88867V19H7.88867V13C7.88867 11.8954 8.7841 11 9.88867 11H15.8887C16.9932 11 17.8887 11.8954 17.8887 13V19ZM9.88867 5V7H15.8887V5H9.88867Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Save;
