import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Locker({
  id = 'LockerIcon',
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
        d="M21.0007 26C21.6756 26 22.1566 25.3453 21.9551 24.7013L19.5044 16.8716C21.0472 15.7616 22.0007 13.9651 22.0007 12C22.0007 8.68629 19.3144 6 16.0007 6C12.687 6 10.0007 8.68629 10.0007 12C10.0007 13.9867 10.9754 15.8 12.5458 16.9063L10.0485 24.6947C9.84154 25.34 10.323 26 11.0007 26H21.0007ZM17.3644 16.7301L19.6399 24H12.3715L14.6911 16.7657C14.841 16.2983 14.6295 15.7912 14.1919 15.5688C12.8582 14.8912 12.0007 13.5224 12.0007 12C12.0007 9.79086 13.7916 8 16.0007 8C18.2099 8 20.0007 9.79086 20.0007 12C20.0007 13.5044 19.1636 14.8595 17.8545 15.5457C17.4263 15.7701 17.22 16.2687 17.3644 16.7301Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Locker;
