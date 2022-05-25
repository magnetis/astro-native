import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MobileDisabled({
  id = 'MobileDisabledIcon',
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
        d="M6.88829 7.41421V19C6.88829 20.1046 7.78372 21 8.88829 21H16.8883C17.8635 21 18.6756 20.3021 18.8525 19.3785L16.8883 17.4142V19H8.88829V9.41421L6.88829 7.41421Z"
        fill={fill}
      />
      <Path
        d="M16.8883 14.5858V5H8.88829V6.58579L6.92405 4.62154C7.10094 3.69794 7.91311 3 8.88829 3H16.8883C17.9929 3 18.8883 3.89543 18.8883 5V16.5858L16.8883 14.5858Z"
        fill={fill}
      />
      <Path
        d="M12.8883 18C13.4406 18 13.8883 17.5523 13.8883 17C13.8883 16.4477 13.4406 16 12.8883 16C12.336 16 11.8883 16.4477 11.8883 17C11.8883 17.5523 12.336 18 12.8883 18Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01361 4.57432C4.40413 4.1838 5.0373 4.18381 5.42782 4.57434L20.2242 19.3711C20.6147 19.7616 20.6147 20.3948 20.2242 20.7853C19.8337 21.1759 19.2005 21.1758 18.81 20.7853L4.01359 5.98854C3.62307 5.59801 3.62308 4.96484 4.01361 4.57432Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MobileDisabled;
