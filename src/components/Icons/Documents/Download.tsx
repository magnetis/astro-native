import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Download({
  id = 'DownloadIcon',
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
        d="M12.8887 2C13.441 2 13.8887 2.44772 13.8887 3V13.5858L16.1816 11.2929C16.5721 10.9024 17.2053 10.9024 17.5958 11.2929C17.9863 11.6834 17.9863 12.3166 17.5958 12.7071L13.5958 16.7071C13.2053 17.0976 12.5721 17.0976 12.1816 16.7071L8.18157 12.7071C7.79104 12.3166 7.79104 11.6834 8.18157 11.2929C8.57209 10.9024 9.20525 10.9024 9.59578 11.2929L11.8887 13.5858V3C11.8887 2.44772 12.3364 2 12.8887 2ZM5.88867 17C6.44096 17 6.88867 17.4477 6.88867 18V20H18.8887V18C18.8887 17.4477 19.3364 17 19.8887 17C20.441 17 20.8887 17.4477 20.8887 18V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V18C4.88867 17.4477 5.33639 17 5.88867 17Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Download;
