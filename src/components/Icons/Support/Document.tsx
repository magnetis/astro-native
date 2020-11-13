import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Document({
  id = 'DocumentIcon',
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
        d="M24.4152 26.7723H8.22772V5.22772H24.4152V26.7723ZM26.6429 27.7809C26.6429 27.8471 26.6371 27.912 26.626 27.975C26.5807 28.5486 26.1009 29 25.5157 29H7.4165C7.03443 29 6.69728 28.8076 6.49665 28.5145C6.19724 28.3148 6 27.974 6 27.5871V4.11386C6 3.49869 6.49869 3 7.11386 3H25.474C26.0892 3 26.5879 3.49869 26.5879 4.11386C26.5879 4.17625 26.5827 4.23745 26.5729 4.29705C26.6181 4.4183 26.6429 4.54956 26.6429 4.68661V27.7809ZM22.4142 10.2401C22.4142 9.62492 21.9155 9.12622 21.3003 9.12622H11.8653C11.2501 9.12622 10.7514 9.62492 10.7514 10.2401C10.7514 10.8553 11.2501 11.3539 11.8653 11.3539H21.3003C21.9155 11.3539 22.4142 10.8553 22.4142 10.2401ZM21.3003 14.6955C21.9155 14.6955 22.4142 15.1942 22.4142 15.8094C22.4142 16.4245 21.9155 16.9232 21.3003 16.9232H11.8653C11.2501 16.9232 10.7514 16.4245 10.7514 15.8094C10.7514 15.1942 11.2501 14.6955 11.8653 14.6955H21.3003ZM22.4142 21.3787C22.4142 20.7635 21.9155 20.2648 21.3003 20.2648H11.8653C11.2501 20.2648 10.7514 20.7635 10.7514 21.3787C10.7514 21.9938 11.2501 22.4925 11.8653 22.4925H21.3003C21.9155 22.4925 22.4142 21.9938 22.4142 21.3787Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Document;
