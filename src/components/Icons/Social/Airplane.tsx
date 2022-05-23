import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Airplane({
  id = 'AirplaneIcon',
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
        d="M4.86748 11.9319C4.86748 11.9319 4.25512 10.2298 3.94948 9.09504C3.64384 7.9603 4.58979 7.53478 4.58979 7.53478L6.56463 10.4851H12.5998L11.2367 7.02415C11.2367 7.02415 11.007 6.459 10.7363 5.52062C10.4656 4.58224 11.9323 3.93188 11.9323 3.93188L16.3265 10.4851H19.8983C19.8983 10.4851 20.8903 10.4567 21.3895 10.9213C21.8887 11.386 21.8887 11.9319 21.8887 11.9319M4.86748 12.0681C4.86748 12.0681 4.25512 13.7702 3.94948 14.905C3.64384 16.0397 4.58979 16.4652 4.58979 16.4652L6.56463 13.5149L12.5998 13.5149L11.2367 16.9759C11.2367 16.9759 11.007 17.541 10.7363 18.4794C10.4656 19.4178 11.9323 20.0681 11.9323 20.0681L16.3265 13.5149H19.8983C19.8983 13.5149 20.8903 13.5816 21.3895 13.0787C21.8887 12.5757 21.8887 12.0681 21.8887 12.0681"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default Airplane;
