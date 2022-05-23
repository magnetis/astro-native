import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Heart({
  id = 'HeartIcon',
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
        d="M12.8887 4.52765C10.5328 2.41689 6.90993 2.49347 4.64603 4.75736C2.30289 7.1005 2.30289 10.8995 4.64603 13.2426L11.4745 20.0711C12.2555 20.8521 13.5218 20.8521 14.3029 20.0711L21.1313 13.2426C23.4745 10.8995 23.4745 7.1005 21.1313 4.75736C18.8674 2.49347 15.2445 2.41689 12.8887 4.52765ZM11.7171 6.17157L12.1816 6.63604C12.5721 7.02656 13.2053 7.02656 13.5958 6.63604L14.0602 6.17157C15.6223 4.60948 18.155 4.60948 19.7171 6.17157C21.2792 7.73367 21.2792 10.2663 19.7171 11.8284L12.8887 18.6569L6.06024 11.8284C4.49815 10.2663 4.49815 7.73367 6.06024 6.17157C7.62234 4.60948 10.155 4.60948 11.7171 6.17157Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Heart;
