import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowRight({
  id = 'ArrowRightIcon',
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
        d="M8 15.6569C8 15.1046 8.44772 14.6569 9 14.6569H20.6569L17.7071 11.7071C17.3166 11.3166 17.3166 10.6834 17.7071 10.2929C18.0976 9.90238 18.7308 9.90238 19.1213 10.2929L23.364 14.5355C23.4532 14.6248 23.522 14.7267 23.5705 14.8355C23.8301 15.0161 24 15.3166 24 15.6569C24 15.9971 23.8301 16.2976 23.5705 16.4783C23.522 16.5871 23.4532 16.689 23.364 16.7782L19.1213 21.0208C18.7308 21.4114 18.0976 21.4114 17.7071 21.0208C17.3166 20.6303 17.3166 19.9971 17.7071 19.6066L20.6569 16.6569H9C8.44772 16.6569 8 16.2092 8 15.6569Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRight;
