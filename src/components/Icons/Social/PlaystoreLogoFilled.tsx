import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function PlaystoreLogoFilled({
  id = 'PlaystoreLogoFilledIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M5.45413 20.1811C5.45413 20.1811 18.9047 12.4825 19.3272 12.2048C19.7497 11.9271 19.7925 11.3578 19.3272 11.0458C18.862 10.7338 5.45413 3.06956 5.45413 3.06956C5.07946 2.85415 4.63867 3.16742 4.63867 3.64906V19.6016C4.63867 20.0832 5.07946 20.3965 5.45413 20.1811Z"
        fill="#FFCF00"
      />
      <Path
        d="M4.82684 3.1654C4.71319 3.28145 4.63867 3.45115 4.63867 3.64906V19.6016C4.63867 19.7995 4.71319 19.9685 4.82684 20.0845L13.2637 11.6251L4.82684 3.1654Z"
        fill="#00C4FF"
      />
      <Path
        d="M15.8137 9.00001L5.45413 3.06956C5.2334 2.94266 4.98984 2.99901 4.82684 3.1654L13.2637 11.6251L15.8137 9.00001Z"
        fill="#26C776"
      />
      <Path
        d="M4.82684 20.0845C4.98984 20.2509 5.2334 20.308 5.45413 20.1811L15.8137 14.25L13.2637 11.6251L4.82684 20.0845Z"
        fill="#F0304C"
      />
    </BaseIcon>
  );
}

export default PlaystoreLogoFilled;
