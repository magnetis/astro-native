import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Search({
  id = 'SearchIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3097 14.5135C17.6947 12.1285 17.6947 8.26151 15.3097 5.87644C12.9246 3.49138 9.05765 3.49138 6.67259 5.87644C4.28752 8.26151 4.28752 12.1285 6.67259 14.5135C9.05765 16.8986 12.9246 16.8986 15.3097 14.5135ZM16.7239 15.9277C19.89 12.7616 19.89 7.62834 16.7239 4.46223C13.5578 1.29612 8.42449 1.29612 5.25837 4.46223C2.09226 7.62834 2.09226 12.7616 5.25837 15.9277C8.42449 19.0939 13.5578 19.0939 16.7239 15.9277Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5187 14.722C15.9092 14.3315 16.5424 14.3315 16.9329 14.722L22.4164 20.2055C22.8069 20.596 22.8069 21.2292 22.4164 21.6197C22.0259 22.0103 21.3927 22.0103 21.0022 21.6197L15.5187 16.1362C15.1282 15.7457 15.1282 15.1125 15.5187 14.722Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Search;
