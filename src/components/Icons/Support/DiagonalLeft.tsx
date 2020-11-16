import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DiagonalLeft({
  id = 'DiagonalLeftIcon',
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
        d="M20.2927 10.2929L12.051 18.5346V14.3425C12.051 13.7902 11.6033 13.3425 11.051 13.3425C10.4987 13.3425 10.051 13.7902 10.051 14.3425V20.6327C10.0179 20.7321 10 20.8383 10 20.9488C10 21.5011 10.4477 21.9488 11 21.9488L11.051 21.9488L18 21.9488C18.5523 21.9488 19 21.5011 19 20.9488C19 20.3965 18.5523 19.9488 18 19.9488H13.4652L21.7069 11.7071C22.0974 11.3166 22.0974 10.6834 21.7069 10.2929C21.3164 9.90237 20.6832 9.90237 20.2927 10.2929ZM11.6368 19.9488L12.051 18.5346L11.6329 19.9488H11.6368Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DiagonalLeft;
