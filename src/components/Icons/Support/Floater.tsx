import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Floater({
  id = 'FloaterIcon',
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
        d="M29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16ZM26.5859 13C25.5498 9.33665 22.6633 6.45019 19 5.41406V9.67363C20.4557 10.3652 21.6348 11.5443 22.3264 13H26.5859ZM22.9291 15H26.9552C26.9848 15.3294 27 15.6629 27 16C27 16.3371 26.9848 16.6706 26.9552 17H22.9291C22.9758 16.6734 23 16.3395 23 16C23 15.6605 22.9758 15.3266 22.9291 15ZM22.3264 19H26.5859C25.5498 22.6633 22.6633 25.5498 19 26.5859V22.3264C20.4557 21.6348 21.6348 20.4557 22.3264 19ZM17 22.9291V26.9552C16.6706 26.9848 16.3371 27 16 27C15.6629 27 15.3294 26.9848 15 26.9552V22.9291C15.3266 22.9758 15.6605 23 16 23C16.3395 23 16.6734 22.9758 17 22.9291ZM13 22.3264V26.5859C9.33665 25.5498 6.45019 22.6633 5.41406 19H9.67363C10.3652 20.4557 11.5443 21.6348 13 22.3264ZM9.07089 17H5.04484C5.01516 16.6706 5 16.3371 5 16C5 15.6629 5.01516 15.3294 5.04484 15H9.07089C9.02417 15.3266 9 15.6605 9 16C9 16.3395 9.02417 16.6734 9.07089 17ZM9.67363 13H5.41406C6.45019 9.33665 9.33665 6.45019 13 5.41406V9.67363C11.5443 10.3652 10.3652 11.5443 9.67363 13ZM15 9.07089V5.04484C15.3294 5.01516 15.6629 5 16 5C16.3371 5 16.6706 5.01516 17 5.04484V9.07089C16.6734 9.02417 16.3395 9 16 9C15.6605 9 15.3266 9.02417 15 9.07089ZM21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Floater;