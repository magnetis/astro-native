import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaRepeat({
  id = 'MediaRepeatIcon',
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
        d="M21.8128 5.61722C21.764 5.49927 21.6917 5.38877 21.5958 5.29289L18.5958 2.29289C18.2053 1.90237 17.5721 1.90237 17.1816 2.29289C16.791 2.68342 16.791 3.31658 17.1816 3.70711L18.4745 5L8.88867 5C6.12725 5 3.88867 7.23858 3.88867 10V12C3.88867 12.5523 4.33639 13 4.88867 13C5.44096 13 5.88867 12.5523 5.88867 12L5.88867 10C5.88867 8.34315 7.23182 7 8.88867 7L18.4745 7L17.1816 8.29289C16.791 8.68342 16.791 9.31658 17.1816 9.70711C17.5721 10.0976 18.2053 10.0976 18.5958 9.70711L21.595 6.70787C21.5974 6.70544 21.5999 6.703 21.6023 6.70055C21.7932 6.50613 21.8887 6.25307 21.8887 6"
        fill={fill}
      />
      <Path d="M21.8128 5.61722C21.8613 5.73425 21.8883 5.8625 21.8887 5.997L21.8128 5.61722Z" fill={fill} />
      <Path
        d="M3.96455 17.6172C3.91566 17.7351 3.88867 17.8644 3.88867 18C3.88867 18.2761 4.0006 18.5261 4.18157 18.7071L7.18157 21.7071C7.57209 22.0976 8.20525 22.0976 8.59578 21.7071C8.9863 21.3166 8.9863 20.6834 8.59578 20.2929L7.30289 19L16.8887 19C19.6501 19 21.8887 16.7614 21.8887 14V12C21.8887 11.4477 21.441 11 20.8887 11C20.3364 11 19.8887 11.4477 19.8887 12V14C19.8887 15.6569 18.5455 17 16.8887 17L7.30289 17L8.59578 15.7071C8.9863 15.3166 8.9863 14.6834 8.59578 14.2929C8.20526 13.9024 7.57209 13.9024 7.18157 14.2929L4.18183 17.2926"
        fill={fill}
      />
      <Path d="M3.96455 17.6172C4.01299 17.5001 4.08462 17.3904 4.17945 17.295L3.96455 17.6172Z" fill={fill} />
    </BaseIcon>
  );
}

export default MediaRepeat;
