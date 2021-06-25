import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DropLeft({
  id = 'DropLeftIcon',
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
        d="M17.3431 11.7574C17.7337 11.3668 17.7337 10.7337 17.3431 10.3431C16.9526 9.95262 16.3195 9.95262 15.9289 10.3431L10.9792 15.2929C10.5887 15.6834 10.5887 16.3166 10.9792 16.7071L15.9289 21.6569C16.3195 22.0474 16.9526 22.0474 17.3431 21.6569C17.7337 21.2663 17.7337 20.6332 17.3431 20.2426L13.1005 16L17.3431 11.7574Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DropLeft;
