import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Star({
  id = 'StarIcon',
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
        d="M15.0152 7.62572L11.5 0L7.98485 7.62572L0 8.78546L5.81135 14.6579L4.39206 23L11.5 19.0027L18.607 23L17.1887 14.6579L23 8.78546L15.0152 7.62572ZM18.7912 10.1951L13.6533 9.44891L11.5 4.77753L9.34668 9.44891L4.20878 10.1951L7.95525 13.981L7.06713 19.2011L11.5001 16.7081L15.9324 19.2011L15.0449 13.9809L18.7912 10.1951Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Star;
