import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmailOpen({
  id = 'EmailOpenIcon',
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
        d="M13.7779 2.29819C13.1739 1.96261 12.4394 1.96261 11.8354 2.29819L3.83535 6.74264C3.20042 7.09538 2.80664 7.76462 2.80664 8.49095V17.9025C2.80664 19.0071 3.70207 19.9025 4.80664 19.9025H20.8066C21.9112 19.9025 22.8066 19.0071 22.8066 17.9025V8.49095C22.8066 7.76462 22.4129 7.09538 21.7779 6.74264L13.7779 2.29819ZM5.6956 7.99709L12.8066 4.04651L19.9163 7.99629L12.7816 11.8163L5.6956 7.99709ZM4.80664 9.78996V17.9025H20.8066V9.78819L13.252 13.833C12.9563 13.9914 12.6009 13.9909 12.3056 13.8317L4.80664 9.78996Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default EmailOpen;
