import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoBanCircle({
  id = 'InfoBanCircleIcon',
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
        d="M12.8884 14C12.3361 14 11.8884 13.5523 11.8884 13V10C11.8884 9.44772 12.3361 9 12.8884 9C13.4406 9 13.8884 9.44772 13.8884 10V13C13.8884 13.5523 13.4406 14 12.8884 14Z"
        fill={fill}
      />
      <Path
        d="M11.3884 16.5C11.3884 15.6716 12.0599 15 12.8884 15C13.7168 15 14.3884 15.6716 14.3884 16.5C14.3884 17.3284 13.7168 18 12.8884 18C12.0599 18 11.3884 17.3284 11.3884 16.5Z"
        fill={fill}
      />
      <Path
        d="M11.1185 3.2156C11.8683 1.79093 13.9084 1.79092 14.6582 3.2156L23.0018 19.0685C23.7028 20.4003 22.737 22 21.232 22H4.54472C3.0397 22 2.07392 20.4003 2.77488 19.0685L11.1185 3.2156ZM21.232 20L12.8884 4.1471L4.54472 20L21.232 20Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoBanCircle;
