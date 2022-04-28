import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowRightDown({
  id = 'ArrowRightDownIcon',
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
        d="M2.88867 1C2.88867 0.447715 3.33639 0 3.88867 0L11.8887 5.36442e-07C12.441 5.36442e-07 12.8887 0.447716 12.8887 1V9C12.8887 9.55229 12.441 10 11.8887 10C11.3364 10 10.8887 9.55229 10.8887 9V3.41421L2.59578 11.7071C2.20525 12.0976 1.57209 12.0976 1.18157 11.7071C0.791041 11.3166 0.791041 10.6834 1.18157 10.2929L9.47446 2L3.88867 2C3.33639 2 2.88867 1.55228 2.88867 1Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowRightDown;
