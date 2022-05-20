import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EyeOff({
  id = 'EyeOffIcon',
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
        d="M5.59578 3.29289C5.20525 2.90237 4.57209 2.90237 4.18157 3.29289C3.79104 3.68342 3.79104 4.31658 4.18157 4.70711L6.60573 7.13127C5.17506 8.20737 3.92792 9.68543 2.99424 11.5528C2.85348 11.8343 2.85348 12.1657 2.99424 12.4472C5.15246 16.7637 8.98555 19 12.8887 19C14.4438 19 15.9879 18.645 17.4193 17.9448L20.1816 20.7071C20.5721 21.0976 21.2053 21.0976 21.5958 20.7071C21.9863 20.3166 21.9863 19.6834 21.5958 19.2929L5.59578 3.29289ZM15.9024 16.428C14.9229 16.8112 13.9021 17 12.8887 17C9.91989 17 6.88673 15.3792 5.01833 12C5.83588 10.5214 6.87645 9.3794 8.03705 8.56259L10.181 10.7066C9.99363 11.0982 9.88867 11.5369 9.88867 12C9.88867 13.6569 11.2318 15 12.8887 15C13.3518 15 13.7905 14.8951 14.1821 14.7076L15.9024 16.428Z"
        fill={fill}
      />
      <Path
        d="M19.441 13.8955C19.924 13.3402 20.3671 12.7088 20.759 12C18.8906 8.62078 15.8574 7 12.8886 7C12.7766 7 12.6645 7.00231 12.5524 7.00693L10.7681 5.22258C11.4661 5.07451 12.1762 5 12.8886 5C16.7918 5 20.6248 7.23635 22.7831 11.5528C22.9238 11.8343 22.9238 12.1657 22.7831 12.4472C22.2391 13.5352 21.5887 14.491 20.8576 15.3121L19.441 13.8955Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EyeOff;
