import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DocumentDownload({
  id = 'DocumentDownloadIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H14.8887C15.1539 2 15.4082 2.10536 15.5958 2.29289L20.5958 7.29289C20.7833 7.48043 20.8887 7.73478 20.8887 8V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V4ZM18.4745 8L14.8887 4.41421V8H18.4745ZM12.8887 4L6.88867 4V20H18.8887V10H13.8887C13.3364 10 12.8887 9.55228 12.8887 9V4ZM12.8887 11.5C13.441 11.5 13.8887 11.9477 13.8887 12.5V15.0858L14.1816 14.7929C14.5721 14.4024 15.2053 14.4024 15.5958 14.7929C15.9863 15.1834 15.9863 15.8166 15.5958 16.2071L13.5958 18.2071C13.2053 18.5976 12.5721 18.5976 12.1816 18.2071L10.1816 16.2071C9.79104 15.8166 9.79104 15.1834 10.1816 14.7929C10.5721 14.4024 11.2053 14.4024 11.5958 14.7929L11.8887 15.0858L11.8887 12.5C11.8887 11.9477 12.3364 11.5 12.8887 11.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DocumentDownload;
