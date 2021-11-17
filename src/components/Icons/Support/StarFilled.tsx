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
        d="M16 4L19.668 11.9573L28 13.1674L21.936 19.2952L23.416 28L16 23.8289L8.58302 28L10.064 19.2952L4 13.1674L12.332 11.9573L16 4Z"
        fill={fill}
        fillOpacity="0.48"
      />
    </BaseIcon>
  );
}

export default StarFilled;
