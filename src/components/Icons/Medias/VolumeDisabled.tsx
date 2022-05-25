import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function VolumeDisabled({
  id = 'VolumeDisabledIcon',
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
        d="M14.3065 2.0915C14.6613 2.25469 14.8887 2.60948 14.8887 3.00001V21C14.8887 21.3905 14.6613 21.7453 14.3065 21.9085C13.9517 22.0717 13.5344 22.0134 13.2379 21.7593L6.51875 16H3.88867C3.33639 16 2.88867 15.5523 2.88867 15V9.00001C2.88867 8.44773 3.33639 8.00001 3.88867 8.00001H6.51875L13.2379 2.24076C13.5344 1.9866 13.9517 1.92832 14.3065 2.0915ZM12.8887 5.17423L7.53946 9.75927C7.35822 9.91462 7.12738 10 6.88867 10H4.88867V14H6.88867C7.12738 14 7.35822 14.0854 7.53946 14.2408L12.8887 18.8258V5.17423ZM17.1816 9.29291C17.5721 8.90238 18.2053 8.90238 18.5958 9.29291L19.8887 10.5858L21.1816 9.29291C21.5721 8.90238 22.2053 8.90238 22.5958 9.29291C22.9863 9.68343 22.9863 10.3166 22.5958 10.7071L21.3029 12L22.5958 13.2929C22.9863 13.6834 22.9863 14.3166 22.5958 14.7071C22.2053 15.0976 21.5721 15.0976 21.1816 14.7071L19.8887 13.4142L18.5958 14.7071C18.2053 15.0976 17.5721 15.0976 17.1816 14.7071C16.791 14.3166 16.791 13.6834 17.1816 13.2929L18.4745 12L17.1816 10.7071C16.791 10.3166 16.791 9.68343 17.1816 9.29291Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default VolumeDisabled;
