import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MessageAlt({
  id = 'MessageAltIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H20.8887C21.9932 4 22.8887 4.89543 22.8887 6V17C22.8887 18.1046 21.9932 19 20.8887 19H16.3029L13.5958 21.7071C13.2053 22.0976 12.5721 22.0976 12.1816 21.7071L9.47446 19H4.88867C3.7841 19 2.88867 18.1046 2.88867 17V6ZM20.8887 6H4.88867V17H9.88867C10.1539 17 10.4082 17.1054 10.5958 17.2929L12.8887 19.5858L15.1816 17.2929C15.3691 17.1054 15.6235 17 15.8887 17H20.8887V6Z"
        fill={fill}
      />
      <Path
        d="M14.3887 11.5C14.3887 12.3284 13.7171 13 12.8887 13C12.0602 13 11.3887 12.3284 11.3887 11.5C11.3887 10.6716 12.0602 10 12.8887 10C13.7171 10 14.3887 10.6716 14.3887 11.5Z"
        fill={fill}
      />
      <Path
        d="M18.3887 11.5C18.3887 12.3284 17.7171 13 16.8887 13C16.0602 13 15.3887 12.3284 15.3887 11.5C15.3887 10.6716 16.0602 10 16.8887 10C17.7171 10 18.3887 10.6716 18.3887 11.5Z"
        fill={fill}
      />
      <Path
        d="M10.3887 11.5C10.3887 12.3284 9.7171 13 8.88867 13C8.06024 13 7.38867 12.3284 7.38867 11.5C7.38867 10.6716 8.06024 10 8.88867 10C9.7171 10 10.3887 10.6716 10.3887 11.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MessageAlt;
