import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ClipboardCheck({
  id = 'ClipboardCheckIcon',
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
        d="M8.88867 3C8.88867 2.44772 9.33639 2 9.88867 2H15.8887C16.441 2 16.8887 2.44772 16.8887 3H18.8887C19.9932 3 20.8887 3.89543 20.8887 5V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V5C4.88867 3.89543 5.7841 3 6.88867 3H8.88867ZM8.88867 5H6.88867V20H18.8887V5H16.8887V6C16.8887 6.55228 16.441 7 15.8887 7H9.88867C9.33639 7 8.88867 6.55228 8.88867 6V5ZM14.8887 4H10.8887V5H14.8887V4ZM16.5958 10.7929C16.9863 11.1834 16.9863 11.8166 16.5958 12.2071L12.5958 16.2071C12.2053 16.5976 11.5721 16.5976 11.1816 16.2071L9.18157 14.2071C8.79104 13.8166 8.79104 13.1834 9.18157 12.7929C9.57209 12.4024 10.2053 12.4024 10.5958 12.7929L11.8887 14.0858L15.1816 10.7929C15.5721 10.4024 16.2053 10.4024 16.5958 10.7929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ClipboardCheck;
