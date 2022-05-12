import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function FolderDownload({
  id = 'FolderDownloadIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H9.88867C10.1539 4 10.4082 4.10536 10.5958 4.29289L12.3029 6H20.8887C21.9932 6 22.8887 6.89543 22.8887 8V18C22.8887 19.1046 21.9932 20 20.8887 20H4.88867C3.7841 20 2.88867 19.1046 2.88867 18V6ZM9.47446 6L4.88867 6V18H20.8887V8H11.8887C11.6235 8 11.3691 7.89464 11.1816 7.70711L9.47446 6ZM12.8887 9.5C13.441 9.5 13.8887 9.94772 13.8887 10.5V13.0858L14.1816 12.7929C14.5721 12.4024 15.2053 12.4024 15.5958 12.7929C15.9863 13.1834 15.9863 13.8166 15.5958 14.2071L13.5958 16.2071C13.2053 16.5976 12.5721 16.5976 12.1816 16.2071L10.1816 14.2071C9.79104 13.8166 9.79104 13.1834 10.1816 12.7929C10.5721 12.4024 11.2053 12.4024 11.5958 12.7929L11.8887 13.0858V10.5C11.8887 9.94772 12.3364 9.5 12.8887 9.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default FolderDownload;
