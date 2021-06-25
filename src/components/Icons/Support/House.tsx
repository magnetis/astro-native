import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function House({
  id = 'HouseIcon',
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
        d="M16.0449 7.29972L8 13.9788V26H12.0449V18.8965C12.0449 18.3442 12.4927 17.8965 13.0449 17.8965H19.0449C19.5972 17.8965 20.0449 18.3442 20.0449 18.8965V26H24V13.9042L16.0449 7.29972ZM4.6388 16.7694L6 15.6393V26C6 27.1046 6.89543 28 8 28H24C25.1046 28 26 27.1046 26 26V15.5647L27.2815 16.6286C27.7064 16.9813 28.3368 16.9229 28.6896 16.4979C29.0424 16.073 28.9839 15.4425 28.559 15.0898L16.6837 5.2306C16.3134 4.92313 15.7765 4.92313 15.4062 5.2306L3.36125 15.2306C2.93633 15.5834 2.87785 16.2138 3.23063 16.6388C3.58341 17.0637 4.21387 17.1222 4.6388 16.7694ZM14.0449 19.8965V25.8965H18.0449V19.8965H14.0449Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default House;
