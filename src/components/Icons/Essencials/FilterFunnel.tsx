import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function FilterFunnel({
  id = 'FilterFunnelIcon',
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
        d="M18.7145 5H7.06289C6.20854 5 5.74763 6.00212 6.30364 6.65079L10.6479 11.7191C10.8033 11.9004 10.8887 12.1312 10.8887 12.3699V17.382C10.8887 17.7607 11.1027 18.107 11.4415 18.2764L13.4415 19.2764C14.1064 19.6088 14.8887 19.1253 14.8887 18.382V12.3699C14.8887 12.1312 14.9741 11.9004 15.1294 11.7191L19.4737 6.65079C20.0297 6.00212 19.5688 5 18.7145 5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default FilterFunnel;
