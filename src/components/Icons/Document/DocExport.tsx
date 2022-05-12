import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DocExport({
  id = 'DocExportIcon',
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
        d="M12.1816 2.29289C12.5721 1.90237 13.2053 1.90237 13.5958 2.29289L17.5958 6.29289C17.9863 6.68342 17.9863 7.31658 17.5958 7.70711C17.2053 8.09763 16.5721 8.09763 16.1816 7.70711L13.8887 5.41421V16C13.8887 16.5523 13.441 17 12.8887 17C12.3364 17 11.8887 16.5523 11.8887 16V5.41421L9.59578 7.70711C9.20525 8.09763 8.57209 8.09763 8.18157 7.70711C7.79104 7.31658 7.79104 6.68342 8.18157 6.29289L12.1816 2.29289ZM5.88867 17C6.44096 17 6.88867 17.4477 6.88867 18V20H18.8887V18C18.8887 17.4477 19.3364 17 19.8887 17C20.441 17 20.8887 17.4477 20.8887 18V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V18C4.88867 17.4477 5.33639 17 5.88867 17Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DocExport;
