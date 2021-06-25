import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Magnifier({
  id = 'MagnifierIcon',
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
        d="M17.4605 18.7655C14.8998 20.6922 11.2458 20.4899 8.91453 18.1587C6.36182 15.606 6.36182 11.4672 8.91453 8.91453C11.4672 6.36182 15.606 6.36182 18.1587 8.91453C20.4899 11.2458 20.6922 14.8998 18.7655 17.4605L25.3918 24.0868C25.7522 24.4472 25.7522 25.0315 25.3918 25.3918C25.0315 25.7522 24.4472 25.7522 24.0868 25.3918L17.4605 18.7655ZM16.7445 16.7445C18.5162 14.9728 18.5162 12.1004 16.7445 10.3287C14.9728 8.55708 12.1004 8.55708 10.3287 10.3287C8.55708 12.1004 8.55708 14.9728 10.3287 16.7445C12.1004 18.5162 14.9728 18.5162 16.7445 16.7445Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Magnifier;
