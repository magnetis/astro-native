import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DropRight({
  id = 'DropRightIcon',
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
        d="M12.6569 11.7574C12.2663 11.3668 12.2663 10.7337 12.6569 10.3431C13.0474 9.95262 13.6805 9.95262 14.0711 10.3431L19.0208 15.2929C19.4113 15.6834 19.4113 16.3166 19.0208 16.7071L14.0711 21.6569C13.6805 22.0474 13.0474 22.0474 12.6569 21.6569C12.2663 21.2663 12.2663 20.6332 12.6569 20.2426L16.8995 16L12.6569 11.7574Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DropRight;
