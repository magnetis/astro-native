import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowDown({
  id = 'ArrowDownIcon',
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
        d="M15.6569 8C16.2091 8 16.6569 8.44772 16.6569 9V20.6569L19.6066 17.7071C19.9971 17.3166 20.6303 17.3166 21.0208 17.7071C21.4113 18.0976 21.4113 18.7308 21.0208 19.1213L16.7782 23.364C16.6889 23.4532 16.587 23.522 16.4783 23.5705C16.2976 23.8301 15.9971 24 15.6569 24C15.3166 24 15.0161 23.8301 14.8354 23.5705C14.7267 23.522 14.6248 23.4532 14.5355 23.364L10.2929 19.1213C9.90237 18.7308 9.90237 18.0976 10.2929 17.7071C10.6834 17.3166 11.3166 17.3166 11.7071 17.7071L14.6569 20.6569V9C14.6569 8.44772 15.1046 8 15.6569 8Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowDown;
