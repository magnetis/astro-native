import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Profile({
  id = 'ProfileIcon',
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
        d="M16 15.6471C13.0678 15.6471 10.6923 13.2628 10.6923 10.3235C10.6923 7.38424 13.0678 5 16 5C18.9322 5 21.3077 7.38424 21.3077 10.3235C21.3077 13.2628 18.9322 15.6471 16 15.6471ZM16 13.6471C17.826 13.6471 19.3077 12.1599 19.3077 10.3235C19.3077 8.48717 17.826 7 16 7C14.174 7 12.6923 8.48717 12.6923 10.3235C12.6923 12.1599 14.174 13.6471 16 13.6471ZM8 27.3824C8.55228 27.3824 9 26.9346 9 26.3824C9 22.4993 12.1348 19.3529 16 19.3529C19.8652 19.3529 23 22.4993 23 26.3824C23 26.9346 23.4477 27.3824 24 27.3824C24.5523 27.3824 25 26.9346 25 26.3824C25 21.3964 20.9714 17.3529 16 17.3529C11.0286 17.3529 7 21.3964 7 26.3824C7 26.9346 7.44772 27.3824 8 27.3824Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Profile;
