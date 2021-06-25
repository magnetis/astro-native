import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ChartUp({
  id = 'ChartUpIcon',
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
        d="M18.0233 20.9876C18.451 21.0485 18.8986 20.8843 19.1705 20.5247L28.7704 7.83257C29.1602 7.3172 29.0417 6.59558 28.5057 6.22077C27.9698 5.84596 27.2193 5.9599 26.8295 6.47526L17.8564 18.3387L12.8568 14.2557C12.6011 14.0468 12.2844 13.9683 11.9838 14.0114C11.5783 13.9531 11.1553 14.1195 10.889 14.4861L3.24199 25.0098C2.84731 25.5529 2.94575 26.33 3.46188 26.7453C3.978 27.1607 4.71636 27.0571 5.11104 26.5139L12.2232 16.7263L17.1432 20.7443C17.4009 20.9548 17.7206 21.0329 18.0233 20.9876Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ChartUp;
