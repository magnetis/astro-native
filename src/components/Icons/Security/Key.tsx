import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Key({
  id = 'KeyIcon',
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
        d="M20.0886 4.78575C20.483 5.17229 20.4895 5.80542 20.1029 6.19989L19.5647 6.74917L21.6084 8.79289C21.9989 9.18342 21.9989 9.81658 21.6084 10.2071C21.2179 10.5976 20.5847 10.5976 20.1942 10.2071L18.1648 8.17774L17.6337 8.71977L17.3345 9.01894L18.6084 10.2929C18.9989 10.6834 18.9989 11.3166 18.6084 11.7071C18.2179 12.0976 17.5847 12.0976 17.1942 11.7071L15.9202 10.4332L12.2179 14.1355C12.6429 14.8225 12.8887 15.6331 12.8887 16.5C12.8887 18.9853 10.874 21 8.38867 21C5.90339 21 3.88867 18.9853 3.88867 16.5C3.88867 14.0147 5.90339 12 8.38867 12C9.28193 12 10.1151 12.2609 10.8152 12.7098L16.2158 7.30915L18.6744 4.80011C19.061 4.40564 19.6941 4.39921 20.0886 4.78575ZM8.38867 14C7.00796 14 5.88867 15.1193 5.88867 16.5C5.88867 17.8807 7.00796 19 8.38867 19C9.76938 19 10.8887 17.8807 10.8887 16.5C10.8887 15.8185 10.6173 15.2023 10.1744 14.7504C9.71951 14.2862 9.08841 14 8.38867 14Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Key;
