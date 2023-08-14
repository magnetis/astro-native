import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';
import Svg, { Defs } from 'react-native-svg';

import type { IconProps } from './types';
import GradientConfig from './GradientConfig';

import type { HitSlop } from '../types';
import { getFixedHitSlop } from '@components/utils';
import { getSize, getViewBox } from './utils';

interface BaseIconProps extends IconProps {
  children: ReactNode;
  viewBox?: string;
  id: string;
}

function BaseIcon({
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
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
        <Svg {...sizeProps} viewBox={viewBox} fill="none" {...props}>
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
    <Svg {...sizeProps} viewBox={viewBox} fill="none" {...props} testID={testID}>
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
