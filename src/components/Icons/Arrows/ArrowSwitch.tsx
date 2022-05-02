import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowSwitch({
  id = 'ArrowSwitchIcon',
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
        d="M15.1816 2.29289C15.5721 1.90237 16.2053 1.90237 16.5958 2.29289L20.5958 6.29289C20.9863 6.68342 20.9863 7.31658 20.5958 7.70711L16.5958 11.7071C16.2053 12.0976 15.5721 12.0976 15.1816 11.7071C14.791 11.3166 14.791 10.6834 15.1816 10.2929L17.4745 8L5.88867 8C5.33639 8 4.88867 7.55228 4.88867 7C4.88867 6.44771 5.33639 6 5.88867 6L17.4745 6L15.1816 3.70711C14.791 3.31658 14.791 2.68342 15.1816 2.29289ZM10.5958 12.2929C10.9863 12.6834 10.9863 13.3166 10.5958 13.7071L8.30289 16H19.8887C20.441 16 20.8887 16.4477 20.8887 17C20.8887 17.5523 20.441 18 19.8887 18H8.30289L10.5958 20.2929C10.9863 20.6834 10.9863 21.3166 10.5958 21.7071C10.2053 22.0976 9.57209 22.0976 9.18157 21.7071L5.18157 17.7071C4.99403 17.5196 4.88867 17.2652 4.88867 17C4.88867 16.7348 4.99403 16.4804 5.18157 16.2929L9.18157 12.2929C9.57209 11.9024 10.2053 11.9024 10.5958 12.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowSwitch;
