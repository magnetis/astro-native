import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function StarFilled({
  id = 'StarFilledIcon',
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
        d="M12.8887 2.5C13.2675 2.5 13.6137 2.714 13.7831 3.05279L16.362 8.2106L22.0326 9.03541C22.4093 9.0902 22.7222 9.35402 22.8398 9.71599C22.9574 10.078 22.8593 10.4753 22.5868 10.741L18.4597 14.7649L19.3881 20.4385C19.4494 20.8135 19.293 21.1908 18.9843 21.4124C18.6757 21.6339 18.2681 21.6614 17.9325 21.4834L12.8887 18.8071L7.84492 21.4834C7.50929 21.6614 7.10173 21.6339 6.79307 21.4124C6.48441 21.1908 6.32797 20.8135 6.38933 20.4385L7.31773 14.7649L3.1906 10.741C2.9181 10.4753 2.82003 10.078 2.93764 9.71599C3.05525 9.35402 3.36813 9.0902 3.74476 9.03541L9.41537 8.2106L11.9943 3.05279C12.1637 2.714 12.5099 2.5 12.8887 2.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default StarFilled;
