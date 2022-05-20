import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function WifiOn({
  id = 'WifiOnIcon',
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
        d="M17.8884 21.8774C18.5633 21.8774 19.0443 21.2228 18.8428 20.5787L16.3921 12.7491C17.9349 11.6391 18.8884 9.84254 18.8884 7.87744C18.8884 4.56373 16.2021 1.87744 12.8884 1.87744C9.57471 1.87744 6.88842 4.56373 6.88842 7.87744C6.88842 9.86416 7.86308 11.6775 9.43345 12.7838L6.93617 20.5721C6.72924 21.2175 7.21068 21.8774 7.88842 21.8774H17.8884ZM14.197 12.2553L16.3807 19.8775H12.8932H9.40565L11.6317 12.2895C11.7755 11.8409 11.5725 11.3543 11.1526 11.1409C9.87274 10.4906 9.04982 9.17709 9.04982 7.71608C9.04982 5.59608 10.7684 3.87748 12.8884 3.87748C15.0084 3.87748 16.727 5.59608 16.727 7.71608C16.727 9.15975 15.9237 10.4602 14.6674 11.1187C14.2564 11.3341 14.0585 11.8125 14.197 12.2553Z"
        fill={fill}
      />
      <Path
        d="M13.8888 18C13.8888 17.4477 13.441 17 12.8888 17C12.3365 17 11.8888 17.4477 11.8888 18C11.8888 18.5523 12.3365 19 12.8888 19C13.441 19 13.8888 18.5523 13.8888 18Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default WifiOn;
