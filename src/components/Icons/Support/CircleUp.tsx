import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleUp({
  id = 'CircleUpIcon',
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
        d="M16.5 4C23.4036 4 29 9.59644 29 16.5C29 23.4036 23.4036 29 16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4ZM16.5 6C10.701 6 6 10.701 6 16.5C6 22.299 10.701 27 16.5 27C22.299 27 27 22.299 27 16.5C27 10.701 22.299 6 16.5 6ZM9.42893 19.2071C9.81946 19.5976 10.4526 19.5976 10.8431 19.2071L16.5 13.5503L22.1569 19.2071C22.5474 19.5976 23.1805 19.5976 23.5711 19.2071C23.9616 18.8166 23.9616 18.1834 23.5711 17.7929L17.2071 11.4289C16.8166 11.0384 16.1834 11.0384 15.7929 11.4289L9.42893 17.7929C9.03841 18.1834 9.03841 18.8166 9.42893 19.2071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleUp;
