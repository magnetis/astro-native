import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ThumbsUp({
  id = 'ThumbsUpIcon',
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
        d="M11.3062 3.92908C11.9377 2.69692 13.3754 2.10808 14.6916 2.54682C16.0346 2.99447 16.834 4.37208 16.5564 5.7602L16.3477 6.80381C16.2239 7.4226 16.6972 7.99993 17.3283 7.99993H19.5278C21.3816 7.99993 22.7917 9.66453 22.4869 11.4931L21.2929 18.6575C20.9714 20.5863 19.3026 21.9999 17.3473 21.9999H12.0998C11.1126 21.9999 10.1476 21.7077 9.32627 21.1602L8.88867 20.8684V20.9999C8.88867 21.5522 8.44096 21.9999 7.88867 21.9999H4.88867C3.7841 21.9999 2.88867 21.1045 2.88867 19.9999V9.99993C2.88867 8.89536 3.7841 7.99993 4.88867 7.99993H7.88867C8.24635 7.99993 8.56016 8.18771 8.73691 8.47006L11.3062 3.92908ZM6.88867 9.99993H4.88867V19.9999H6.88867V9.99993ZM8.88867 12.2632V18.4647L10.4357 19.4961C10.9285 19.8246 11.5075 19.9999 12.0998 19.9999H17.3473C18.325 19.9999 19.1594 19.2931 19.3201 18.3287L20.5141 11.1643C20.6157 10.5548 20.1457 9.99993 19.5278 9.99993H17.3283C15.4351 9.99993 14.0153 8.26795 14.3865 6.41158L14.5953 5.36796C14.6751 4.96891 14.4452 4.57288 14.0592 4.44418C13.6782 4.3172 13.2618 4.48966 13.0822 4.84884C13.0746 4.86412 13.0666 4.8792 13.0582 4.89407L8.88867 12.2632Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ThumbsUp;
