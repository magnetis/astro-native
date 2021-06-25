import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Alert({
  id = 'AlertIcon',
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
        d="M16.5 5C22.8513 5 28 10.1487 28 16.5C28 22.8513 22.8513 28 16.5 28C10.1487 28 5 22.8513 5 16.5C5 10.1487 10.1487 5 16.5 5ZM16.5 7.3C11.419 7.3 7.3 11.419 7.3 16.5C7.3 21.581 11.419 25.7 16.5 25.7C21.581 25.7 25.7 21.581 25.7 16.5C25.7 11.419 21.581 7.3 16.5 7.3ZM16.5 19.95C15.8649 19.95 15.35 20.4649 15.35 21.1C15.35 21.7351 15.8649 22.25 16.5 22.25C17.1351 22.25 17.65 21.7351 17.65 21.1C17.65 20.4649 17.1351 19.95 16.5 19.95ZM17.65 17.65C17.65 18.2851 17.1351 18.8 16.5 18.8C15.8649 18.8 15.35 18.2851 15.35 17.65V11.9C15.35 11.2649 15.8649 10.75 16.5 10.75C17.1351 10.75 17.65 11.2649 17.65 11.9V17.65Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Alert;
