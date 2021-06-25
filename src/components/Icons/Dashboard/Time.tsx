import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Time({
  id = 'TimeIcon',
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
        d="M15 29C15 29.5523 15.4477 30 16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 16.5523 2.44772 17 3 17C3.55228 17 4 16.5523 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C15.4477 28 15 28.4477 15 29ZM17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V16C15 16.3684 15.1992 16.6902 15.4957 16.8637C15.5833 17.0141 15.7114 17.1435 15.8746 17.234L21.6235 20.4207C22.1065 20.6884 22.7151 20.5139 22.9829 20.0309C23.2506 19.5478 23.0761 18.9392 22.5931 18.6714L17 15.5711V8Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Time;
