import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function ArrowUndo({
  id = 'ArrowUndoIcon',
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
        d="M13.0958 2.29289C13.4863 2.68342 13.4863 3.31658 13.0958 3.70711L11.8029 5H13.3887C18.041 5 21.8887 8.84772 21.8887 13.5C21.8887 18.1523 18.041 22 13.3887 22C8.73639 22 4.88867 18.1523 4.88867 13.5C4.88867 12.9477 5.33639 12.5 5.88867 12.5C6.44096 12.5 6.88867 12.9477 6.88867 13.5C6.88867 17.0477 9.84096 20 13.3887 20C16.9364 20 19.8887 17.0477 19.8887 13.5C19.8887 9.95228 16.9364 7 13.3887 7H11.8029L13.0958 8.29289C13.4863 8.68342 13.4863 9.31658 13.0958 9.70711C12.7053 10.0976 12.0721 10.0976 11.6816 9.70711L8.68157 6.70711C8.29104 6.31658 8.29104 5.68342 8.68157 5.29289L11.6816 2.29289C12.0721 1.90237 12.7053 1.90237 13.0958 2.29289Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default ArrowUndo;
