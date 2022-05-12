import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoCheckCircle({
  id = 'InfoCheckCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM17.553 8.75259C17.9658 9.11951 18.003 9.75158 17.6361 10.1644L12.3027 16.1644C12.113 16.3779 11.841 16.5 11.5553 16.5C11.2697 16.5 10.9977 16.3779 10.8079 16.1644L8.14126 13.1644C7.77434 12.7516 7.81153 12.1195 8.22431 11.7526C8.63709 11.3857 9.26916 11.4229 9.63608 11.8356L11.5553 13.9948L16.1413 8.83564C16.5082 8.42285 17.1403 8.38567 17.553 8.75259Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoCheckCircle;
