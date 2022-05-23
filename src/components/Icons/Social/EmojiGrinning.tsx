import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmojiGrinning({
  id = 'EmojiGrinningIcon',
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
        d="M8.88867 14C8.88867 13.4477 9.33639 13 9.88867 13H15.8887C16.441 13 16.8887 13.4477 16.8887 14C16.8887 14.5253 16.7852 15.0454 16.5842 15.5307C16.3832 16.016 16.0885 16.457 15.7171 16.8284C15.3457 17.1999 14.9047 17.4945 14.4194 17.6955C13.9341 17.8965 13.414 18 12.8887 18C12.3634 18 11.8432 17.8965 11.3579 17.6955C10.8726 17.4945 10.4317 17.1999 10.0602 16.8284C9.68881 16.457 9.39417 16.016 9.19315 15.5307C8.99213 15.0454 8.88867 14.5253 8.88867 14ZM11.1566 15C11.2438 15.151 11.3506 15.2904 11.4745 15.4142C11.6602 15.5999 11.8807 15.7472 12.1233 15.8478C12.366 15.9483 12.626 16 12.8887 16C13.1513 16 13.4114 15.9483 13.654 15.8478C13.8967 15.7472 14.1172 15.5999 14.3029 15.4142C14.4267 15.2904 14.5335 15.151 14.6207 15H11.1566Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EmojiGrinning;
