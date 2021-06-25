import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Down({
  id = 'DownIcon',
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
        d="M6.1005 6.10051C6.49103 5.70998 7.12419 5.70998 7.51472 6.10051C7.90524 6.49103 7.90524 7.12419 7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853C12.201 29.1716 19.799 29.1716 24.4853 24.4853C29.1716 19.799 29.1716 12.201 24.4853 7.51472C24.0948 7.12419 24.0948 6.49103 24.4853 6.10051C24.8758 5.70998 25.509 5.70998 25.8995 6.10051C31.3668 11.5678 31.3668 20.4322 25.8995 25.8995C20.4322 31.3668 11.5678 31.3668 6.1005 25.8995C0.633165 20.4322 0.633165 11.5678 6.1005 6.10051ZM15 19.5355L11.7071 16.2426C11.3166 15.8521 10.6834 15.8521 10.2929 16.2426C9.90237 16.6332 9.90237 17.2663 10.2929 17.6569L15.2426 22.6066C15.6332 22.9971 16.2663 22.9971 16.6569 22.6066L21.6066 17.6569C21.9971 17.2663 21.9971 16.6332 21.6066 16.2426C21.2161 15.8521 20.5829 15.8521 20.1924 16.2426L17 19.435V8C17 7.44771 16.5523 7 16 7C15.4477 7 15 7.44771 15 8V19.5355Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Down;
