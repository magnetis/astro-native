import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Upload({
  id = 'UploadIcon',
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
        d="M21.6066 11.6569C21.2161 12.0474 20.5829 12.0474 20.1924 11.6569L17 8.46447V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V8.36396L11.7071 11.6569C11.3166 12.0474 10.6834 12.0474 10.2929 11.6569C9.90237 11.2663 9.90237 10.6332 10.2929 10.2426L15.2426 5.29289C15.6332 4.90237 16.2663 4.90237 16.6569 5.29289L21.6066 10.2426C21.9971 10.6332 21.9971 11.2663 21.6066 11.6569ZM4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19V25H26V19C26 18.4477 26.4477 18 27 18C27.5523 18 28 18.4477 28 19V26C28 26.5523 27.5523 27 27 27H5C4.44772 27 4 26.5523 4 26V19Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Upload;
