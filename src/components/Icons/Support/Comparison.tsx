import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Comparison({
  id = 'ComparisonIcon',
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
        d="M29.1039 3.01872C29.6458 3.44637 29.7385 4.23239 29.3108 4.77433L18.5578 18.401C18.3343 18.6842 17.9994 18.857 17.6391 18.8751C17.2787 18.8931 16.9282 18.7546 16.6775 18.4951L12.6735 14.3504L5.15335 20.9401C4.63414 21.3951 3.84439 21.343 3.38942 20.8238C2.93444 20.3046 2.98652 19.5148 3.50574 19.0599L11.9214 11.6855C12.4229 11.246 13.1809 11.2776 13.6442 11.7571L17.4815 15.7292L27.3483 3.22565C27.7759 2.68371 28.5619 2.59106 29.1039 3.01872ZM29.1023 22.9865C29.415 23.6019 29.1696 24.3544 28.5542 24.6671L22.0908 27.9516C21.8472 28.0754 21.5698 28.116 21.301 28.0671L12.5649 26.4787L4.36078 28.9516C3.6998 29.1509 3.00245 28.7765 2.80321 28.1156C2.60397 27.4546 2.97829 26.7572 3.63927 26.558L12.1315 23.9982C12.321 23.9411 12.5213 23.9298 12.7159 23.9652L21.3338 25.5321L27.4216 22.4384C28.0371 22.1257 28.7895 22.371 29.1023 22.9865Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Comparison;
