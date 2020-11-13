import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Sliders({
  id = 'SlidersIcon',
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
        d="M7 8.97368H15.1724C15.5833 7.82323 16.683 7 17.975 7C19.267 7 20.3667 7.82323 20.7776 8.97368H24.072C24.6243 8.97368 25.072 9.4214 25.072 9.97368C25.072 10.526 24.6243 10.9737 24.072 10.9737H20.7776C20.3667 12.1241 19.267 12.9474 17.975 12.9474C16.683 12.9474 15.5833 12.1241 15.1724 10.9737H7C6.44772 10.9737 6 10.526 6 9.97368C6 9.4214 6.44772 8.97368 7 8.97368ZM18.95 9.97368C18.95 10.5113 18.5136 10.9474 17.975 10.9474C17.4364 10.9474 17 10.5113 17 9.97368C17 9.43608 17.4364 9 17.975 9C18.5136 9 18.95 9.43608 18.95 9.97368ZM14.7632 17.0132C14.3415 18.1429 13.2521 18.9474 11.975 18.9474C10.6979 18.9474 9.60855 18.1429 9.18681 17.0132H7.09371C6.54143 17.0132 6.09371 16.5654 6.09371 16.0132C6.09371 15.4609 6.54143 15.0132 7.09371 15.0132H9.15861C9.55823 13.8421 10.6683 13 11.975 13C13.2817 13 14.3918 13.8421 14.7914 15.0132H24.072C24.6243 15.0132 25.072 15.4609 25.072 16.0132C25.072 16.5654 24.6243 17.0132 24.072 17.0132H14.7632ZM11.975 16.9474C12.5136 16.9474 12.95 16.5113 12.95 15.9737C12.95 15.4361 12.5136 15 11.975 15C11.4364 15 11 15.4361 11 15.9737C11 16.5113 11.4364 16.9474 11.975 16.9474ZM23.0276 23.0263C22.6167 24.1768 21.517 25 20.225 25C18.933 25 17.8333 24.1768 17.4224 23.0263H7C6.44772 23.0263 6 22.5786 6 22.0263C6 21.474 6.44772 21.0263 7 21.0263H17.4224C17.8333 19.8759 18.933 19.0526 20.225 19.0526C21.517 19.0526 22.6167 19.8759 23.0276 21.0263H24.3351C24.8874 21.0263 25.3351 21.474 25.3351 22.0263C25.3351 22.5786 24.8874 23.0263 24.3351 23.0263H23.0276ZM20.225 23C20.7636 23 21.2 22.5639 21.2 22.0263C21.2 21.4887 20.7636 21.0526 20.225 21.0526C19.6864 21.0526 19.25 21.4887 19.25 22.0263C19.25 22.5639 19.6864 23 20.225 23Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Sliders;
