import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function KeyPassword({
  id = 'KeyPasswordIcon',
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
        d="M2.88867 6C2.88867 4.34315 4.23182 3 5.88867 3H19.8887C21.5455 3 22.8887 4.34315 22.8887 6V9C22.8887 10.6569 21.5455 12 19.8887 12H5.88867C4.23182 12 2.88867 10.6569 2.88867 9V6ZM5.88867 5C5.33639 5 4.88867 5.44772 4.88867 6V9C4.88867 9.55228 5.33639 10 5.88867 10H19.8887C20.441 10 20.8887 9.55228 20.8887 9V6C20.8887 5.44772 20.441 5 19.8887 5H5.88867ZM7.38867 16C6.56024 16 5.88867 16.6716 5.88867 17.5C5.88867 18.3284 6.56024 19 7.38867 19C8.2171 19 8.88867 18.3284 8.88867 17.5C8.88867 16.6716 8.2171 16 7.38867 16ZM3.88867 17.5C3.88867 15.567 5.45568 14 7.38867 14C8.97418 14 10.3135 15.0543 10.7437 16.5H19.6387C20.329 16.5 20.8887 17.0596 20.8887 17.75V20C20.8887 20.5523 20.441 21 19.8887 21C19.3364 21 18.8887 20.5523 18.8887 20V18.5H17.0137V20C17.0137 20.5523 16.566 21 16.0137 21C15.4614 21 15.0137 20.5523 15.0137 20V18.5H10.7437C10.3135 19.9457 8.97418 21 7.38867 21C5.45568 21 3.88867 19.433 3.88867 17.5Z"
        fill={fill}
      />
      <Path
        d="M9.88867 7.5C9.88867 8.32843 9.2171 9 8.38867 9C7.56024 9 6.88867 8.32843 6.88867 7.5C6.88867 6.67157 7.56024 6 8.38867 6C9.2171 6 9.88867 6.67157 9.88867 7.5Z"
        fill={fill}
      />
      <Path
        d="M14.3887 7.5C14.3887 8.32843 13.7171 9 12.8887 9C12.0602 9 11.3887 8.32843 11.3887 7.5C11.3887 6.67157 12.0602 6 12.8887 6C13.7171 6 14.3887 6.67157 14.3887 7.5Z"
        fill={fill}
      />
      <Path
        d="M18.8887 7.5C18.8887 8.32843 18.2171 9 17.3887 9C16.5602 9 15.8887 8.32843 15.8887 7.5C15.8887 6.67157 16.5602 6 17.3887 6C18.2171 6 18.8887 6.67157 18.8887 7.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default KeyPassword;
