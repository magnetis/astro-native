import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Speakers({
  id = 'SpeakersIcon',
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
        d="M4.88867 4C4.88867 2.89543 5.7841 2 6.88867 2H18.8887C19.9932 2 20.8887 2.89543 20.8887 4V20C20.8887 21.1046 19.9932 22 18.8887 22H6.88867C5.7841 22 4.88867 21.1046 4.88867 20V4ZM18.8887 4L6.88867 4V20H18.8887V4Z"
        fill={fill}
      />
      <Path
        d="M12.8887 12C11.7841 12 10.8887 12.8954 10.8887 14C10.8887 15.1046 11.7841 16 12.8887 16C13.9932 16 14.8887 15.1046 14.8887 14C14.8887 12.8954 13.9932 12 12.8887 12ZM8.88867 14C8.88867 11.7909 10.6795 10 12.8887 10C15.0978 10 16.8887 11.7909 16.8887 14C16.8887 16.2091 15.0978 18 12.8887 18C10.6795 18 8.88867 16.2091 8.88867 14Z"
        fill={fill}
      />
      <Path
        d="M14.3887 7.5C14.3887 8.32843 13.7171 9 12.8887 9C12.0602 9 11.3887 8.32843 11.3887 7.5C11.3887 6.67157 12.0602 6 12.8887 6C13.7171 6 14.3887 6.67157 14.3887 7.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Speakers;
