import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ThumbsDown({
  id = 'ThumbsDownIcon',
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
        d="M8.43023 4C7.45255 4 6.61817 4.70683 6.45744 5.6712L5.26337 12.8356C5.16178 13.4451 5.63183 14 6.24977 14H8.44924C10.3424 14 11.7623 15.732 11.391 17.5883L11.1823 18.632C11.1024 19.031 11.3323 19.4271 11.7183 19.5557C12.0993 19.6827 12.5157 19.5103 12.6953 19.1511C12.7035 19.1346 12.7122 19.1183 12.7214 19.1023L16.8888 11.8074V5.53518L15.3418 4.50385C14.849 4.17531 14.27 4 13.6777 4H8.43023ZM16.8888 3.13148L16.4512 2.83975C15.6299 2.29219 14.6649 2 13.6777 2H8.43023C6.47487 2 4.80611 3.41365 4.48465 5.3424L3.29058 12.5068C2.98582 14.3354 4.39595 16 6.24977 16H8.44924C9.08028 16 9.55358 16.5773 9.42982 17.1961L9.2211 18.2397C8.94347 19.6278 9.74293 21.0055 11.0859 21.4531C12.4014 21.8916 13.8382 21.3036 14.4703 20.0729L17.0539 15.5505C17.2328 15.8213 17.5399 16 17.8888 16H20.8888C21.9934 16 22.8888 15.1046 22.8888 14V4C22.8888 2.89543 21.9934 2 20.8888 2H17.8888C17.3366 2 16.8888 2.44772 16.8888 3V3.13148ZM18.8888 14H20.8888V4H18.8888V14Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ThumbsDown;
