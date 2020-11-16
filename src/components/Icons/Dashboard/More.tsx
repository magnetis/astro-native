import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';
import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function More({
  id = 'MoreIcon',
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8308 3.93369C15.3813 3.88918 15.7915 3.40684 15.747 2.85635C15.7025 2.30586 15.2202 1.89568 14.6697 1.94019C8.55026 2.43495 3.20321 6.7887 1.80213 13.0484C0.0740634 20.7689 5.00962 28.4248 12.7954 30.1675C18.7595 31.5024 24.6838 28.9872 27.91 24.2709C28.2218 23.8151 28.1051 23.1928 27.6493 22.881C27.1934 22.5691 26.5711 22.6859 26.2593 23.1417C23.486 27.1958 18.3822 29.3684 13.2323 28.2157C6.50196 26.7093 2.27202 20.1056 3.75384 13.4852C4.95517 8.118 9.54607 4.36096 14.8308 3.93369ZM10 18C11.1046 18 12 17.1046 12 16C12 14.8954 11.1046 14 10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18ZM26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default More;
