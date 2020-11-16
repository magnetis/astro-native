import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Sheet({
  id = 'SheetIcon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 16C30 8.26801 23.732 2 16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 15.4477 3.55228 15 3 15C2.44772 15 2 15.4477 2 16C2 23.732 8.26801 30 16 30C23.732 30 30 23.732 30 16ZM8.64685 23.3444C8.64685 23.6133 8.76306 23.855 8.94798 24.0221C9.11515 24.2087 9.35797 24.3261 9.62821 24.3261H20.9598C21.2682 24.3261 21.5409 24.1732 21.7062 23.9391C21.8804 23.7727 21.9888 23.5379 21.9886 23.278L21.9729 11.9121C21.9724 11.4078 21.5632 10.9995 21.059 11C20.5547 11.0005 20.1463 11.4097 20.1469 11.914L20.1614 22.5H10.4729V8.82609H21.087C21.5912 8.82609 22 8.4173 22 7.91304C22 7.40878 21.5912 7 21.087 7H9.55989C9.05563 7 8.64685 7.40878 8.64685 7.91304V23.3444ZM16.6694 11C17.2092 11 17.6469 11.4477 17.6469 12C17.6469 12.5523 17.2092 13 16.6694 13H13.6243C13.0845 13 12.6469 12.5523 12.6469 12C12.6469 11.4477 13.0845 11 13.6243 11H16.6694ZM17.6469 16C17.6469 15.4477 17.2092 15 16.6694 15H13.6243C13.0845 15 12.6469 15.4477 12.6469 16C12.6469 16.5523 13.0845 17 13.6243 17H16.6694C17.2092 17 17.6469 16.5523 17.6469 16Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Sheet;
