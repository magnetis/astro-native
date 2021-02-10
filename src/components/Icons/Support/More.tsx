import React from 'react';
import { Circle } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function More({
  id = 'MoreIconReferral',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Circle cx={3.25879} cy={3.5} r={2.5} stroke={fill} />
      <Circle cx={11.3794} cy={3.5} r={2.5} stroke={fill} />
      <Circle cx={19.5002} cy={3.5} r={2.5} stroke={fill} />
    </BaseIcon>
  );
}

export default More;
