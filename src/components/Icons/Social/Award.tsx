import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Award({
  id = 'AwardIcon',
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
        d="M12.8896 12.9995C15.0988 12.9995 16.8896 11.2087 16.8896 8.99951C16.8896 6.79037 15.0988 4.99951 12.8896 4.99951C10.6805 4.99951 8.88965 6.79037 8.88965 8.99951C8.88965 11.2087 10.6805 12.9995 12.8896 12.9995ZM12.8896 14.9995C16.2034 14.9995 18.8896 12.3132 18.8896 8.99951C18.8896 5.6858 16.2034 2.99951 12.8896 2.99951C9.57594 2.99951 6.88965 5.6858 6.88965 8.99951C6.88965 12.3132 9.57594 14.9995 12.8896 14.9995Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6542 12.3744C16.202 12.304 16.7031 12.691 16.7734 13.2388L17.6255 19.873C17.6745 20.2542 17.5006 20.6297 17.1783 20.8391C16.856 21.0484 16.4422 21.0544 16.1139 20.8547L12.8831 18.8889L9.63191 20.856C9.30201 21.0556 8.88674 21.0477 8.56462 20.8358C8.2425 20.6238 8.07092 20.2456 8.12365 19.8636L9.03947 13.2295C9.115 12.6824 9.61973 12.3001 10.1668 12.3756C10.7139 12.4512 11.0962 12.9559 11.0207 13.503L10.3918 18.0587L12.3669 16.8637C12.6859 16.6707 13.0858 16.6712 13.4043 16.865L15.3769 18.0652L14.7897 13.4936C14.7194 12.9458 15.1064 12.4447 15.6542 12.3744Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Award;
