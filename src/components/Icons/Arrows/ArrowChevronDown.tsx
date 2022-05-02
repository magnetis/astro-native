import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowChevronDown({
  id = 'ArrowChevronDownIcon',
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
        d="M12.1816 7.29289C12.5721 6.90237 13.2053 6.90237 13.5958 7.29289L19.5958 13.2929C19.9863 13.6834 19.9863 14.3166 19.5958 14.7071C19.2053 15.0976 18.5721 15.0976 18.1816 14.7071L12.8887 9.41421L7.59578 14.7071C7.20525 15.0976 6.57209 15.0976 6.18157 14.7071C5.79104 14.3166 5.79104 13.6834 6.18157 13.2929L12.1816 7.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowChevronDown;
