import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Faq({
  id = 'FaqIcon',
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
        d="M16.5 23.126C17.1202 23.126 17.623 22.6232 17.623 22.0029C17.623 21.3827 17.1202 20.8799 16.5 20.8799C15.8798 20.8799 15.377 21.3827 15.377 22.0029C15.377 22.6232 15.8798 23.126 16.5 23.126Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 5C10.1443 5 5 10.1434 5 16.5C5 22.8557 10.1434 28 16.5 28C22.8557 28 28 22.8566 28 16.5C28 10.1443 22.8566 5 16.5 5ZM16.5 26.2031C11.1374 26.2031 6.79688 21.8634 6.79688 16.5C6.79688 11.1374 11.1366 6.79688 16.5 6.79688C21.8626 6.79688 26.2031 11.1366 26.2031 16.5C26.2031 21.8626 21.8634 26.2031 16.5 26.2031Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 10.7725C14.5184 10.7725 12.9062 12.3846 12.9062 14.3662C12.9062 14.8624 13.3085 15.2646 13.8047 15.2646C14.3009 15.2646 14.7031 14.8624 14.7031 14.3662C14.7031 13.3754 15.5092 12.5693 16.5 12.5693C17.4908 12.5693 18.2969 13.3754 18.2969 14.3662C18.2969 15.357 17.4908 16.1631 16.5 16.1631C16.0038 16.1631 15.6016 16.5653 15.6016 17.0615V19.3076C15.6016 19.8038 16.0038 20.2061 16.5 20.2061C16.9962 20.2061 17.3984 19.8038 17.3984 19.3076V17.8463C18.9467 17.4463 20.0938 16.0377 20.0938 14.3662C20.0938 12.3846 18.4816 10.7725 16.5 10.7725Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Faq;
