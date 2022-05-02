import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRightCircle({
  id = 'ArrowRightCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM13.1816 7.29289C13.5721 6.90237 14.2053 6.90237 14.5958 7.29289L18.5958 11.2929C18.9863 11.6834 18.9863 12.3166 18.5958 12.7071L14.5958 16.7071C14.2053 17.0976 13.5721 17.0976 13.1816 16.7071C12.791 16.3166 12.791 15.6834 13.1816 15.2929L15.4745 13H7.88867C7.33639 13 6.88867 12.5523 6.88867 12C6.88867 11.4477 7.33639 11 7.88867 11H15.4745L13.1816 8.70711C12.791 8.31658 12.791 7.68342 13.1816 7.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRightCircle;
