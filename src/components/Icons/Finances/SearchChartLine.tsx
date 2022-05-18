import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SearchChartLine({
  id = 'SearchChartLineIcon',
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
        d="M15.3106 14.5135C17.6957 12.1285 17.6957 8.26151 15.3106 5.87644C12.9256 3.49138 9.05863 3.49138 6.67356 5.87644C4.2885 8.26151 4.2885 12.1285 6.67356 14.5135C9.05863 16.8986 12.9256 16.8986 15.3106 14.5135ZM17.389 15.1771C19.8729 11.9962 19.6515 7.38883 16.7249 4.46223C13.5587 1.29612 8.42546 1.29612 5.25935 4.46223C2.09324 7.62834 2.09324 12.7616 5.25935 15.9277C8.18614 18.8545 12.794 19.0758 15.9749 16.5914L21.0032 21.6197C21.3937 22.0103 22.0269 22.0103 22.4174 21.6197C22.8079 21.2292 22.8079 20.596 22.4174 20.2055L17.389 15.1771ZM15.3773 7.77682C14.9867 7.38629 14.3536 7.38629 13.963 7.77682L11.883 9.85686L10.4415 8.77137C9.96966 8.4161 9.30544 8.47598 8.90478 8.9099L6.67582 11.324C6.30116 11.7297 6.32638 12.3624 6.73215 12.737C7.13792 13.1117 7.77058 13.0865 8.14524 12.6807L9.8526 10.8316L11.27 11.8989C11.7278 12.2436 12.3696 12.1986 12.7749 11.7934L15.3773 9.19103C15.7678 8.80051 15.7678 8.16734 15.3773 7.77682Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SearchChartLine;
