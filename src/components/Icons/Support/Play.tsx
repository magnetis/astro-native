import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Play({
  id = 'PlayIcon',
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
        d="M12.9723 8.23487C12.147 7.64471 11 8.2346 11 9.24915V21.7508C11 22.7654 12.147 23.3553 12.9723 22.7651L21.7133 16.5143C22.4087 16.0169 22.4087 14.9831 21.7133 14.4857L12.9723 8.23487ZM18.8442 15.5L13.4939 19.3262V11.6739L18.8442 15.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Play;
