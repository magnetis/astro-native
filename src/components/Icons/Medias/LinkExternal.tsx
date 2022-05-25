import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function LinkExternal({
  id = 'LinkExternalIcon',
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
        d="M14.8887 5C14.3364 5 13.8887 4.55228 13.8887 4C13.8887 3.44772 14.3364 3 14.8887 3H20.8887C21.1539 3 21.4082 3.10536 21.5958 3.29289C21.7833 3.48043 21.8887 3.73478 21.8887 4L21.8887 10C21.8887 10.5523 21.4409 11 20.8887 11C20.3364 11 19.8887 10.5523 19.8887 10L19.8887 6.41422L10.5958 15.7071C10.2053 16.0976 9.57209 16.0976 9.18157 15.7071C8.79104 15.3166 8.79104 14.6834 9.18157 14.2929L18.4745 5H14.8887ZM3.88867 7C3.88867 5.89543 4.7841 5 5.88867 5H10.8887C11.441 5 11.8887 5.44772 11.8887 6C11.8887 6.55228 11.441 7 10.8887 7H5.88867V19H17.8887V14C17.8887 13.4477 18.3364 13 18.8887 13C19.441 13 19.8887 13.4477 19.8887 14V19C19.8887 20.1046 18.9932 21 17.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default LinkExternal;
