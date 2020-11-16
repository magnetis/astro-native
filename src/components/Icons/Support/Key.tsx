import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Key({
  id = 'KeyIcon',
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
        d="M14.9093 15.5C14.4391 12.9399 12.1961 11 9.5 11C6.46243 11 4 13.4624 4 16.5C4 19.5376 6.46243 22 9.5 22C12.1961 22 14.4391 20.0601 14.9093 17.5H23.5H26.5H28.5C29.0523 17.5 29.5 17.0523 29.5 16.5C29.5 15.9477 29.0523 15.5 28.5 15.5H27.5V12.5C27.5 11.9477 27.0523 11.5 26.5 11.5C25.9477 11.5 25.5 11.9477 25.5 12.5V15.5H24.5V14.5C24.5 13.9477 24.0523 13.5 23.5 13.5C22.9477 13.5 22.5 13.9477 22.5 14.5V15.5H14.9093ZM9.5 13C7.567 13 6 14.567 6 16.5C6 18.433 7.567 20 9.5 20C11.433 20 13 18.433 13 16.5C13 14.567 11.433 13 9.5 13Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Key;
