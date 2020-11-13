import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Clock({
  id = 'ClockIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 16.5C29 9.59644 23.4036 4 16.5 4C9.59644 4 4 9.59644 4 16.5C4 23.4036 9.59644 29 16.5 29C23.4036 29 29 23.4036 29 16.5ZM6 16.5C6 10.701 10.701 6 16.5 6C22.299 6 27 10.701 27 16.5C27 22.299 22.299 27 16.5 27C10.701 27 6 22.299 6 16.5ZM15.5 8.98349C15.5 8.4312 15.9477 7.98349 16.5 7.98349C17.0523 7.98349 17.5 8.4312 17.5 8.98349V16.0858L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L16.032 17.4462C15.7155 17.2783 15.5 16.9455 15.5 16.5623V16.5007C15.5 16.5002 15.5 16.4998 15.5 16.4993V8.98349Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Clock;
