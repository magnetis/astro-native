import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Pin({
  id = 'PinIcon',
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
        d="M9.73566 5H8.88867C8.33639 5 7.88867 4.55228 7.88867 4C7.88867 3.44772 8.33639 3 8.88867 3H10.8887H14.8887H16.8887C17.441 3 17.8887 3.44772 17.8887 4C17.8887 4.55228 17.441 5 16.8887 5H16.0417L16.7553 9.99517C17.1148 10.1989 17.4555 10.4329 17.7715 10.6962C19.0977 11.8015 19.8887 13.3437 19.8887 15C19.8887 15.5523 19.441 16 18.8887 16H12.8887L6.88867 16C6.33639 16 5.88867 15.5523 5.88867 15C5.88867 13.3437 6.6796 11.8015 8.00585 10.6962C8.32183 10.4329 8.66252 10.1989 9.02207 9.99517L9.73566 5ZM11.756 5L10.9292 10.7872C10.8816 11.1205 10.6695 11.4074 10.3649 11.5507C9.96821 11.7373 9.60536 11.9667 9.28622 12.2327C8.6736 12.7432 8.25907 13.3553 8.04921 14L12.8887 14H17.7281C17.5183 13.3553 17.1037 12.7432 16.4911 12.2327C16.172 11.9667 15.8091 11.7373 15.4124 11.5507C15.1078 11.4074 14.8957 11.1205 14.8481 10.7872L14.0214 5H11.756Z"
        fill={fill}
      />
      <Path d="M12.8887 15V20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}

export default Pin;
