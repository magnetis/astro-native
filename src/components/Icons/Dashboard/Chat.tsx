import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Chat({
  id = 'ChatIcon',
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
        id="Mask"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3C14 2.44772 14.4477 2 15 2C22.732 2 29 8.26801 29 16C29 23.732 22.732 30 15 30C14.4477 30 14 29.5523 14 29C14 28.4477 14.4477 28 15 28C21.6274 28 27 22.6274 27 16C27 9.37258 21.6274 4 15 4C14.4477 4 14 3.55228 14 3ZM13.7976 23.5362C13.5344 24.1461 12.8266 24.4272 12.2167 24.164C11.9406 24.0448 11.7192 23.8266 11.596 23.5524L10.7226 21.6072H5.91353C4.29995 21.6064 3 20.2603 3 18.6182V12.9878C3 11.3458 4.30028 10 5.91394 10H19.3309C20.9442 10 22.2443 11.3457 22.2443 12.9878V18.6185C22.2443 20.2607 20.9442 21.6069 19.3309 21.6069H14.6302L13.7976 23.5362ZM4.67887 18.1772C4.67887 19.1794 5.5268 19.995 6.56895 19.9955H10.9964C11.2033 19.9955 11.3928 20.1118 11.4797 20.2919L12.3084 22.0062C12.3451 22.0822 12.4112 22.1427 12.4935 22.1757C12.6754 22.2487 12.8866 22.1708 12.9651 22.0018L13.7562 20.2988C13.8415 20.1145 14.0328 19.9953 14.2426 19.9953H18.5756C19.6173 19.9953 20.4652 19.1797 20.4652 18.1775V13.4962C20.4652 12.494 19.6173 11.6789 18.5756 11.6789H6.56895C5.5268 11.6789 4.67887 12.4942 4.67887 13.4962V18.1772Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Chat;
