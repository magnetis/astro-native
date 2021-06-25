import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Photo({
  id = 'PhotoIcon',
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
        d="M19 4.08002L19 13.0801L28 13.08C26.7562 8.72672 23.3533 5.32382 19 4.08002ZM27.08 15.1676V16.04C27.08 22.1372 22.1372 27.08 16.04 27.08C9.94278 27.08 5 22.1372 5 16.04C5 9.94278 9.94278 5 16.04 5H16.9124V15.1676H27.08ZM6.74474 16.04C6.74474 21.1736 10.9064 25.3353 16.04 25.3353C20.8794 25.3353 24.8551 21.6369 25.2949 16.9124H15.1676V6.78514C10.4431 7.2249 6.74474 11.2006 6.74474 16.04Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Photo;
