import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaNext({
  id = 'MediaNextIcon',
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
        d="M5.88867 7.76627C5.88867 6.21168 7.58461 5.25146 8.91766 6.05129L15.974 10.2851C17.2687 11.0619 17.2687 12.9383 15.974 13.7151L8.91766 17.9489C7.58462 18.7487 5.88867 17.7885 5.88867 16.2339V7.76627ZM14.945 12.0001L7.88867 7.76627V16.2339L14.945 12.0001Z"
        fill={fill}
      />
      <Path
        d="M18.8887 6.00008C19.441 6.00008 19.8887 6.4478 19.8887 7.00008V17.0001C19.8887 17.5524 19.441 18.0001 18.8887 18.0001C18.3364 18.0001 17.8887 17.5524 17.8887 17.0001V7.00008C17.8887 6.4478 18.3364 6.00008 18.8887 6.00008Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MediaNext;
