import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoBanCircle({
  id = 'InfoBanCircleIcon',
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
        d="M6.56881 7.09436C5.51575 8.44904 4.88867 10.1513 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C14.7374 20 16.4396 19.3729 17.7943 18.3199L6.56881 7.09436ZM7.98303 5.68014L19.2085 16.9056C20.2616 15.551 20.8887 13.8487 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4C11.04 4 9.33771 4.62708 7.98303 5.68014ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoBanCircle;
