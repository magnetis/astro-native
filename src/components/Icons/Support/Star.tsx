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
        d="M19.668 12.4573L16 4.5L12.332 12.4573L4 13.6674L10.064 19.7952L8.58302 28.5L16 24.3289L23.416 28.5L21.936 19.7952L28 13.6674L19.668 12.4573ZM23.6082 15.1384L18.247 14.3597L16 9.48525L13.7531 14.3597L8.39177 15.1384L12.3011 19.0889L11.3744 24.5359L16.0001 21.9346L20.6251 24.5359L19.699 19.0888L23.6082 15.1384Z"
        fill={fill}
        fillOpacity="0.48"
      />
    </BaseIcon>
  );
}

export default Star;
