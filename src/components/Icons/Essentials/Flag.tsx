import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Flag({
  id = 'FlagIcon',
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
        d="M5.88871 4.79717C7.40579 4.48543 8.55905 4.4665 9.5147 4.58596C10.6337 4.72583 11.5325 5.05933 12.5376 5.43626L12.5676 5.44751C13.5546 5.81767 14.6476 6.22757 16.0147 6.39846C17.1187 6.53645 18.37 6.51627 19.8887 6.2398V15.2027C18.3717 15.5144 17.2184 15.5334 16.2628 15.4139C15.1438 15.274 14.245 14.9405 13.2399 14.5636L13.2099 14.5523C12.2229 14.1822 11.1299 13.7723 9.76277 13.6014C8.65881 13.4634 7.40751 13.4836 5.88873 13.7601L5.88871 4.79717ZM20.6462 4.02979C18.7461 4.50482 17.3714 4.55249 16.2628 4.4139C15.1438 4.27403 14.245 3.94053 13.2399 3.5636L13.2099 3.55235C12.2229 3.18219 11.1299 2.77229 9.76277 2.6014C8.37602 2.42806 6.75678 2.50431 4.66691 3.02462C4.22135 3.1255 3.88867 3.52388 3.88867 3.99995V20.9999C3.88867 21.5522 4.33639 21.9999 4.88867 21.9999C5.44096 21.9999 5.88867 21.5522 5.88867 20.9999V15.7972C7.40577 15.4854 8.55905 15.4665 9.5147 15.586C10.6337 15.7258 11.5325 16.0593 12.5376 16.4363L12.5676 16.4475C13.5546 16.8177 14.6476 17.2276 16.0147 17.3985C17.406 17.5724 19.0314 17.495 21.1313 16.9701C21.5764 16.8588 21.8887 16.4588 21.8887 15.9999V4.99993C21.8887 4.69199 21.7469 4.40123 21.5042 4.21172C21.2614 4.02222 20.9449 3.9551 20.6462 4.02979Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Flag;
