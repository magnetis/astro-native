import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmojiNeutral({
  id = 'EmojiNeutralIcon',
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
        d="M7.88867 15C7.88867 14.4477 8.33639 14 8.88867 14L16.8887 14C17.441 14 17.8887 14.4477 17.8887 15C17.8887 15.5523 17.441 16 16.8887 16L8.88867 16C8.33639 16 7.88867 15.5523 7.88867 15Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EmojiNeutral;
