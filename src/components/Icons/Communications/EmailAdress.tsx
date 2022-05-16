import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmailAdress({
  id = 'EmailAdressIcon',
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
        d="M9.98583 2.4306C11.9853 1.82407 14.1245 1.85907 16.1031 2.5307C18.0816 3.20233 19.8001 4.47683 21.0171 6.17522C22.2342 7.87361 22.8887 9.91057 22.8887 12V13.5C22.8887 15.433 21.3217 17 19.3887 17C18.1844 17 17.1223 16.3918 16.4925 15.4659C15.5828 16.4115 14.3045 17 12.8887 17C10.1272 17 7.88867 14.7614 7.88867 12C7.88867 9.23858 10.1272 7 12.8887 7C14.1643 7 15.3284 7.4777 16.2117 8.26397C16.3898 8.10008 16.6276 8 16.8887 8C17.441 8 17.8887 8.44772 17.8887 9V13.5C17.8887 14.3284 18.5602 15 19.3887 15C20.2171 15 20.8887 14.3284 20.8887 13.5V12C20.8887 10.3285 20.3651 8.69889 19.3914 7.34018C18.4178 5.98147 17.043 4.96186 15.4602 4.42456C13.8774 3.88726 12.166 3.85925 10.5664 4.34448C8.96683 4.8297 7.55942 5.80378 6.54185 7.12991C5.52427 8.45604 4.94765 10.0676 4.89296 11.7382C4.83827 13.4089 5.30826 15.0547 6.23692 16.4446C7.16558 17.8344 8.50626 18.8984 10.0707 19.4872C11.6351 20.076 13.3446 20.16 14.9592 19.7274C15.4927 19.5845 16.041 19.901 16.184 20.4345C16.3269 20.968 16.0103 21.5163 15.4769 21.6593C13.4586 22.2 11.3217 22.0951 9.36617 21.3591C7.41066 20.6231 5.73481 19.293 4.57398 17.5557C3.41315 15.8184 2.82566 13.7611 2.89403 11.6728C2.96239 9.58449 3.68317 7.57005 4.95514 5.91239C6.22711 4.25473 7.98636 3.03713 9.98583 2.4306ZM15.8887 12C15.8887 10.3431 14.5455 9 12.8887 9C11.2318 9 9.88867 10.3431 9.88867 12C9.88867 13.6569 11.2318 15 12.8887 15C14.5455 15 15.8887 13.6569 15.8887 12Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EmailAdress;
