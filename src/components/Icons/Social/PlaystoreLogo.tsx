import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function PlaystoreLogo({
  id = 'PlaystoreLogoIcon',
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
        d="M6.66617 3.58829C6.55511 3.47687 6.4325 3.41988 6.34537 3.39084C6.24512 3.35742 6.15775 3.34941 6.11405 3.34649C6.07172 3.34367 6.03162 3.34373 6.01665 3.34376L6.01367 3.34376C5.74011 3.34376 5.45386 3.43822 5.23412 3.65796C5.01438 3.8777 4.91992 4.16395 4.91992 4.43751V19.5625C4.91992 19.8361 5.01438 20.1223 5.23412 20.3421C5.45386 20.5618 5.74011 20.6563 6.01367 20.6563L6.01665 20.6563C6.03162 20.6563 6.07172 20.6563 6.11405 20.6535C6.15775 20.6506 6.24512 20.6426 6.34538 20.6092C6.4325 20.5801 6.5551 20.5231 6.66616 20.4117C10.1524 18.5271 16.8653 14.8346 20.2573 12.9352C20.5314 12.7901 20.6877 12.545 20.7588 12.3317C20.8202 12.1475 20.845 11.906 20.7654 11.6629C20.7218 11.4802 20.6238 11.3354 20.526 11.2376C20.4426 11.1542 20.3249 11.0705 20.1786 11.0208C16.7623 9.10883 10.1256 5.45841 6.66617 3.58829ZM12.6288 10.8515L9.18329 6.66583C10.6824 7.48539 12.3371 8.39387 13.9362 9.27512L12.6288 10.8515ZM11.6538 12.0273L6.41992 5.66904V18.3386L11.6538 12.0273ZM9.21664 17.316L12.6246 13.2065L13.8937 14.7483C12.3197 15.6157 10.6937 16.5084 9.21664 17.316ZM13.5996 12.0308L15.2731 10.0128C16.5946 10.7427 17.8324 11.4291 18.8559 12C17.8212 12.5772 16.5676 13.2723 15.2298 14.0112L13.5996 12.0308Z"
        fill={fill}
        fillOpacity="0.96"
      />
    </BaseIcon>
  );
}

export default PlaystoreLogo;
