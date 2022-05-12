import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function FolderCheck({
  id = 'FolderCheckIcon',
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
        d="M2.88867 6C2.88867 4.89543 3.7841 4 4.88867 4H9.88867C10.1539 4 10.4082 4.10536 10.5958 4.29289L12.3029 6H20.8887C21.9932 6 22.8887 6.89543 22.8887 8V18C22.8887 19.1046 21.9932 20 20.8887 20H4.88867C3.7841 20 2.88867 19.1046 2.88867 18V6ZM9.47446 6L4.88867 6V18H20.8887V8H11.8887C11.6235 8 11.3691 7.89464 11.1816 7.70711L9.47446 6ZM16.5958 10.2929C16.9863 10.6834 16.9863 11.3166 16.5958 11.7071L12.5958 15.7071C12.4082 15.8946 12.1539 16 11.8887 16C11.6235 16 11.3691 15.8946 11.1816 15.7071L9.18157 13.7071C8.79104 13.3166 8.79104 12.6834 9.18157 12.2929C9.57209 11.9024 10.2053 11.9024 10.5958 12.2929L11.8887 13.5858L15.1816 10.2929C15.5721 9.90237 16.2053 9.90237 16.5958 10.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default FolderCheck;
