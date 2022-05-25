import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Camera({
  id = 'CameraIcon',
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
        d="M9.18157 4.29289C9.3691 4.10536 9.62346 4 9.88867 4H15.8887C16.1539 4 16.4082 4.10536 16.5958 4.29289L18.3029 6H20.8887C21.9932 6 22.8887 6.89543 22.8887 8V18C22.8887 19.1046 21.9932 20 20.8887 20H4.88867C3.7841 20 2.88867 19.1046 2.88867 18V8C2.88867 6.89543 3.7841 6 4.88867 6H7.47446L9.18157 4.29289ZM10.3029 6L8.59578 7.70711C8.40824 7.89464 8.15389 8 7.88867 8L4.88867 8V18H20.8887V8H17.8887C17.6235 8 17.3691 7.89464 17.1816 7.70711L15.4745 6H10.3029ZM12.8887 10.5C11.7841 10.5 10.8887 11.3954 10.8887 12.5C10.8887 13.6046 11.7841 14.5 12.8887 14.5C13.9932 14.5 14.8887 13.6046 14.8887 12.5C14.8887 11.3954 13.9932 10.5 12.8887 10.5ZM8.88867 12.5C8.88867 10.2909 10.6795 8.5 12.8887 8.5C15.0978 8.5 16.8887 10.2909 16.8887 12.5C16.8887 14.7091 15.0978 16.5 12.8887 16.5C10.6795 16.5 8.88867 14.7091 8.88867 12.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Camera;
