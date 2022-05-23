import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Shop({
  id = 'ShopIcon',
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
        d="M11.4208 4.4039C11.1476 4.62132 10.8958 5.00499 10.8958 5.77844V8.03516H14.8958V5.77844C14.8958 5.00499 14.6441 4.62132 14.3708 4.4039C14.0588 4.15564 13.5607 4.00098 12.8958 4.00098C12.2309 4.00098 11.7328 4.15564 11.4208 4.4039ZM16.8958 8.03516V5.77844C16.8958 4.50305 16.4444 3.49798 15.6161 2.83888C14.8265 2.21062 13.8246 2.00098 12.8958 2.00098C11.967 2.00098 10.9651 2.21062 10.1755 2.83888C9.34721 3.49798 8.89582 4.50305 8.89582 5.77844V8.03516H6.9694C6.00796 8.03516 5.18257 8.71925 5.00414 9.66398L3.12227 19.628C2.88967 20.8595 3.83418 21.9991 5.08753 21.9991H20.6894C21.9522 21.9991 22.8989 20.8434 22.6503 19.6054L20.6496 9.64143C20.462 8.70729 19.6415 8.03516 18.6888 8.03516H16.8958ZM14.8958 10.0352V11.001C14.8958 11.5533 15.3435 12.001 15.8958 12.001C16.4481 12.001 16.8958 11.5533 16.8958 11.001V10.0352H18.6888L20.6894 19.9991L5.08753 19.9991L6.9694 10.0352L8.89582 10.0352V11.001C8.89582 11.5533 9.34353 12.001 9.89582 12.001C10.4481 12.001 10.8958 11.5533 10.8958 11.001V10.0352H14.8958Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Shop;
