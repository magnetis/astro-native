import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function CircleMail({
  id = 'CircleMailIcon',
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
        d="M29 16.5C29 23.4036 23.4036 29 16.5 29C9.59644 29 4 23.4036 4 16.5C4 9.59644 9.59644 4 16.5 4C23.4036 4 29 9.59644 29 16.5ZM27.1481 16.5C27.1481 10.6192 22.3808 5.85185 16.5 5.85185C10.6192 5.85185 5.85185 10.6192 5.85185 16.5C5.85185 22.3808 10.6192 27.1481 16.5 27.1481C22.3808 27.1481 27.1481 22.3808 27.1481 16.5ZM9.35714 12.9286C9.35714 11.9423 10.1566 11.1429 11.1429 11.1429H21.8571C22.8434 11.1429 23.6429 11.9423 23.6429 12.9286V13.3592C23.643 13.3692 23.643 13.3792 23.6429 13.3891V20.0714C23.6429 21.0577 22.8434 21.8571 21.8571 21.8571H11.1429C10.1566 21.8571 9.35714 21.0577 9.35714 20.0714V12.9286ZM11.6746 12.9286H21.7718L16.7232 16.0354L11.6746 12.9286ZM16.0321 17.7068C16.2472 17.8392 16.4965 17.8694 16.7232 17.8109C16.9499 17.8694 17.1992 17.8392 17.4144 17.7068L21.8571 14.9728V20.0714H11.1429V14.6981L16.0321 17.7068Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default CircleMail;
