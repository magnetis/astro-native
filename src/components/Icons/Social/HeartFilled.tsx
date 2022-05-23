import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function HeartFilled({
  id = 'HeartFilledIcon',
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
        d="M12.8887 4.52765C10.5328 2.41689 6.90993 2.49347 4.64603 4.75736C2.30289 7.1005 2.30289 10.8995 4.64603 13.2426L11.4745 20.0711C12.2555 20.8521 13.5218 20.8521 14.3029 20.0711L21.1313 13.2426C23.4745 10.8995 23.4745 7.1005 21.1313 4.75736C18.8674 2.49347 15.2445 2.41689 12.8887 4.52765Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default HeartFilled;
