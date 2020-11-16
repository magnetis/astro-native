import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleMore({
  id = 'CircleMoreIcon',
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
        d="M26.5165 26.5165C31.3981 21.635 31.3981 13.7204 26.5165 8.83884C21.635 3.95729 13.7204 3.95729 8.83884 8.83884C3.95729 13.7204 3.95729 21.635 8.83884 26.5165C13.7204 31.3981 21.635 31.3981 26.5165 26.5165ZM10.2531 10.2531C14.3536 6.15255 21.0018 6.15255 25.1023 10.2531C29.2028 14.3536 29.2028 21.0018 25.1023 25.1023C21.0018 29.2028 14.3536 29.2028 10.2531 25.1023C6.15255 21.0018 6.15255 14.3536 10.2531 10.2531ZM12.0879 18.4469C11.663 18.4469 11.3186 18.1025 11.3186 17.6777C11.3186 17.2528 11.663 16.9084 12.0879 16.9084H17.2308L17.2308 11.6944C17.2308 11.2696 17.5752 10.9252 18 10.9252C18.4248 10.9252 18.7692 11.2696 18.7692 11.6944L18.7692 16.9084H24.0543C24.4791 16.9084 24.8235 17.2528 24.8235 17.6777C24.8235 18.1025 24.4791 18.4469 24.0543 18.4469H18.7692L18.7692 23.6608C18.7692 24.0857 18.4248 24.4301 18 24.4301C17.5752 24.4301 17.2308 24.0857 17.2308 23.6608V18.4469H12.0879Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleMore;
