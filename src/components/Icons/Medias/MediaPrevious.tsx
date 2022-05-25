import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MediaPrevious({
  id = 'MediaPreviousIcon',
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
        d="M19.8887 7.76627C19.8887 6.21168 18.1927 5.25146 16.8597 6.05129L9.80333 10.2851C8.50866 11.0619 8.50865 12.9383 9.80333 13.7151L16.8597 17.9489C18.1927 18.7487 19.8887 17.7885 19.8887 16.2339V7.76627ZM10.8323 12.0001L17.8887 7.76627V16.2339L10.8323 12.0001Z"
        fill={fill}
      />
      <Path
        d="M6.88867 6.00008C7.44096 6.00008 7.88867 6.4478 7.88867 7.00008V17.0001C7.88867 17.5524 7.44096 18.0001 6.88867 18.0001C6.33639 18.0001 5.88867 17.5524 5.88867 17.0001V7.00008C5.88867 6.4478 6.33639 6.00008 6.88867 6.00008Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MediaPrevious;
