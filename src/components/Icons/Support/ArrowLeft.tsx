import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowLeft({
  id = 'ArrowLeftIcon',
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
        d="M14.2071 10.2929C14.5976 10.6834 14.5976 11.3166 14.2071 11.7071L11.4142 14.5H23C23.5523 14.5 24 14.9477 24 15.5C24 16.0523 23.5523 16.5 23 16.5H11.4142L14.2071 19.2929C14.5976 19.6834 14.5976 20.3166 14.2071 20.7071C13.8166 21.0976 13.1834 21.0976 12.7929 20.7071L8.29289 16.2071C7.90237 15.8166 7.90237 15.1834 8.29289 14.7929L12.7929 10.2929C13.1834 9.90237 13.8166 9.90237 14.2071 10.2929Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowLeft;
