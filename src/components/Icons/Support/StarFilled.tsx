import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function StarFilled({
  id = 'StarFilledIcon',
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
        d="M11.5 0L15.0152 7.62572L23 8.78546L17.1887 14.6579L18.607 23L11.5 19.0027L4.39206 23L5.81135 14.6579L0 8.78546L7.98485 7.62572L11.5 0Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default StarFilled;
