import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Dollars({
  id = 'DollarsIcon',
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
        d="M15 6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6V18.435L20.1924 15.2426C20.5829 14.8521 21.2161 14.8521 21.6066 15.2426C21.9971 15.6332 21.9971 16.2663 21.6066 16.6569L16.6569 21.6066C16.2663 21.9971 15.6332 21.9971 15.2426 21.6066L10.2929 16.6569C9.90237 16.2663 9.90237 15.6332 10.2929 15.2426C10.6834 14.8521 11.3166 14.8521 11.7071 15.2426L15 18.5355V6ZM6 20V26H26V20C26 19.4477 26.4477 19 27 19C27.5523 19 28 19.4477 28 20V27C28 27.5523 27.5523 28 27 28H5C4.96548 28 4.93137 27.9983 4.89776 27.9948C4.3935 27.9436 4 27.5178 4 27V20C4 19.4477 4.44772 19 5 19C5.55228 19 6 19.4477 6 20Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Dollars;
