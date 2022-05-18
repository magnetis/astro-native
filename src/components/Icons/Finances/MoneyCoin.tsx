import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MoneyCoin({
  id = 'MoneyCoinIcon',
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
        d="M12.7969 4C8.3786 4 4.79688 7.58172 4.79688 12C4.79688 16.4183 8.3786 20 12.7969 20C17.2152 20 20.7969 16.4183 20.7969 12C20.7969 7.58172 17.2152 4 12.7969 4ZM2.79688 12C2.79688 6.47715 7.27403 2 12.7969 2C18.3197 2 22.7969 6.47715 22.7969 12C22.7969 17.5228 18.3197 22 12.7969 22C7.27403 22 2.79688 17.5228 2.79688 12Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7969 6C13.3492 6 13.7969 6.44772 13.7969 7V7.5H13.8728C14.5746 7.5 15.2542 7.74605 15.7933 8.19534L15.9371 8.31511C16.3613 8.66867 16.4187 9.29924 16.0651 9.72352C15.7115 10.1478 15.081 10.2051 14.6567 9.85156L14.513 9.73178C14.3332 9.58202 14.1067 9.5 13.8728 9.5H11.5469C11.1327 9.5 10.7969 9.83579 10.7969 10.25C10.7969 10.6642 11.1327 11 11.5469 11H14.0469C15.5657 11 16.7969 12.2312 16.7969 13.75C16.7969 15.2688 15.5657 16.5 14.0469 16.5H13.7969V17C13.7969 17.5523 13.3492 18 12.7969 18C12.2446 18 11.7969 17.5523 11.7969 17V16.5H11.2089C10.4278 16.5 9.6776 16.1954 9.11762 15.651L9.09979 15.6337C8.70381 15.2487 8.6949 14.6156 9.07988 14.2196C9.46487 13.8236 10.098 13.8147 10.494 14.1997L10.5118 14.217C10.5118 14.217 10.5118 14.217 10.5118 14.217C10.6984 14.3985 10.9485 14.5 11.2089 14.5H14.0469C14.4611 14.5 14.7969 14.1642 14.7969 13.75C14.7969 13.3358 14.4611 13 14.0469 13H11.5469C10.0281 13 8.79688 11.7688 8.79688 10.25C8.79688 8.73122 10.0281 7.5 11.5469 7.5H11.7969V7C11.7969 6.44772 12.2446 6 12.7969 6Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MoneyCoin;
