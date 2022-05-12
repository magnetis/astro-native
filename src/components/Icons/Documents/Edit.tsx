import React from 'react';
import { Line, Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Edit({
  id = 'EditIcon',
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
        d="M17.1816 2.29289C17.5721 1.90237 18.2053 1.90237 18.5958 2.29289L22.5958 6.29289C22.9863 6.68342 22.9863 7.31658 22.5958 7.70711L9.59578 20.7071C9.40824 20.8946 9.15389 21 8.88867 21H4.88867C4.33639 21 3.88867 20.5523 3.88867 20V16C3.88867 15.7348 3.99403 15.4804 4.18157 15.2929L14.1814 5.2931L17.1816 2.29289ZM14.8887 7.41421L5.88867 16.4142V19H8.47446L17.4745 10L14.8887 7.41421ZM18.8887 8.58579L20.4745 7L17.8887 4.41421L16.3029 6L18.8887 8.58579Z"
        fill={fill}
      />
      <Line x1="5.66218" y1="14.7581" x2="9.76818" y2="18.8641" stroke={fill} strokeWidth="2" />
    </BaseIcon>
  );
}

export default Edit;
