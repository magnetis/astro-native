import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoAddCircle({
  id = 'InfoAddCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM12.8887 7C13.441 7 13.8887 7.44772 13.8887 8V11H16.8887C17.441 11 17.8887 11.4477 17.8887 12C17.8887 12.5523 17.441 13 16.8887 13H13.8887V16C13.8887 16.5523 13.441 17 12.8887 17C12.3364 17 11.8887 16.5523 11.8887 16V13H8.88867C8.33639 13 7.88867 12.5523 7.88867 12C7.88867 11.4477 8.33639 11 8.88867 11H11.8887V8C11.8887 7.44772 12.3364 7 12.8887 7Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoAddCircle;
