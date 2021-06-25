import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Close({
  id = 'CloseIcon',
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
        d="M9.29289 10.2929C8.90237 10.6834 8.90237 11.3166 9.29289 11.7071L14.0858 16.5L9.29289 21.2929C8.90237 21.6834 8.90237 22.3166 9.29289 22.7071C9.68342 23.0976 10.3166 23.0976 10.7071 22.7071L15.5 17.9142L20.2929 22.7071C20.6834 23.0976 21.3166 23.0976 21.7071 22.7071C22.0976 22.3166 22.0976 21.6834 21.7071 21.2929L16.9142 16.5L21.7071 11.7071C22.0976 11.3166 22.0976 10.6834 21.7071 10.2929C21.3166 9.90237 20.6834 9.90237 20.2929 10.2929L15.5 15.0858L10.7071 10.2929C10.3166 9.90237 9.68342 9.90237 9.29289 10.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Close;
