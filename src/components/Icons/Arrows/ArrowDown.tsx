import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowDown({
  id = 'ArrowDownIcon',
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
        d="M12.8887 4C13.441 4 13.8887 4.44772 13.8887 5V16.5858L18.1816 12.2929C18.5721 11.9024 19.2053 11.9024 19.5958 12.2929C19.9863 12.6834 19.9863 13.3166 19.5958 13.7071L13.5958 19.7071C13.2053 20.0976 12.5721 20.0976 12.1816 19.7071L6.18157 13.7071C5.79104 13.3166 5.79104 12.6834 6.18157 12.2929C6.57209 11.9024 7.20525 11.9024 7.59578 12.2929L11.8887 16.5858V5C11.8887 4.44772 12.3364 4 12.8887 4Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowDown;
