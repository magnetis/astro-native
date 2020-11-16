import React, { ReactNode } from 'react';
import Svg, { Defs } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import type { IconProps } from './types';
import GradientConfig from './GradientConfig';
import { cloneChildrenWithProps } from './utils';

interface BaseIconProps extends IconProps {
  children: ReactNode;
  viewBox?: string;
  id: string;
}

function BaseIcon({
  color = colors.uranus500,
  viewBox = '0 0 32 32',
  height = 32,
  width = 32,
  children,
  gradient,
  id,
  ...props
}: BaseIconProps) {
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      {gradient && (
        <Defs>
          <GradientConfig gradient={gradient} id={id} />
        </Defs>
      )}
      {cloneChildrenWithProps(children, { color })}
    </Svg>
  );
}

export default BaseIcon;
