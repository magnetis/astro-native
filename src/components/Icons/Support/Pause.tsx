import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Pause({
  id = 'PauseIcon',
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
        d="M12.5 21.8333C12.5 22.2015 12.9477 22.5 13.5 22.5C14.0523 22.5 14.5 22.2015 14.5 21.8333L14.5 11.1667C14.5 10.7985 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.7985 12.5 11.1667L12.5 21.8333Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 21.8333C18.5 22.2015 18.9477 22.5 19.5 22.5C20.0523 22.5 20.5 22.2015 20.5 21.8333L20.5 11.1667C20.5 10.7985 20.0523 10.5 19.5 10.5C18.9477 10.5 18.5 10.7985 18.5 11.1667L18.5 21.8333Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Pause;
