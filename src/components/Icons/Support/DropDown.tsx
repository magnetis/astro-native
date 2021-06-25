import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DropDown({
  id = 'DropDownIcon',
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
        d="M20.2426 15.6569C20.6332 15.2663 21.2663 15.2663 21.6569 15.6569C22.0474 16.0474 22.0474 16.6805 21.6569 17.0711L16.7071 22.0208C16.3166 22.4113 15.6834 22.4113 15.2929 22.0208L10.3431 17.0711C9.95262 16.6805 9.95262 16.0474 10.3431 15.6569C10.7337 15.2663 11.3668 15.2663 11.7574 15.6569L16 19.8995L20.2426 15.6569Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DropDown;
