import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Cake({
  id = 'CakeIcon',
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
        d="M4.89812 17.0343V13.1991C4.89812 13.1991 4.89812 13.1991 4.89812 13.1991C4.89812 13.1991 4.89812 12.286 5.57778 11.6772C6.17698 11.1405 6.92014 11.0297 7.08769 11.0109C7.11097 11.0083 7.13403 11.0076 7.15745 11.0076H12.8886M4.89812 17.0343H3.88886C3.88886 17.0343 3.58869 19.9969 5.78231 19.9969H20.0969C21.8671 19.9969 21.8889 17.0343 21.8889 17.0343H20.7766M4.89812 17.0343H20.7766M12.8886 11.0076H18.5174C18.5407 11.0076 18.5636 11.0083 18.5868 11.0109C18.7539 11.0295 19.4975 11.14 20.0969 11.6771C20.7766 12.286 20.7766 13.5239 20.7766 13.5239M12.8886 11.0076V8.64697M20.7766 13.5239V17.0343M20.7766 13.5239C16.2046 13.179 16.6165 14.8429 15.0307 15.5937C13.762 16.1943 12.4769 15.5937 11.3648 14.6602C10.7228 14.1214 9.42893 13.7877 8.33742 14.4776C7.2321 15.1763 5.89352 14.7549 5.31001 14.4776M12.8886 8.64697C12.8474 8.55229 12.4684 8.60896 11.8588 7.6187C11.2673 6.65769 12.3153 4.79083 12.842 4.08788C12.8727 4.04692 12.9075 3.99313 12.9581 4.00072C13.2283 4.04125 13.5367 5.63978 14.1243 6.21853C15.7122 7.78281 13.0122 8.64697 12.8886 8.64697Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  );
}

export default Cake;
