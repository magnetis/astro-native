import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DropUp({
  id = 'DropUpIcon',
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
        d="M20.2426 17.3431C20.6332 17.7337 21.2663 17.7337 21.6569 17.3431C22.0474 16.9526 22.0474 16.3195 21.6569 15.9289L16.7071 10.9792C16.3166 10.5887 15.6834 10.5887 15.2929 10.9792L10.3431 15.9289C9.95262 16.3195 9.95262 16.9526 10.3431 17.3431C10.7337 17.7337 11.3668 17.7337 11.7574 17.3431L16 13.1005L20.2426 17.3431Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DropUp;
