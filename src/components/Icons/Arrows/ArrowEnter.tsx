import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowEnter({
  id = 'ArrowEnterIcon',
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
        d="M3.88867 14C3.88867 13.4477 4.33639 13 4.88867 13L16.8887 13C18.5455 13 19.8887 11.6569 19.8887 10L19.8887 6C19.8887 5.44771 20.3364 5 20.8887 5C21.441 5 21.8887 5.44771 21.8887 6L21.8887 10C21.8887 12.7614 19.6501 15 16.8887 15L4.88867 15C4.33639 15 3.88867 14.5523 3.88867 14Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.18157 14.7071C3.79104 14.3166 3.79104 13.6834 4.18157 13.2929L8.18157 9.29289C8.57209 8.90237 9.20526 8.90237 9.59578 9.29289C9.9863 9.68342 9.9863 10.3166 9.59578 10.7071L6.30289 14L9.59578 17.2929C9.9863 17.6834 9.9863 18.3166 9.59578 18.7071C9.20525 19.0976 8.57209 19.0976 8.18156 18.7071L4.18157 14.7071Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowEnter;
