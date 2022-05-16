import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DocumentCheck({
  id = 'DocumentCheckIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H14.8887C15.1539 2 15.4082 2.10536 15.5958 2.29289L20.5958 7.29289C20.7833 7.48043 20.8887 7.73478 20.8887 8V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V4ZM18.4745 8L14.8887 4.41421V8H18.4745ZM12.8887 4L6.88867 4V20H18.8887V10H13.8887C13.3364 10 12.8887 9.55228 12.8887 9V4ZM16.5958 12.2929C16.9863 12.6834 16.9863 13.3166 16.5958 13.7071L12.5958 17.7071C12.2053 18.0976 11.5721 18.0976 11.1816 17.7071L9.18157 15.7071C8.79104 15.3166 8.79104 14.6834 9.18157 14.2929C9.57209 13.9024 10.2053 13.9024 10.5958 14.2929L11.8887 15.5858L15.1816 12.2929C15.5721 11.9024 16.2053 11.9024 16.5958 12.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DocumentCheck;
