import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function CreditCard({
  id = 'CreditCardIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M22.7969 6C22.7969 4.89543 21.9014 4 20.7969 4H4.79688C3.6923 4 2.79688 4.89543 2.79688 6V18C2.79688 19.1046 3.69231 20 4.79687 20H20.7969C21.9014 20 22.7969 19.1046 22.7969 18V6ZM20.7969 8H4.79687L4.79687 6L20.7969 6V8ZM4.79687 11H20.7969V18L4.79687 18L4.79687 11Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CreditCard;
