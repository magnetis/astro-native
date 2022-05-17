import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function EmailSend({
  id = 'EmailSendIcon',
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
        d="M6.88844 7.03235C6.88844 5.92778 7.78387 5.03235 8.88844 5.03235H20.8884C21.993 5.03235 22.8884 5.92778 22.8884 7.03235V16.9676C22.8884 18.0721 21.993 18.9676 20.8884 18.9676H11.8884C11.3362 18.9676 10.8884 18.5199 10.8884 17.9676C10.8884 17.4153 11.3362 16.9676 11.8884 16.9676H20.8884V9.00472L16.6885 12.1547C15.6218 12.9547 14.1552 12.9547 13.0885 12.1547L8.88665 9.00333C8.85543 9.5275 8.42045 9.94294 7.88844 9.94294C7.33616 9.94294 6.88844 9.49523 6.88844 8.94294V7.03235ZM9.59201 7.03235L14.2885 10.5547C14.644 10.8214 15.1329 10.8214 15.4885 10.5547L20.1849 7.03235H9.59201ZM5.88867 12.4256C5.88867 11.8734 6.33639 11.4256 6.88867 11.4256L8.88867 11.4256C9.44096 11.4256 9.88867 11.8734 9.88867 12.4256C9.88867 12.9779 9.44096 13.4256 8.88867 13.4256L6.88867 13.4256C6.33639 13.4256 5.88867 12.9779 5.88867 12.4256ZM2.88867 15.4061C2.88867 14.8538 3.33639 14.4061 3.88867 14.4061H8.88867C9.44096 14.4061 9.88867 14.8538 9.88867 15.4061C9.88867 15.9584 9.44096 16.4061 8.88867 16.4061H3.88867C3.33639 16.4061 2.88867 15.9584 2.88867 15.4061Z"
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  );
}

export default EmailSend;
