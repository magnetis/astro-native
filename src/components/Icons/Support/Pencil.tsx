import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Pencil({
  id = 'PencilIcon',
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
        d="M6.80768 25.0937C6.87897 25.0937 6.95027 25.0842 7.01682 25.0651L12.4735 23.5916C12.6113 23.5536 12.7349 23.4823 12.8347 23.3825L24.2995 11.9178C25.3547 10.8625 25.3547 9.14187 24.2995 8.08666L23.0066 6.79379C22.4933 6.28044 21.8136 6 21.0911 6C20.3686 6 19.6889 6.28044 19.1755 6.79379L7.71079 18.2585C7.61097 18.3584 7.53967 18.4819 7.50164 18.6198L6.02815 24.0765C5.9521 24.3569 6.0329 24.6564 6.23729 24.8607C6.38939 25.0129 6.59378 25.0937 6.80768 25.0937ZM8.6947 20.388L10.7006 22.3938L7.94845 23.1353L8.6947 20.388ZM9.42194 18.8289L12.2644 21.6713L18.9141 15.0121L16.0764 12.1744L9.42194 18.8289ZM17.222 11.0337L18.434 9.82158L21.2717 12.6593L20.0596 13.8713L17.222 11.0337ZM21.8611 7.93931C21.652 7.73492 21.3763 7.62085 21.0863 7.62085C20.7964 7.62085 20.5207 7.73492 20.3163 7.93931L19.5748 8.68081L22.4125 11.5185L23.154 10.777C23.5818 10.3539 23.5818 9.65997 23.154 9.23218L21.8611 7.93931Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Pencil;
