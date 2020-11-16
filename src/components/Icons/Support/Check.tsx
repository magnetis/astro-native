import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Check({
  id = 'CheckIcon',
  color = colors.space100,
  viewBox = '0 0 25 25',
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
        d="M19.5377 14.6115C19.9066 14.2001 20.5391 14.1657 20.9505 14.5346C21.3619 14.9035 21.3963 15.536 21.0274 15.9474L14.3263 23.4196C13.9431 23.8469 13.2798 23.8649 12.874 23.4591L8.91491 19.5C8.5242 19.1093 8.52419 18.4758 8.91491 18.0851C9.30562 17.6944 9.9391 17.6944 10.3298 18.0851L13.5419 21.2972L19.5377 14.6115Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Check;
