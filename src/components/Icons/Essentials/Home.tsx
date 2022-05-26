import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Home({
  id = 'HomeIcon',
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
        d="M12.2243 2.25259C12.6032 1.9158 13.1742 1.9158 13.553 2.25259L22.553 10.2526C22.9658 10.6195 23.003 11.2516 22.6361 11.6644C22.2692 12.0771 21.6371 12.1143 21.2243 11.7474L20.8887 11.4491V19C20.8887 20.1046 19.9933 21 18.8887 21H6.88868C5.78411 21 4.88868 20.1046 4.88868 19V11.4491L4.55305 11.7474C4.14026 12.1143 3.50819 12.0771 3.14127 11.6644C2.77436 11.2516 2.81154 10.6195 3.22432 10.2526L12.2243 2.25259ZM6.88868 9.67129V19H9.88868V14C9.88868 13.4477 10.3364 13 10.8887 13H14.8887C15.441 13 15.8887 13.4477 15.8887 14V19H18.8887V9.67129L12.8887 4.33795L6.88868 9.67129ZM13.8887 19V15H11.8887V19H13.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Home;
