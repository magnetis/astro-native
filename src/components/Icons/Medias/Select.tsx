import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Select({
  id = 'SelectIcon',
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
        d="M12.8887 4C13.1539 4 13.4082 4.10536 13.5958 4.29289L17.5958 8.29289C17.9863 8.68342 17.9863 9.31658 17.5958 9.70711C17.2053 10.0976 16.5721 10.0976 16.1816 9.70711L12.8887 6.41421L9.59578 9.70711C9.20525 10.0976 8.57209 10.0976 8.18157 9.70711C7.79104 9.31658 7.79104 8.68342 8.18157 8.29289L12.1816 4.29289C12.3691 4.10536 12.6235 4 12.8887 4ZM8.18157 14.2929C8.57209 13.9024 9.20525 13.9024 9.59578 14.2929L12.8887 17.5858L16.1816 14.2929C16.5721 13.9024 17.2053 13.9024 17.5958 14.2929C17.9863 14.6834 17.9863 15.3166 17.5958 15.7071L13.5958 19.7071C13.2053 20.0976 12.5721 20.0976 12.1816 19.7071L8.18157 15.7071C7.79104 15.3166 7.79104 14.6834 8.18157 14.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Select;
