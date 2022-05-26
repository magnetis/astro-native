import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Backspace({
  id = 'BackspaceIcon',
  color = colors.space100,
  viewBox = getViewBox(),
  width = getSize(),
  height = getSize(),
  ...props
}: IconProps) {
  const fill = React.useMemo(() => getFill({ gradient: props.gradient, color, id }), [color, props.gradient, id]);

  return (
    <BaseIcon id={id} color={color} width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M18.5961 8.29289C18.9866 8.68342 18.9866 9.31658 18.5961 9.70711L16.3032 12L18.5961 14.2929C18.9866 14.6834 18.9866 15.3166 18.5961 15.7071C18.2056 16.0976 17.5724 16.0976 17.1819 15.7071L14.889 13.4142L12.5961 15.7071C12.2056 16.0976 11.5724 16.0976 11.1819 15.7071C10.7913 15.3166 10.7913 14.6834 11.1819 14.2929L13.4748 12L11.1819 9.70711C10.7913 9.31658 10.7913 8.68342 11.1819 8.29289C11.5724 7.90237 12.2056 7.90237 12.5961 8.29289L14.889 10.5858L17.1819 8.29289C17.5724 7.90237 18.2056 7.90237 18.5961 8.29289Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.889 5C22.889 4.44772 22.4413 4 21.889 4H10.3489C9.76506 4 9.21036 4.25513 8.8304 4.69842L3.68754 10.6984C3.04556 11.4474 3.04556 12.5526 3.68754 13.3016L8.8304 19.3016C9.21036 19.7449 9.76506 20 10.3489 20H21.889C22.4413 20 22.889 19.5523 22.889 19V5ZM20.889 18H10.3489L5.20605 12L10.3489 6H20.889V18Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Backspace;
