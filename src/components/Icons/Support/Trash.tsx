import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Trash({
  id = 'TrashIcon',
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
        d="M13 7H19V6H13V7ZM21 7H24.5556H26C26.5523 7 27 7.44772 27 8C27 8.55228 26.5523 9 26 9H24.5556V25C24.5556 26.6569 23.2124 28 21.5556 28H10.4444C8.78759 28 7.44444 26.6569 7.44444 25V9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H7.44444H11V6C11 4.89543 11.8954 4 13 4H19C20.1046 4 21 4.89543 21 6V7ZM20 9H12H9.44444V25C9.44444 25.5523 9.89216 26 10.4444 26H21.5556C22.1078 26 22.5556 25.5523 22.5556 25V9H20ZM13.5 12.75C13.0858 12.75 12.75 13.0858 12.75 13.5V22.4518C12.75 22.866 13.0858 23.2018 13.5 23.2018C13.9142 23.2018 14.25 22.866 14.25 22.4518V13.5C14.25 13.0858 13.9142 12.75 13.5 12.75ZM18.5 12.75C18.0858 12.75 17.75 13.0858 17.75 13.5V22.4518C17.75 22.866 18.0858 23.2018 18.5 23.2018C18.9142 23.2018 19.25 22.866 19.25 22.4518V13.5C19.25 13.0858 18.9142 12.75 18.5 12.75Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Trash;
