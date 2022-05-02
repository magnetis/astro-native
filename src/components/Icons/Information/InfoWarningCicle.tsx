import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoWarningCircle({
  id = 'InfoWarningCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.307 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.307 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12Z"
        fill={fill}
      />
      <Path
        d="M12.8887 14C12.3364 14 11.8887 13.5523 11.8887 13L11.8887 7C11.8887 6.44772 12.3364 6 12.8887 6C13.441 6 13.8887 6.44772 13.8887 7L13.8887 13C13.8887 13.5523 13.441 14 12.8887 14Z"
        fill={fill}
      />
      <Path
        d="M11.3887 16.5C11.3887 15.6716 12.0602 15 12.8887 15C13.7171 15 14.3887 15.6716 14.3887 16.5C14.3887 17.3284 13.7171 18 12.8887 18C12.0602 18 11.3887 17.3284 11.3887 16.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoWarningCircle;
