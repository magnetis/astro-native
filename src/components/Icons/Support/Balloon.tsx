import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Balloon({
  id = 'BalloonIcon',
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
        d="M19.926 23.6L17.3078 26.3877C16.5517 27.1929 15.286 27.2326 14.4808 26.4764C14.4503 26.4478 14.4208 26.4182 14.3921 26.3877L11.774 23.6H4C2.34315 23.6 1 22.2569 1 20.6V9C1 7.34315 2.34315 6 4 6H27.7C29.3569 6 30.7 7.34315 30.7 9V20.6C30.7 22.2569 29.3569 23.6 27.7 23.6H19.926ZM15.85 25.0186L19.0606 21.6H27.7C28.2523 21.6 28.7 21.1523 28.7 20.6V9C28.7 8.44772 28.2523 8 27.7 8H4C3.44772 8 3 8.44772 3 9V20.6C3 21.1523 3.44772 21.6 4 21.6H12.6394L15.85 25.0186ZM11 17C11.8284 17 12.5 16.3284 12.5 15.5C12.5 14.6716 11.8284 14 11 14C10.1716 14 9.5 14.6716 9.5 15.5C9.5 16.3284 10.1716 17 11 17ZM17.5 15.5C17.5 16.3284 16.8284 17 16 17C15.1716 17 14.5 16.3284 14.5 15.5C14.5 14.6716 15.1716 14 16 14C16.8284 14 17.5 14.6716 17.5 15.5ZM22.5 15.5C22.5 16.3284 21.8284 17 21 17C20.1716 17 19.5 16.3284 19.5 15.5C19.5 14.6716 20.1716 14 21 14C21.8284 14 22.5 14.6716 22.5 15.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Balloon;
