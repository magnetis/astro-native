import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function ArrowUp({
  id = 'ArrowUpIcon',
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
        d="M15.3431 24C14.7909 24 14.3431 23.5523 14.3431 23L14.3431 11.3431L11.3934 14.2929C11.0029 14.6834 10.3697 14.6834 9.97918 14.2929C9.58866 13.9024 9.58866 13.2692 9.97918 12.8787L14.2218 8.63604C14.3111 8.54681 14.413 8.47797 14.5217 8.42951C14.7024 8.16991 15.0029 8 15.3431 8C15.6834 8 15.9839 8.16991 16.1646 8.42951C16.2733 8.47797 16.3752 8.54681 16.4645 8.63604L20.7071 12.8787C21.0976 13.2692 21.0976 13.9024 20.7071 14.2929C20.3166 14.6834 19.6834 14.6834 19.2929 14.2929L16.3431 11.3431V23C16.3431 23.5523 15.8954 24 15.3431 24Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowUp;
