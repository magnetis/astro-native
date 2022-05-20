import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function KeyPadlock({
  id = 'KeyPadlockIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.88867 6C2.88867 4.34315 4.23182 3 5.88867 3H19.8887C21.5455 3 22.8887 4.34315 22.8887 6V8.5C22.8887 9.05228 22.441 9.5 21.8887 9.5C21.3364 9.5 20.8887 9.05228 20.8887 8.5V6C20.8887 5.44772 20.441 5 19.8887 5H5.88867C5.33639 5 4.88867 5.44772 4.88867 6V11C4.88867 11.5523 5.33639 12 5.88867 12H11.7637C12.316 12 12.7637 12.4477 12.7637 13C12.7637 13.5523 12.316 14 11.7637 14H5.88867C4.23182 14 2.88867 12.6569 2.88867 11V6ZM14.8887 12C14.8887 10.3431 16.2318 9 17.8887 9C19.5455 9 20.8887 10.3431 20.8887 12V13C21.9932 13 22.8887 13.8954 22.8887 15V19C22.8887 20.1046 21.9932 21 20.8887 21H14.8887C13.7841 21 12.8887 20.1046 12.8887 19V15C12.8887 13.8954 13.7841 13 14.8887 13V12ZM14.8887 15V19H20.8887V15H14.8887ZM18.8887 13H16.8887V12C16.8887 11.4477 17.3364 11 17.8887 11C18.441 11 18.8887 11.4477 18.8887 12V13Z"
        fill={fill}
      />
      <Path
        d="M9.88867 8.5C9.88867 9.32843 9.2171 10 8.38867 10C7.56024 10 6.88867 9.32843 6.88867 8.5C6.88867 7.67157 7.56024 7 8.38867 7C9.2171 7 9.88867 7.67157 9.88867 8.5Z"
        fill={fill}
      />
      <Path
        d="M14.3887 8.5C14.3887 9.32843 13.7171 10 12.8887 10C12.0602 10 11.3887 9.32843 11.3887 8.5C11.3887 7.67157 12.0602 7 12.8887 7C13.7171 7 14.3887 7.67157 14.3887 8.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default KeyPadlock;
