import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Return({
  id = 'ReturnIcon',
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
        d="M21.8321 18.4454L22.6526 19.6762C23.0003 18.7778 23.1818 17.8179 23.1818 16.8312C23.1818 12.4037 19.5214 8.80952 15 8.80952C10.3739 8.80952 6.81818 12.2255 6.81818 16.8312C6.81818 19.2402 8.10721 21.8719 10.3794 23.0633C11.8254 23.8214 13.0384 24.1905 14.0035 24.1905C14.5056 24.1905 14.9126 24.5956 14.9126 25.0952C14.9126 25.5949 14.5056 26 14.0035 26C12.7031 26 11.2176 25.5481 9.53196 24.6642C6.59994 23.1269 5 19.8605 5 16.8312C5 11.2116 9.38386 7 15 7C20.5201 7 25 11.3988 25 16.8312C25 18.1754 24.7248 19.4818 24.2007 20.6885L25.7327 20.0695C26.1941 19.8831 26.7285 20.0846 26.9263 20.5196C27.124 20.9547 26.9103 21.4585 26.4488 21.645L23.6107 22.7917C23.5926 22.8057 23.5739 22.8191 23.5546 22.832C23.3704 22.9548 23.1602 23.0084 22.9548 22.9989C22.5859 23.0163 22.2277 22.8192 22.0737 22.4804C22.0526 22.4339 22.0362 22.3866 22.0242 22.3391L20.168 19.5547C19.8617 19.0952 19.9859 18.4744 20.4454 18.168C20.9049 17.8617 21.5257 17.9859 21.8321 18.4454Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Return;
