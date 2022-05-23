import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function AppleLogoFilled({
  id = 'AppleLogoFilledIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M18.419 11.8598C18.4473 14.8107 21.1093 15.7928 21.1387 15.8053C21.1162 15.8744 20.7134 17.2048 19.7364 18.5787C18.8918 19.7666 18.0151 20.95 16.6343 20.9748C15.2776 20.9987 14.8413 20.2004 13.2899 20.2004C11.739 20.2004 11.2544 20.95 9.96994 20.9987C8.63699 21.0474 7.62194 19.714 6.77034 18.5306C5.03027 16.1097 3.70042 11.6895 5.486 8.70579C6.373 7.22407 7.95844 6.28592 9.67911 6.26174C10.9879 6.23773 12.2233 7.10902 13.0234 7.10902C13.823 7.10902 15.3242 6.06115 16.9025 6.21497C17.5633 6.2415 19.4178 6.47176 20.6087 8.14936C20.513 8.20665 18.396 9.39265 18.419 11.8598ZM15.869 4.61349C16.5766 3.78928 17.0529 2.64158 16.9231 1.5C15.903 1.5394 14.6695 2.15406 13.938 2.97795C13.2822 3.70735 12.7081 4.87514 12.8629 5.99412C13.9999 6.07888 15.1613 5.43817 15.869 4.61349Z"
        fill="black"
      />
    </BaseIcon>
  );
}

export default AppleLogoFilled;
