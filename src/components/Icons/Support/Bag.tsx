import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Bag({
  id = 'BagIcon',
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
        d="M16.5 3.5C12 3.5 11.5 6.191 11.5 9.5H9.5C7.84315 9.5 6.5 10.6753 6.5 12.125L4.5 26.875C4.5 28.3247 5.84315 29.5 7.5 29.5H25.5C27.1569 29.5 28.5 28.3247 28.5 26.875L26.5 12.125C26.5 10.6753 25.1569 9.5 23.5 9.5H21.5C21.5 6.191 21 3.5 16.5 3.5V5.5C18.981 5.5 19.5 7.019 19.5 9.5H13.5C13.5 7.019 14.019 5.5 16.5 5.5V3.5ZM19.5 11.5H13.5V15.5C13.5 16 13 16.5 12.5 16.5C12 16.5 11.5 15.914 11.5 15.5V11.5H9.5C8.94772 11.5 8.5 11.8806 8.5 12.35L6.5 26.65C6.5 27.1194 6.94772 27.5 7.5 27.5H25.5C26.0523 27.5 26.5 27.1194 26.5 26.65L24.5 12.35C24.5 11.8806 24.0523 11.5 23.5 11.5H21.5V15.5C21.5 15.914 21 16.5 20.5 16.5C20 16.5 19.5 16 19.5 15.5V11.5Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Bag;
