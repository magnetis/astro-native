import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CloseCircle({
  id = 'CloseCircleIcon',
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
        d="M29 16.5C29 23.4036 23.4036 29 16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4C23.4036 4 29 9.59644 29 16.5ZM27 16.5C27 10.701 22.299 6 16.5 6C10.701 6 6 10.701 6 16.5C6 22.299 10.701 27 16.5 27C22.299 27 27 22.299 27 16.5ZM10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L16.5 15.0858L21.2929 10.2929C21.6834 9.90237 22.3166 9.90237 22.7071 10.2929C23.0976 10.6834 23.0976 11.3166 22.7071 11.7071L17.9142 16.5L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L16.5 17.9142L11.7071 22.7071C11.3166 23.0976 10.6834 23.0976 10.2929 22.7071C9.90237 22.3166 9.90237 21.6834 10.2929 21.2929L15.0858 16.5L10.2929 11.7071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CloseCircle;
