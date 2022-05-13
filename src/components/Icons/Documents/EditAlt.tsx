import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EditAlt({
  id = 'EditAltIcon',
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
        d="M17.1816 3.29289C17.5721 2.90237 18.2053 2.90237 18.5958 3.29289L21.5958 6.29289C21.9863 6.68342 21.9863 7.31658 21.5958 7.70711L12.5958 16.7071C12.4082 16.8946 12.1539 17 11.8887 17H8.88867C8.33639 17 7.88867 16.5523 7.88867 16V13C7.88867 12.7348 7.99403 12.4804 8.18157 12.2929L17.1816 3.29289ZM9.88867 13.4142V15H11.4745L19.4745 7L17.8887 5.41421L9.88867 13.4142ZM3.88867 7C3.88867 5.89543 4.7841 5 5.88867 5H10.8887C11.441 5 11.8887 5.44772 11.8887 6C11.8887 6.55228 11.441 7 10.8887 7H5.88867V19H17.8887V14C17.8887 13.4477 18.3364 13 18.8887 13C19.441 13 19.8887 13.4477 19.8887 14V19C19.8887 20.1046 18.9932 21 17.8887 21H5.88867C4.7841 21 3.88867 20.1046 3.88867 19V7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EditAlt;
