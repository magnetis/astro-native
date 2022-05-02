import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronDoubleUp({
  id = 'ArrowChevronDoubleUpIcon',
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
        d="M12.1816 4.29289C12.5721 3.90237 13.2053 3.90237 13.5958 4.29289L19.5958 10.2929C19.9863 10.6834 19.9863 11.3166 19.5958 11.7071C19.2053 12.0976 18.5721 12.0976 18.1816 11.7071L12.8887 6.41421L7.59578 11.7071C7.20525 12.0976 6.57209 12.0976 6.18157 11.7071C5.79104 11.3166 5.79104 10.6834 6.18157 10.2929L12.1816 4.29289ZM12.8887 12.4142L7.59578 17.7071C7.20525 18.0976 6.57209 18.0976 6.18157 17.7071C5.79104 17.3166 5.79104 16.6834 6.18157 16.2929L12.1816 10.2929C12.5721 9.90237 13.2053 9.90237 13.5958 10.2929L19.5958 16.2929C19.9863 16.6834 19.9863 17.3166 19.5958 17.7071C19.2053 18.0976 18.5721 18.0976 18.1816 17.7071L12.8887 12.4142Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDoubleUp;
