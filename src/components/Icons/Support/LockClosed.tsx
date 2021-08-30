import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function LockClosed({
  id = 'LockClosedIcon',
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
        d="M16 4C11.5 4 10 6.691 10 10V13H9.25C8.01 13 7 14.009 7 15.25V25.75C7 26.991 8.01 28 9.25 28H22.75C23.99 28 25 26.991 25 25.75V15.25C25 14.009 23.99 13 22.75 13H22V10C22 6.691 20.5 4 16 4V6C18.481 6 20 7.519 20 10V13H12V10C12 7.519 13.519 6 16 6V4ZM8.913 15.75C8.913 15.336 9.25 15 9.663 15H22.5C22.913 15 23.163 15.336 23.163 15.75V25C23.163 25.75 23 26 22.163 26H10C10 26 8.913 26 8.913 25V15.75Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default LockClosed;
