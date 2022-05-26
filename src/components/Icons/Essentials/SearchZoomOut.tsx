import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SearchZoomOut({
  id = 'SearchZoomOutIcon',
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
        d="M10.8887 4C7.57496 4 4.88867 6.68629 4.88867 10C4.88867 13.3137 7.57496 16 10.8887 16C14.2024 16 16.8887 13.3137 16.8887 10C16.8887 6.68629 14.2024 4 10.8887 4ZM2.88867 10C2.88867 5.58172 6.47039 2 10.8887 2C15.3069 2 18.8887 5.58172 18.8887 10C18.8887 11.8487 18.2616 13.551 17.2085 14.9056L22.5958 20.2929C22.9863 20.6834 22.9863 21.3166 22.5958 21.7071C22.2053 22.0976 21.5721 22.0976 21.1816 21.7071L15.7943 16.3199C14.4396 17.3729 12.7374 18 10.8887 18C6.47039 18 2.88867 14.4183 2.88867 10ZM7.88867 10C7.88867 9.44772 8.33639 9 8.88867 9H12.8887C13.441 9 13.8887 9.44772 13.8887 10C13.8887 10.5523 13.441 11 12.8887 11H8.88867C8.33639 11 7.88867 10.5523 7.88867 10Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SearchZoomOut;
