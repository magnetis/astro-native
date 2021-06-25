import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Camera({
  id = 'CameraIcon',
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
        d="M26.3939 10.4209H22.4698L21.964 7.89168C21.8375 7.25923 21.2776 6.80017 20.6325 6.80017H13.056C12.4111 6.80017 11.8511 7.25923 11.7246 7.89168L11.2188 10.4209H7.29471C6.17171 10.4209 5.25808 11.3345 5.25808 12.4575V24.2247C5.25808 25.3478 6.17171 26.2614 7.29471 26.2614H26.3939C27.5168 26.2614 28.4305 25.3478 28.4305 24.2247V12.4575C28.4305 11.3345 27.5168 10.4209 26.3939 10.4209ZM13.056 8.15793H20.6325L21.0852 10.4209H12.6034L13.056 8.15793ZM27.0727 24.2247C27.0727 24.599 26.7682 24.9036 26.3939 24.9036H7.29471C6.92038 24.9036 6.61584 24.599 6.61584 24.2247V12.4575C6.61584 12.0832 6.92038 11.7786 7.29471 11.7786H26.3939C26.7682 11.7786 27.0727 12.0832 27.0727 12.4575V24.2247Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8443 13.3174C14.0742 13.3174 11.8206 15.571 11.8206 18.3411C11.8206 21.1111 14.0742 23.3648 16.8443 23.3648C19.6144 23.3648 21.868 21.1111 21.868 18.3411C21.868 15.571 19.6144 13.3174 16.8443 13.3174ZM16.8443 22.007C14.8229 22.007 13.1783 20.3624 13.1783 18.3411C13.1783 16.3197 14.8229 14.6752 16.8443 14.6752C18.8657 14.6752 20.5102 16.3197 20.5102 18.3411C20.5102 20.3624 18.8657 22.007 16.8443 22.007Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0512 13.3174H8.87878C8.50385 13.3174 8.19989 13.6213 8.19989 13.9963C8.19989 14.3712 8.50385 14.6752 8.87878 14.6752H11.0512C11.4261 14.6752 11.7301 14.3712 11.7301 13.9963C11.7301 13.6213 11.4261 13.3174 11.0512 13.3174Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Camera;
