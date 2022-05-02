import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function InfoErrorCircle({
  id = 'InfoErrorCircleIcon',
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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.3069 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.3069 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12ZM8.68157 7.79289C9.07209 7.40237 9.70525 7.40237 10.0958 7.79289L12.8887 10.5858L15.6816 7.79289C16.0721 7.40237 16.7053 7.40237 17.0958 7.79289C17.4863 8.18342 17.4863 8.81658 17.0958 9.20711L14.3029 12L17.0958 14.7929C17.4863 15.1834 17.4863 15.8166 17.0958 16.2071C16.7053 16.5976 16.0721 16.5976 15.6816 16.2071L12.8887 13.4142L10.0958 16.2071C9.70525 16.5976 9.07209 16.5976 8.68157 16.2071C8.29104 15.8166 8.29104 15.1834 8.68157 14.7929L11.4745 12L8.68157 9.20711C8.29104 8.81658 8.29104 8.18342 8.68157 7.79289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoErrorCircle;
