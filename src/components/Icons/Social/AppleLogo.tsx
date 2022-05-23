import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function AppleLogo({
  id = 'AppleLogoIcon',
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
        d="M17.9937 12.5629C18.0199 15.2868 20.4771 16.1933 20.5042 16.2049C20.4834 16.2687 20.1117 17.4967 19.2098 18.7649C18.4302 19.8614 17.6209 20.9539 16.3464 20.9768C15.094 20.9988 14.6912 20.2619 13.2592 20.2619C11.8276 20.2619 11.3803 20.9539 10.1946 20.9988C8.96419 21.0437 8.02723 19.8129 7.24113 18.7206C5.63491 16.4858 4.40736 12.4057 6.05559 9.6515C6.87436 8.28376 8.33784 7.41777 9.92615 7.39546C11.1343 7.37329 12.2747 8.17756 13.0132 8.17756C13.7512 8.17756 15.137 7.21029 16.5939 7.35228C17.2038 7.37676 18.9158 7.58931 20.015 9.13787C19.9266 9.19076 17.9725 10.2855 17.9937 12.5629ZM15.6399 5.87399C16.2931 5.11319 16.7327 4.05377 16.6129 3C15.6712 3.03637 14.5327 3.60375 13.8574 4.36426C13.2521 5.03755 12.7221 6.11552 12.865 7.14842C13.9146 7.22666 14.9866 6.63523 15.6399 5.87399Z"
        stroke={fill}
        strokeWidth="2"
      />
    </BaseIcon>
  );
}

export default AppleLogo;
