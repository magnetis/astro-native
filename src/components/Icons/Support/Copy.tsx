import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Copy({
  id = 'CopyIcon',
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
        d="M5 5V19.5H11V12C11 11.4477 11.4477 11 12 11H19.5V5H5ZM21.5 11V4.5C21.5 4.43307 21.4934 4.36769 21.4809 4.30444C21.5115 4.20845 21.5281 4.10616 21.5281 4C21.5281 3.44772 21.0804 3 20.5281 3H4C3.44772 3 3 3.44772 3 4V20.4603C3 20.8984 3.28172 21.2707 3.67388 21.4059C3.80262 21.4663 3.94634 21.5 4.09793 21.5H11V28.2924C11 28.3856 11.0127 28.4757 11.0365 28.5613C11.0682 29.085 11.503 29.5 12.0347 29.5H28.488C28.9976 29.5 29.4182 29.1188 29.4802 28.6261C29.4932 28.5617 29.5 28.4951 29.5 28.4269V12.3975C29.5 12.3148 29.49 12.2344 29.471 12.1576C29.4791 12.1062 29.4834 12.0536 29.4834 12C29.4834 11.4477 29.0356 11 28.4834 11H21.5ZM27.5 27.5V13H13V27.5H27.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Copy;
