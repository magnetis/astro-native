import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleLess({
  id = 'CircleLessIcon',
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
        d="M16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4C23.4036 4 29 9.59644 29 16.5C29 23.4036 23.4036 29 16.5 29ZM16.5 27.2143C22.4173 27.2143 27.2143 22.4173 27.2143 16.5C27.2143 10.5827 22.4173 5.78571 16.5 5.78571C10.5827 5.78571 5.78571 10.5827 5.78571 16.5C5.78571 22.4173 10.5827 27.2143 16.5 27.2143ZM10.25 16.5C10.25 16.0069 10.6497 15.6071 11.1429 15.6071H21.8571C22.3503 15.6071 22.75 16.0069 22.75 16.5C22.75 16.9931 22.3503 17.3929 21.8571 17.3929H11.1429C10.6497 17.3929 10.25 16.9931 10.25 16.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleLess;
