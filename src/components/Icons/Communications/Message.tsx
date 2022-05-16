import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Message({
  id = 'MessageIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H20.8887C21.9932 4 22.8887 4.89543 22.8887 6V17C22.8887 18.1046 21.9932 19 20.8887 19H16.3029L13.5958 21.7071C13.2053 22.0976 12.5721 22.0976 12.1816 21.7071L9.47446 19H4.88867C3.7841 19 2.88867 18.1046 2.88867 17V6ZM20.8887 6H4.88867V17H9.88867C10.1539 17 10.4082 17.1054 10.5958 17.2929L12.8887 19.5858L15.1816 17.2929C15.3691 17.1054 15.6235 17 15.8887 17H20.8887V6ZM6.88867 9.5C6.88867 8.94772 7.33639 8.5 7.88867 8.5H17.8887C18.441 8.5 18.8887 8.94772 18.8887 9.5C18.8887 10.0523 18.441 10.5 17.8887 10.5H7.88867C7.33639 10.5 6.88867 10.0523 6.88867 9.5ZM6.88867 13.5C6.88867 12.9477 7.33639 12.5 7.88867 12.5H13.8887C14.441 12.5 14.8887 12.9477 14.8887 13.5C14.8887 14.0523 14.441 14.5 13.8887 14.5H7.88867C7.33639 14.5 6.88867 14.0523 6.88867 13.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Message;
