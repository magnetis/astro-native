import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

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
        d="M16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29ZM16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27ZM13 11C13 10.1864 13.9199 9.71331 14.5817 10.1866L21.5916 15.1995C22.1493 15.5983 22.1493 16.4275 21.5916 16.8263L14.5817 21.8392C13.9199 22.3125 13 21.8394 13 21.0258V11ZM15 19.0813L19.2907 16.0129L15 12.9445V19.0813Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Play;
