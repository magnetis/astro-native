import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleDown({
  id = 'CircleDownIcon',
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
        d="M16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4C23.4036 4 29 9.59644 29 16.5C29 23.4036 23.4036 29 16.5 29ZM16.5 27C22.299 27 27 22.299 27 16.5C27 10.701 22.299 6 16.5 6C10.701 6 6 10.701 6 16.5C6 22.299 10.701 27 16.5 27ZM22.1569 13.7929L16.5 19.4497L10.8431 13.7929C10.4526 13.4024 9.81946 13.4024 9.42893 13.7929C9.03841 14.1834 9.03841 14.8166 9.42893 15.2071L15.7929 21.5711C16.1834 21.9616 16.8166 21.9616 17.2071 21.5711L23.5711 15.2071C23.9616 14.8166 23.9616 14.1834 23.5711 13.7929C23.1805 13.4024 22.5474 13.4024 22.1569 13.7929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleDown;
