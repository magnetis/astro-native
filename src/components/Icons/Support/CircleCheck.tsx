import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleCheck({
  id = 'CircleCheckIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4C23.4036 4 29 9.59644 29 16.5C29 23.4036 23.4036 29 16.5 29ZM16.5 27C22.299 27 27 22.299 27 16.5C27 10.701 22.299 6 16.5 6C10.701 6 6 10.701 6 16.5C6 22.299 10.701 27 16.5 27ZM22.0025 12.3377L16.0096 19.0201L12.7991 15.8096C12.4086 15.4191 11.7754 15.4191 11.3849 15.8096C10.9944 16.2001 10.9944 16.8333 11.3849 17.2238L15.342 21.1809C15.7477 21.5866 16.4106 21.5685 16.7936 21.1415L23.4914 13.6729C23.8602 13.2618 23.8258 12.6296 23.4146 12.2608C23.0034 11.8921 22.3712 11.9265 22.0025 12.3377Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleCheck;
