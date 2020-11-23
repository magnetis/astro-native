import React, { ReactNode } from 'react';
import Svg, { Defs } from 'react-native-svg';

import type { IconProps } from './types';
import GradientConfig from './GradientConfig';

interface BaseIconProps extends IconProps {
  children: ReactNode;
  viewBox?: string;
  id: string;
}

function BaseIcon({ viewBox = '0 0 32 32', height = 32, width = 32, children, gradient, id, ...props }: BaseIconProps) {
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      {gradient && (
        <Defs>
          <GradientConfig gradient={gradient} id={id} />
        </Defs>
      )}
      {children}
    </Svg>
  );
}

export default BaseIcon;
