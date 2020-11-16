import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Cup({
  id = 'CupIcon',
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
        d="M12.7276 6.90625L12.7274 6.90653C12.2002 7.75357 11.4783 8.91331 12.5662 10.594C12.7354 10.8553 13.033 11 13.3379 11C13.4964 11 13.6566 10.9608 13.8018 10.8792C14.2276 10.6396 14.3645 10.124 14.1075 9.72713C13.5699 8.89669 13.8085 8.51326 14.2842 7.7491L14.2845 7.74852C14.3555 7.63477 14.4266 7.52034 14.4953 7.40363C15.4285 5.81938 14.9284 4.75554 14.1197 3.42568C13.8749 3.02243 13.3255 2.88065 12.8929 3.10928C12.4603 3.33769 12.3082 3.84989 12.5534 4.25291C13.2714 5.43369 13.391 5.79157 12.9171 6.59601C12.8627 6.68894 12.8058 6.78045 12.7493 6.87132L12.7276 6.90625ZM22 12H8C7.44772 12 7 12.4477 7 13V18C7 22.4183 10.5817 26 15 26C18.3574 26 21.2317 23.9318 22.4185 21H24C26.2091 21 28 19.2091 28 17C28 14.7909 26.2091 13 24 13H23C23 12.4477 22.5523 12 22 12ZM23 15V18V19H24C25.1046 19 26 18.1046 26 17C26 15.8954 25.1046 15 24 15H23ZM21 14H9V18C9 21.3137 11.6863 24 15 24C18.3137 24 21 21.3137 21 18V14ZM5 28C5 27.4477 5.44772 27 6 27H24C24.5523 27 25 27.4477 25 28C25 28.5523 24.5523 29 24 29H6C5.44772 29 5 28.5523 5 28ZM16.405 7.79238L16.405 7.79234L16.4071 7.7879C16.438 7.72209 16.4692 7.6556 16.499 7.58777C16.6746 7.19191 16.6762 7.07065 16.3145 6.27869C16.1262 5.867 16.2434 5.34406 16.5765 5.11134C16.9097 4.87791 17.3318 5.0236 17.5203 5.43552L17.5206 5.43614C17.8802 6.22353 18.2878 7.11614 17.7133 8.41209C17.6779 8.49178 17.6414 8.56969 17.6052 8.64692L17.6025 8.65273L17.6021 8.6535C17.3634 9.16229 17.3065 9.28339 17.5101 9.70046C17.7079 10.1056 17.6025 10.6321 17.2752 10.8767C17.1633 10.96 17.0399 11 16.9182 11C16.6834 11 16.4545 10.8522 16.3245 10.5857C15.6973 9.3002 16.1232 8.39282 16.405 7.79238Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Cup;
