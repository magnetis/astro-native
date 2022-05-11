import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Clock({
  id = 'ClockIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM12.8887 6C13.441 6 13.8887 6.44772 13.8887 7V11.5858L16.5958 14.2929C16.9863 14.6834 16.9863 15.3166 16.5958 15.7071C16.2053 16.0976 15.5721 16.0976 15.1816 15.7071L12.1816 12.7071C11.994 12.5196 11.8887 12.2652 11.8887 12V7C11.8887 6.44772 12.3364 6 12.8887 6Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Clock;
