import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function SearchChartBar({
  id = 'SearchChartBarIcon',
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
        d="M15.3106 14.5135C17.6957 12.1285 17.6957 8.26151 15.3106 5.87644C12.9256 3.49138 9.05863 3.49138 6.67356 5.87644C4.2885 8.26151 4.2885 12.1285 6.67356 14.5135C9.05863 16.8986 12.9256 16.8986 15.3106 14.5135ZM17.389 15.1771C19.8729 11.9962 19.6515 7.38883 16.7249 4.46223C13.5587 1.29612 8.42546 1.29612 5.25935 4.46223C2.09324 7.62834 2.09324 12.7616 5.25935 15.9277C8.18614 18.8545 12.794 19.0758 15.9749 16.5914L21.0032 21.6197C21.3937 22.0103 22.0269 22.0103 22.4174 21.6197C22.8079 21.2292 22.8079 20.596 22.4174 20.2055L17.389 15.1771ZM7.63402 8.83292C8.1863 8.83292 8.63402 9.28064 8.63402 9.83292L8.63402 12.8291C8.63402 13.3814 8.1863 13.8291 7.63402 13.8291C7.08173 13.8291 6.63402 13.3814 6.63402 12.8291L6.63402 9.83292C6.63402 9.28064 7.08173 8.83292 7.63402 8.83292ZM15.3313 8.24662C15.3313 7.69434 14.8836 7.24662 14.3313 7.24662C13.779 7.24662 13.3313 7.69434 13.3313 8.24662L13.3313 12.829C13.3313 13.3813 13.779 13.829 14.3313 13.829C14.8836 13.829 15.3313 13.3813 15.3313 12.829L15.3313 8.24662ZM10.9827 5.83671C11.5349 5.83671 11.9827 6.28442 11.9827 6.83671L11.9827 12.8291C11.9827 13.3814 11.5349 13.8291 10.9827 13.8291C10.4304 13.8291 9.98265 13.3814 9.98265 12.8291L9.98265 6.83671C9.98265 6.28442 10.4304 5.83671 10.9827 5.83671Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default SearchChartBar;
