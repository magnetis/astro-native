import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Update({
  id = 'UpdateIcon',
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
        d="M6.00001 14.1089C5.99975 14.2187 6.01856 14.3287 6.0566 14.4328L6.06077 14.444C6.18495 14.77 6.48597 15 6.83759 15H11.8631C12.3257 15 12.7007 14.6019 12.7007 14.1109C12.7007 13.6199 12.3257 13.2218 11.8631 13.2218H8.95212L11.2976 10.8823C12.9429 9.13558 15.2905 8.41478 17.5345 8.95374C19.7785 9.4927 21.6051 11.2161 22.3726 13.5184C22.5269 13.9813 23.0055 14.2238 23.4416 14.06C23.8777 13.8962 24.1061 13.3881 23.9518 12.9252C22.9924 10.0473 20.7091 7.89308 17.9041 7.21937C15.0991 6.54567 12.1647 7.44668 10.1316 9.60587L7.67518 12.0556V8.77627C7.67518 8.28523 7.30018 7.88717 6.83759 7.88717C6.37501 7.88717 6.00001 8.28523 6.00001 8.77627V14.1089ZM25 18.7797C25.0003 18.6836 24.9814 18.5874 24.9434 18.4963L24.9392 18.4865C24.8151 18.2013 24.514 18 24.1624 18H19.1369C18.6743 18 18.2993 18.3483 18.2993 18.778C18.2993 19.2076 18.6743 19.5559 19.1369 19.5559H22.0479L19.7024 21.603C18.0571 23.1314 15.7096 23.7621 13.4655 23.2905C11.2215 22.8189 9.39494 21.3109 8.62743 19.2964C8.47311 18.8914 7.99449 18.6792 7.5584 18.8225C7.12231 18.9659 6.89389 19.4104 7.04821 19.8155C8.0076 22.3336 10.2909 24.2186 13.0959 24.808C15.9009 25.3975 18.8353 24.6092 20.8684 22.7199L23.3248 20.5763V23.4458C23.3248 23.8754 23.6998 24.2237 24.1624 24.2237C24.625 24.2237 25 23.8754 25 23.4458V18.7797Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Update;
