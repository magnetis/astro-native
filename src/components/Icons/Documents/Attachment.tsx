import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function Attachment({
  id = 'AttachmentIcon',
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
        d="M20.3517 5.57573C19.6644 4.82597 18.4233 4.77977 17.596 5.60711L9.49597 13.7071C9.2865 13.9166 9.2865 14.1834 9.49597 14.3929C9.70545 14.6024 9.97228 14.6024 10.1818 14.3929L16.8818 7.6929C17.2723 7.30238 17.9054 7.30238 18.296 7.6929C18.6865 8.08342 18.6865 8.71659 18.296 9.10711L11.596 15.8071C10.6054 16.7976 9.07229 16.7976 8.08176 15.8071C7.09124 14.8166 7.09124 13.2834 8.08176 12.2929L16.1818 4.1929C17.7493 2.62537 20.2966 2.57436 21.8112 4.20821C23.3635 5.77662 23.4092 8.31157 21.7818 9.82133L12.296 19.3071C10.1054 21.4976 6.67228 21.4976 4.48176 19.3071C2.29124 17.1166 2.29124 13.6834 4.48176 11.4929L12.5818 3.3929C12.9723 3.00238 13.6054 3.00238 13.996 3.3929C14.3865 3.78342 14.3865 4.41659 13.996 4.80711L5.89597 12.9071C4.4865 14.3166 4.4865 16.4834 5.89597 17.8929C7.30545 19.3024 9.47228 19.3024 10.8818 17.8929L20.3818 8.3929C20.392 8.38266 20.4025 8.37264 20.4131 8.36285C21.1629 7.67557 21.2091 6.43446 20.3818 5.60711C20.3715 5.59687 20.3615 5.58641 20.3517 5.57573Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Attachment;
