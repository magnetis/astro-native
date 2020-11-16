import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function DiagonalRight({
  id = 'DiagonalRightIcon',
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
        d="M21.9499 17.6051V11.0197V11.0177V11.0014C21.9499 11.0009 21.9499 11.0005 21.9499 11C21.9499 10.4477 21.5022 10 20.9499 10H14.321C13.7687 10 13.321 10.4477 13.321 11C13.321 11.5523 13.7687 12 14.321 12H18.5544L10.2929 20.2615C9.90237 20.652 9.90237 21.2852 10.2929 21.6757C10.6834 22.0663 11.3166 22.0663 11.7071 21.6757L19.9499 13.4329V17.6051C19.9499 18.1573 20.3976 18.6051 20.9499 18.6051C21.5022 18.6051 21.9499 18.1573 21.9499 17.6051Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default DiagonalRight;
