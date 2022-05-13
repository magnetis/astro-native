import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Tag({
  id = 'TagIcon',
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
        d="M2.88867 3C2.88867 2.44772 3.33639 2 3.88867 2H11.8887C12.1539 2 12.4082 2.10536 12.5958 2.29289L22.5958 12.2929C22.9863 12.6834 22.9863 13.3166 22.5958 13.7071L14.5958 21.7071C14.2053 22.0976 13.5721 22.0976 13.1816 21.7071L3.18157 11.7071C2.99403 11.5196 2.88867 11.2652 2.88867 11V3ZM4.88867 4V10.5858L13.8887 19.5858L20.4745 13L11.4745 4H4.88867Z"
        fill={fill}
      />
      <Path
        d="M9.88867 7.5C9.88867 8.32843 9.2171 9 8.38867 9C7.56024 9 6.88867 8.32843 6.88867 7.5C6.88867 6.67157 7.56024 6 8.38867 6C9.2171 6 9.88867 6.67157 9.88867 7.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Tag;
