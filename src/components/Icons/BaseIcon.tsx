import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import Svg, { Defs } from 'react-native-svg';

import type { IconProps } from './types';
import GradientConfig from './GradientConfig';

import type { HitSlop } from '../types';
import { getFixedHitSlop } from '@components/utils';

interface BaseIconProps extends IconProps {
  children: ReactNode;
  viewBox?: string;
  id: string;
}

function BaseIcon({
  viewBox = '0 0 32 32',
  height = 32,
  width = 32,
  children,
  gradient,
  id,
  size,
  onPress,
  hitSlop,
  testID,
  ...props
}: BaseIconProps) {
  const sizeProps = {
    width: Number(size ?? width),
    height: Number(size ?? height),
  };

  if (onPress) {
    const newHitSlop: HitSlop = typeof hitSlop === 'undefined' ? getFixedHitSlop(sizeProps) : hitSlop;

    return (
      <Pressable accessibilityRole="button" onPress={onPress} hitSlop={newHitSlop} testID={testID}>
        <Svg {...sizeProps} viewBox={viewBox} {...props}>
          {gradient && (
            <Defs>
              <GradientConfig gradient={gradient} id={id} />
            </Defs>
          )}
          {children}
        </Svg>
      </Pressable>
    );
  }
  return (
    <Svg {...sizeProps} viewBox={viewBox} {...props} testID={testID}>
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
