import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Headset({
  id = 'HeadsetIcon',
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
        d="M6.88867 14H7.63867V12H6.88867V14ZM7.88867 14.25V17.75H9.88867V14.25H7.88867ZM7.63867 18H6.88867V20H7.63867V18ZM6.88867 18C5.7841 18 4.88867 17.1046 4.88867 16H2.88867C2.88867 18.2091 4.67953 20 6.88867 20V18ZM7.88867 17.75C7.88867 17.8881 7.77674 18 7.63867 18V20C8.88131 20 9.88867 18.9926 9.88867 17.75H7.88867ZM7.63867 14C7.77674 14 7.88867 14.1119 7.88867 14.25H9.88867C9.88867 13.0074 8.88131 12 7.63867 12V14ZM6.88867 12C4.67953 12 2.88867 13.7909 2.88867 16H4.88867C4.88867 14.8954 5.7841 14 6.88867 14V12ZM18.8887 12H18.1387V14H18.8887V12ZM15.8887 14.25V17.75H17.8887V14.25H15.8887ZM18.1387 20H18.8887V18H18.1387V20ZM18.8887 20C21.0978 20 22.8887 18.2091 22.8887 16H20.8887C20.8887 17.1046 19.9932 18 18.8887 18V20ZM15.8887 17.75C15.8887 18.9926 16.896 20 18.1387 20V18C18.0006 18 17.8887 17.8881 17.8887 17.75H15.8887ZM18.1387 12C16.896 12 15.8887 13.0074 15.8887 14.25H17.8887C17.8887 14.1119 18.0006 14 18.1387 14V12ZM18.8887 14C19.9932 14 20.8887 14.8954 20.8887 16H22.8887C22.8887 13.7909 21.0978 12 18.8887 12V14ZM12.8887 6C15.6501 6 17.8887 8.23858 17.8887 11H19.8887C19.8887 7.13401 16.7547 4 12.8887 4V6ZM12.8887 4C9.02268 4 5.88867 7.13401 5.88867 11H7.88867C7.88867 8.23858 10.1272 6 12.8887 6V4ZM7.88867 13V11H5.88867V13H7.88867ZM17.8887 11V13H19.8887V11H17.8887Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Headset;