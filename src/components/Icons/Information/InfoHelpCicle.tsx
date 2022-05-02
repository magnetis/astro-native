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
        d="M12.8887 4C8.47039 4 4.88867 7.58172 4.88867 12C4.88867 16.4183 8.47039 20 12.8887 20C17.307 20 20.8887 16.4183 20.8887 12C20.8887 7.58172 17.307 4 12.8887 4ZM2.88867 12C2.88867 6.47715 7.36582 2 12.8887 2C18.4115 2 22.8887 6.47715 22.8887 12C22.8887 17.5228 18.4115 22 12.8887 22C7.36582 22 2.88867 17.5228 2.88867 12Z"
        fill={fill}
      />
      <Path
        d="M12.8887 14C12.3364 14 11.8887 13.5523 11.8887 13V12C11.8887 11.4477 12.3364 11 12.8887 11C13.441 11 13.8887 11.4477 13.8887 12V13C13.8887 13.5523 13.441 14 12.8887 14Z"
        fill={fill}
      />
      <Path
        d="M11.3887 16.5C11.3887 15.6716 12.0602 15 12.8887 15C13.7171 15 14.3887 15.6716 14.3887 16.5C14.3887 17.3284 13.7171 18 12.8887 18C12.0602 18 11.3887 17.3284 11.3887 16.5Z"
        fill={fill}
      />
      <Path
        d="M13.2786 7.81137C12.3216 7.7658 11.5191 8.3004 11.3751 9.1644C11.2843 9.70917 10.769 10.0772 10.2243 9.9864C9.6795 9.8956 9.31148 9.38037 9.40228 8.8356C9.75828 6.69961 11.7058 5.73421 13.3737 5.81363C14.2281 5.85432 15.1062 6.16099 15.7824 6.79278C16.4753 7.44027 16.8887 8.36777 16.8887 9.5C16.8887 10.7913 16.3806 11.7489 15.5059 12.3321C14.7027 12.8675 13.7182 13 12.8887 13C12.3364 13 11.8887 12.5523 11.8887 12C11.8887 11.4477 12.3364 11 12.8887 11C13.5591 11 14.0746 10.8825 14.3965 10.668C14.6468 10.5011 14.8887 10.2087 14.8887 9.5C14.8887 8.88224 14.6771 8.49723 14.4169 8.2541C14.1399 7.99526 13.7367 7.83318 13.2786 7.81137Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default InfoErrorCircle;
