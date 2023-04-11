import React from 'react';
import { Path, Rect } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Journal({
  id = 'JournalIcon',
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
        d="M17.972 17.4587C17.7204 17.4587 17.522 17.388 17.522 16.1368V5.36089M17.522 5.36089V3.85039C17.522 3.38073 17.1413 3 16.6716 3H3.87383C3.40417 3 3.02344 3.38073 3.02344 3.85039V18.6391C3.02344 20.8784 3.02344 21 4.82344 21C5.90344 21 14.684 21 19.034 21C21.0234 21 21.0234 21 21.0234 18.6391C21.0234 16.8696 21.0234 10.56 21.0234 6.21117C21.0234 5.74151 20.6427 5.36089 20.173 5.36089H17.522Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12 8L13.8898 8" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 12L13.8898 12" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M6 16L14 16" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Rect
        x="6"
        y="12"
        width="4"
        height="3"
        transform="rotate(-90 6 12)"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default Journal;
