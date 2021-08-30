import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Award({
  id = 'AwardIcon',
  color = colors.space100,
  viewBox = '0 0 32 32',
  width = 32,
  height = 32,
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6395 18.8547C9.73083 17.3926 8.5 15.09 8.5 12.5C8.5 8.08172 12.0817 4.5 16.5 4.5C20.9183 4.5 24.5 8.08172 24.5 12.5C24.5 15.0895 23.2696 17.3917 21.3616 18.8538L22.4913 27.3685C22.5418 27.7491 22.3699 28.1251 22.049 28.3358C21.728 28.5466 21.3148 28.555 20.9855 28.3575L16.5 25.6662L12.0145 28.3575C11.6852 28.5551 11.2719 28.5466 10.951 28.3358C10.63 28.125 10.4581 27.749 10.5087 27.3683L11.6395 18.8547ZM10.5 12.5C10.5 9.18629 13.1863 6.5 16.5 6.5C19.8137 6.5 22.5 9.18629 22.5 12.5C22.5 14.5815 21.4401 16.4154 19.8305 17.4915C19.7735 17.521 19.7198 17.5558 19.6702 17.5951C18.7503 18.1686 17.6639 18.5 16.5 18.5C13.1863 18.5 10.5 15.8137 10.5 12.5ZM19.4861 19.9241C18.5634 20.2956 17.5556 20.5 16.5 20.5C15.4448 20.5 14.4373 20.2957 13.515 19.9245L12.7644 25.5751L15.9855 23.6425C16.3022 23.4525 16.6978 23.4525 17.0145 23.6425L20.2359 25.5753L19.4861 19.9241Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Award;
