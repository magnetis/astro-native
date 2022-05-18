import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Bank({
  id = 'BankIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4552 3.14366C13.0909 2.85413 12.575 2.85413 12.2108 3.14366L3.21902 10.2902C2.88609 10.5548 2.75694 11.001 2.89707 11.4025C3.0372 11.804 3.41595 12.073 3.84122 12.073H21.8247C22.25 12.073 22.6287 11.804 22.7689 11.4025C22.909 11.001 22.7798 10.5548 22.4469 10.2902L13.4552 3.14366ZM12.833 5.20389L18.9593 10.073H6.70661L12.833 5.20389ZM12.833 8.87903C13.3853 8.87903 13.833 8.43131 13.833 7.87903C13.833 7.32674 13.3853 6.87903 12.833 6.87903C12.2807 6.87903 11.833 7.32674 11.833 7.87903C11.833 8.43131 12.2807 8.87903 12.833 8.87903ZM6.91045 21.0521L6.9209 21.0521L6.93134 21.0521H12.9105L12.9209 21.0521L12.9313 21.0521H18.9105L18.9209 21.0521L18.9313 21.0521H21.9327C22.5004 21.0521 22.9606 20.6044 22.9606 20.0521C22.9606 19.4998 22.5004 19.0521 21.9327 19.0521H19.9209V14.0521C19.9209 13.4998 19.4732 13.0521 18.9209 13.0521C18.3686 13.0521 17.9209 13.4998 17.9209 14.0521V19.0521H13.9209V14.0521C13.9209 13.4998 13.4732 13.0521 12.9209 13.0521C12.3686 13.0521 11.9209 13.4998 11.9209 14.0521V19.0521H7.9209L7.9209 14.0521C7.9209 13.4998 7.47318 13.0521 6.9209 13.0521C6.36861 13.0521 5.9209 13.4998 5.9209 14.0521L5.9209 19.0521H3.73289C3.16525 19.0521 2.70508 19.4998 2.70508 20.0521C2.70508 20.6044 3.16525 21.0521 3.73289 21.0521H6.91045Z"
        fill={fill}
        fillOpacity="0.96"
      />
    </BaseIcon>
  );
}

export default Bank;
