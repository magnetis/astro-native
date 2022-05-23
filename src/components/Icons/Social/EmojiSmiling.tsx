import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmojiSmiling({
  id = 'EmojiEmojiSmilingIcon',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12Z"
        fill={fill}
      />
      <Path
        d="M11.8887 9.5C11.8887 10.3284 11.2171 11 10.3887 11C9.56024 11 8.88867 10.3284 8.88867 9.5C8.88867 8.67157 9.56024 8 10.3887 8C11.2171 8 11.8887 8.67157 11.8887 9.5Z"
        fill={fill}
      />
      <Path
        d="M16.8887 9.5C16.8887 10.3284 16.2171 11 15.3887 11C14.5602 11 13.8887 10.3284 13.8887 9.5C13.8887 8.67157 14.5602 8 15.3887 8C16.2171 8 16.8887 8.67157 16.8887 9.5Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1212 13.7562C18.4732 14.1817 18.4136 14.8121 17.9881 15.1641C16.5537 16.3508 14.7503 17 12.8887 17C11.027 17 9.22369 16.3508 7.78928 15.1641C7.36374 14.8121 7.30415 14.1817 7.65619 13.7562C8.00823 13.3306 8.63859 13.271 9.06413 13.6231C10.1399 14.5131 11.4925 15 12.8887 15C14.2849 15 15.6374 14.5131 16.7132 13.6231C17.1388 13.271 17.7691 13.3306 18.1212 13.7562Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EmojiSmiling;
