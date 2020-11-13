import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Mail({
  id = 'MailIcon',
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
        d="M28 6H4C2.89543 6 2 6.89543 2 8V24C2 25.1046 2.89543 26 4 26H28C29.1046 26 30 25.1046 30 24V8C30 6.89543 29.1046 6 28 6ZM4 9.3813V24H28V8.97868L16.6952 18.4645C16.552 18.5847 16.385 18.6579 16.2129 18.6857C15.8525 18.9282 15.3615 18.9147 15.0121 18.6216L4 9.3813ZM15.7822 16.3149L25.6915 8H5.87289L15.7822 16.3149Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Mail;
