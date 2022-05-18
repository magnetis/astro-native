import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ChartLineAlt({
  id = 'ChartLineAltIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5958 5.29289C22.9863 5.68342 22.9863 6.31658 22.5958 6.70711L17.3029 12C16.5218 12.781 15.2555 12.781 14.4745 12L12.8887 10.4142L8.59578 14.7071C8.20526 15.0976 7.57209 15.0976 7.18157 14.7071C6.79104 14.3166 6.79104 13.6834 7.18157 13.2929L11.4745 9C12.2555 8.21895 13.5218 8.21895 14.3029 9L15.8887 10.5858L21.1816 5.29289C21.5721 4.90237 22.2053 4.90237 22.5958 5.29289Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.88867 2C4.44096 2 4.88867 2.44772 4.88867 3V17.8C4.88867 18.3766 4.88945 18.7488 4.9126 19.0322C4.9348 19.3038 4.97247 19.4045 4.99767 19.454C5.09354 19.6422 5.24652 19.7951 5.43468 19.891C5.48413 19.9162 5.58485 19.9539 5.85651 19.9761C6.13985 19.9992 6.51212 20 7.08867 20H21.8887C22.441 20 22.8887 20.4477 22.8887 21C22.8887 21.5523 22.441 22 21.8887 22H7.05011C6.52297 22 6.06821 22 5.69365 21.9694C5.2983 21.9371 4.90508 21.8658 4.5267 21.673C3.96222 21.3854 3.50327 20.9265 3.21565 20.362C3.02286 19.9836 2.95154 19.5904 2.91924 19.195C2.88864 18.8205 2.88865 18.3657 2.88867 17.8385L2.88867 3C2.88867 2.44772 3.33639 2 3.88867 2Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartLineAlt;
