import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Bank({
  id = 'BankIcon',
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
        d="M15.3618 4.23178C15.7327 3.92274 16.2713 3.92274 16.6422 4.23178L28.6422 14.2318C29.3607 14.8305 28.9373 16 28.002 16H4.00199C3.0667 16 2.64329 14.8305 3.36181 14.2318L15.3618 4.23178ZM25.2399 14L16.002 6.30171L6.76404 14H25.2399ZM27.074 28.5H4.50199C3.94971 28.5 3.50199 28.0523 3.50199 27.5C3.50199 26.9477 3.94971 26.5 4.50199 26.5H6.5V18.8696C6.5 18.3893 6.94772 18 7.5 18C8.05228 18 8.5 18.3893 8.5 18.8696V26.5H15.002V18.8696C15.002 18.3893 15.4497 18 16.002 18C16.5543 18 17.002 18.3893 17.002 18.8696V26.5H23.5V18.8696C23.5 18.3893 23.9477 18 24.5 18C25.0523 18 25.5 18.3893 25.5 18.8696V26.5H27.074C27.6263 26.5 28.074 26.9477 28.074 27.5C28.074 28.0523 27.6263 28.5 27.074 28.5ZM18.002 11C18.002 12.1046 17.1066 13 16.002 13C14.8974 13 14.002 12.1046 14.002 11C14.002 9.89543 14.8974 9 16.002 9C17.1066 9 18.002 9.89543 18.002 11Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Bank;
