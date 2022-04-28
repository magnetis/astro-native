import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowUp({
  id = 'ArrowUpIcon',
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
        d="M12.8887 4C13.1539 4 13.4082 4.10536 13.5958 4.29289L19.5958 10.2929C19.9863 10.6834 19.9863 11.3166 19.5958 11.7071C19.2053 12.0976 18.5721 12.0976 18.1816 11.7071L13.8887 7.41421L13.8887 19C13.8887 19.5523 13.441 20 12.8887 20C12.3364 20 11.8887 19.5523 11.8887 19L11.8887 7.41421L7.59578 11.7071C7.20525 12.0976 6.57209 12.0976 6.18156 11.7071C5.79104 11.3166 5.79104 10.6834 6.18157 10.2929L12.1816 4.29289C12.3691 4.10536 12.6235 4 12.8887 4Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowUp;
