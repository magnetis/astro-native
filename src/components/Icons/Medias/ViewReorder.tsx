import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ViewReorder({
  id = 'ViewReorderIcon',
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
        d="M9.38867 7C10.4932 7 11.3887 6.10457 11.3887 5C11.3887 3.89543 10.4932 3 9.38867 3C8.2841 3 7.38867 3.89543 7.38867 5C7.38867 6.10457 8.2841 7 9.38867 7Z"
        fill={fill}
      />
      <Path
        d="M9.38867 14C10.4932 14 11.3887 13.1046 11.3887 12C11.3887 10.8954 10.4932 10 9.38867 10C8.2841 10 7.38867 10.8954 7.38867 12C7.38867 13.1046 8.2841 14 9.38867 14Z"
        fill={fill}
      />
      <Path
        d="M11.3887 19C11.3887 20.1046 10.4932 21 9.38867 21C8.2841 21 7.38867 20.1046 7.38867 19C7.38867 17.8954 8.2841 17 9.38867 17C10.4932 17 11.3887 17.8954 11.3887 19Z"
        fill={fill}
      />
      <Path
        d="M16.3887 7C17.4932 7 18.3887 6.10457 18.3887 5C18.3887 3.89543 17.4932 3 16.3887 3C15.2841 3 14.3887 3.89543 14.3887 5C14.3887 6.10457 15.2841 7 16.3887 7Z"
        fill={fill}
      />
      <Path
        d="M18.3887 12C18.3887 13.1046 17.4932 14 16.3887 14C15.2841 14 14.3887 13.1046 14.3887 12C14.3887 10.8954 15.2841 10 16.3887 10C17.4932 10 18.3887 10.8954 18.3887 12Z"
        fill={fill}
      />
      <Path
        d="M16.3887 21C17.4932 21 18.3887 20.1046 18.3887 19C18.3887 17.8954 17.4932 17 16.3887 17C15.2841 17 14.3887 17.8954 14.3887 19C14.3887 20.1046 15.2841 21 16.3887 21Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ViewReorder;
