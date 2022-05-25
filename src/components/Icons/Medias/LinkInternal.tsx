import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function LinkInternal({
  id = 'LinkInternalIcon',
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
        d="M3.94141 6.78746C3.94141 5.68289 4.83684 4.78746 5.94141 4.78746H10.9414C11.4937 4.78746 11.9414 5.23518 11.9414 5.78746C11.9414 6.33975 11.4937 6.78746 10.9414 6.78746H5.94141V18.7875H17.9414V13.7875C17.9414 13.2352 18.3891 12.7875 18.9414 12.7875C19.4937 12.7875 19.9414 13.2352 19.9414 13.7875V18.7875C19.9414 19.892 19.046 20.7875 17.9414 20.7875H5.94141C4.83684 20.7875 3.94141 19.892 3.94141 18.7875V6.78746Z"
        fill={fill}
      />
      <Path
        d="M15.9208 13.65C16.4549 13.65 16.8878 14.0829 16.8878 14.6169C16.8878 15.151 16.4549 15.5839 15.9208 15.5839L10.1189 15.5839C9.86248 15.5839 9.61653 15.482 9.43518 15.3007C9.25384 15.1194 9.15196 14.8734 9.15196 14.6169L9.15197 8.81506C9.15197 8.28101 9.5849 7.84808 10.1189 7.84808C10.653 7.84808 11.0859 8.28102 11.0859 8.81506L11.0859 12.2824L20.072 3.29641C20.4496 2.91878 21.0619 2.91878 21.4395 3.29641C21.8171 3.67404 21.8171 4.28629 21.4395 4.66392L12.4534 13.65H15.9208Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default LinkInternal;
