import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Warning({
  id = 'WarningIcon',
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
        d="M28.3867 24.9543L18.0712 6.04267C17.8873 5.70554 17.6103 5.42848 17.2731 5.24459C16.3034 4.71566 15.0885 5.07298 14.5596 6.04268L4.24421 24.9543C4.08397 25.2481 4 25.5774 4 25.9121C4 27.0166 4.89543 27.9121 6 27.9121H26.6309C26.9656 27.9121 27.2948 27.8281 27.5886 27.6678C28.5583 27.1389 28.9156 25.924 28.3867 24.9543ZM6 25.9121L16.3154 7.00038L26.6309 25.9121H6ZM15.3155 14.062C15.3155 13.4269 15.8303 12.9121 16.4655 12.9121C17.1006 12.9121 17.6155 13.4269 17.6155 14.0621V19.8121C17.6155 20.4472 17.1006 20.9621 16.4655 20.9621C15.8303 20.9621 15.3155 20.4472 15.3155 19.8121V14.062ZM17.6155 23.062C17.6155 23.6972 17.1006 24.212 16.4655 24.212C15.8303 24.212 15.3155 23.6972 15.3155 23.062C15.3155 22.4269 15.8303 21.9121 16.4655 21.9121C17.1006 21.9121 17.6155 22.4269 17.6155 23.062Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Warning;
