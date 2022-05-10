import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function DeleteAlt({
  id = 'DeleteAltIcon',
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
        d="M12.8887 2.78967C8.48867 2.78967 4.88867 6.38967 4.88867 10.7897C4.88867 16.1897 11.8887 22.2897 12.1887 22.5897C12.3887 22.6897 12.6887 22.7897 12.8887 22.7897C13.0887 22.7897 13.3887 22.6897 13.5887 22.5897C13.8887 22.2897 20.8887 16.1897 20.8887 10.7897C20.8887 6.38967 17.2887 2.78967 12.8887 2.78967ZM12.8887 20.4897C10.7887 18.4897 6.88867 14.1897 6.88867 10.7897C6.88867 7.48967 9.58867 4.78967 12.8887 4.78967C16.1887 4.78967 18.8887 7.48967 18.8887 10.7897C18.8887 14.0897 14.9887 18.4897 12.8887 20.4897ZM12.8887 6.78967C10.6887 6.78967 8.88867 8.58967 8.88867 10.7897C8.88867 12.9897 10.6887 14.7897 12.8887 14.7897C15.0887 14.7897 16.8887 12.9897 16.8887 10.7897C16.8887 8.58967 15.0887 6.78967 12.8887 6.78967ZM12.8887 12.7897C11.7887 12.7897 10.8887 11.8897 10.8887 10.7897C10.8887 9.68967 11.7887 8.78967 12.8887 8.78967C13.9887 8.78967 14.8887 9.68967 14.8887 10.7897C14.8887 11.8897 13.9887 12.7897 12.8887 12.7897Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DeleteAlt;
