import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Logout({
  id = 'LogoutIcon',
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
        d="M21 8H7L7 25H21C21.5523 25 22 25.4477 22 26C22 26.5523 21.5523 27 21 27H6C5.44772 27 5 26.5523 5 26L5 7C5 6.44772 5.44772 6 6 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8ZM11.866 15.5488C11.3137 15.5488 10.866 15.9965 10.866 16.5488C10.866 17.1011 11.3137 17.5488 11.866 17.5488H23.5228L20.5731 20.4985C20.1826 20.889 20.1826 21.5222 20.5731 21.9127C20.9636 22.3032 21.5968 22.3032 21.9873 21.9127L26.23 17.6701C26.3192 17.5809 26.388 17.479 26.4365 17.3702C26.6961 17.1896 26.866 16.889 26.866 16.5488C26.866 16.2085 26.6961 15.9079 26.4365 15.7273C26.388 15.6186 26.3192 15.5167 26.23 15.4275L21.9873 11.1848C21.5968 10.7943 20.9636 10.7943 20.5731 11.1848C20.1826 11.5754 20.1826 12.2085 20.5731 12.599L23.5228 15.5488L11.866 15.5488Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Logout;
