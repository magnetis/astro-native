import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Car({
  id = 'CarIcon',
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
        d="M6.182 17.055v4.422h19.636v-4.422H6.182zM5.09 14.844c-.603 0-1.091.495-1.091 1.105v6.633c0 .61.488 1.106 1.09 1.106h21.82c.602 0 1.09-.495 1.09-1.106V15.95c0-.61-.488-1.105-1.09-1.105H5.09z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.37 23.733l-.004 1.048 1.097.004.004-1.048-1.097-.004zm-1.083-2.215a1.098 1.098 0 00-1.095 1.101l-.012 3.259a1.098 1.098 0 001.087 1.11l3.279.012a1.098 1.098 0 001.095-1.101l.012-3.259a1.098 1.098 0 00-1.087-1.11l-3.279-.012zM22.551 23.733l-.003 1.048 1.097.004.003-1.048-1.097-.004zm-1.082-2.215a1.098 1.098 0 00-1.095 1.101l-.012 3.259a1.098 1.098 0 001.086 1.11l3.28.012a1.098 1.098 0 001.094-1.101l.012-3.259a1.098 1.098 0 00-1.086-1.11l-3.28-.012zM22.753 8.211H9.247l-.654 6.633h14.814l-.654-6.633zM9.247 6c-1.12 0-2.06.86-2.17 1.991l-.655 6.633c-.129 1.301.88 2.43 2.17 2.43h14.815c1.291 0 2.3-1.129 2.171-2.43l-.654-6.633A2.193 2.193 0 0022.753 6H9.247zM10.546 20.371c.602 0 1.09-.495 1.09-1.105s-.488-1.106-1.09-1.106c-.603 0-1.091.495-1.091 1.106 0 .61.488 1.105 1.09 1.105zM21.454 20.371c.603 0 1.091-.495 1.091-1.105s-.488-1.106-1.09-1.106c-.603 0-1.091.495-1.091 1.106 0 .61.488 1.105 1.09 1.105z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Car;
