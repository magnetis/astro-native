import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MoneyBag({
  id = 'MoneyBagIcon',
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
        d="M7.62042 2.38841C7.80735 2.11962 8.11402 1.95935 8.44142 1.95935H16.8076C17.1232 1.95935 17.4203 2.10836 17.609 2.36132C17.7978 2.61428 17.856 2.94151 17.7662 3.24407L16.8012 6.49305L18.1187 5.17556C18.5092 4.78503 19.1424 4.78503 19.5329 5.17556C19.9234 5.56608 19.9234 6.19924 19.5329 6.58977L18.6806 7.44208L19.7498 7.77866C20.2766 7.94448 20.5693 8.50597 20.4034 9.03277C20.2376 9.55957 19.6761 9.8522 19.1493 9.68638L18.7485 9.5602C19.8354 10.9429 20.8162 12.9338 20.8162 15.5922C20.8162 17.1777 20.2999 18.4216 19.4923 19.3643C18.7011 20.2881 17.6744 20.8728 16.7115 21.2467C15.7457 21.6217 14.7941 21.8041 14.0938 21.8941C13.7411 21.9395 13.4455 21.9623 13.2352 21.9737C13.1299 21.9794 13.0455 21.9824 12.9855 21.9838C12.9555 21.9846 12.9316 21.985 12.9142 21.9852L12.8929 21.9853L12.8861 21.9854L12.8836 21.9854L12.8757 21.9854L12.8541 21.9852C12.8363 21.9851 12.8117 21.9848 12.7809 21.9841C12.7192 21.9828 12.6322 21.9802 12.5236 21.9747C12.3065 21.9639 12.0011 21.9421 11.6364 21.8978C10.9123 21.8098 9.92884 21.6304 8.931 21.2589C7.93726 20.889 6.87542 20.3086 6.05545 19.3865C5.2171 18.4437 4.67676 17.1925 4.67676 15.5922C4.67676 12.5713 5.96593 10.4167 7.24177 9.03512C7.31134 8.95978 7.3809 8.88669 7.45025 8.81583C7.09931 8.66057 6.85445 8.30932 6.85445 7.90088C6.85445 7.34859 7.30216 6.90088 7.85445 6.90088H8.83813L7.50395 3.30742C7.38999 3.00049 7.4335 2.65721 7.62042 2.38841ZM10.5343 8.90088C10.4314 8.96161 10.2914 9.04879 10.1254 9.16336C9.7413 9.42837 9.22583 9.83457 8.7111 10.392C7.68727 11.5007 6.67676 13.1918 6.67676 15.5922C6.67676 16.7025 7.03719 17.4808 7.55001 18.0575C8.08121 18.6548 8.82092 19.0839 9.62873 19.3846C10.4324 19.6838 11.2505 19.8362 11.8776 19.9123C12.1885 19.9501 12.4461 19.9684 12.6231 19.9772C12.7115 19.9816 12.7793 19.9836 12.8232 19.9846C12.8451 19.985 12.8611 19.9852 12.8705 19.9853L12.8797 19.9854L12.8824 19.9854H12.8835L12.8916 19.9853C12.9004 19.9852 12.9153 19.985 12.9361 19.9844C12.9777 19.9834 13.0423 19.9812 13.1266 19.9767C13.2954 19.9675 13.5415 19.9487 13.8387 19.9105C14.4384 19.8334 15.2201 19.6803 15.9876 19.3823C16.7581 19.0831 17.4647 18.6572 17.9734 18.0633C18.4658 17.4883 18.8162 16.7077 18.8162 15.5922C18.8162 13.1933 17.8294 11.4987 16.8336 10.3886C16.3329 9.83034 15.8318 9.42307 15.459 9.1574C15.3036 9.04665 15.1717 8.9614 15.0731 8.90088H10.5343ZM14.5937 6.90088H10.9715L9.8794 3.95935H15.4674L14.5937 6.90088Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7435 10.7379C13.1577 10.7379 13.4935 11.0737 13.4935 11.4879V11.6483C13.944 11.6918 14.373 11.8698 14.7233 12.1617C15.0415 12.4269 15.0845 12.8998 14.8194 13.218C14.5542 13.5362 14.0813 13.5792 13.7631 13.314C13.6265 13.2002 13.4543 13.1379 13.2765 13.1379H11.9932C11.8275 13.1379 11.6932 13.2722 11.6932 13.4379C11.6932 13.6036 11.8275 13.7379 11.9932 13.7379H13.4932C14.4873 13.7379 15.2932 14.5438 15.2932 15.5379C15.2932 16.5319 14.4875 17.3377 13.4935 17.3379V17.4879C13.4935 17.9021 13.1577 18.2379 12.7435 18.2379C12.3293 18.2379 11.9935 17.9021 11.9935 17.4879V17.3379H11.8053C11.2881 17.3379 10.7912 17.1362 10.4204 16.7756C10.1234 16.4869 10.1167 16.0121 10.4054 15.7151C10.6942 15.4181 11.169 15.4114 11.466 15.7001C11.5569 15.7885 11.6786 15.8379 11.8053 15.8379H13.4932C13.6589 15.8379 13.7932 15.7036 13.7932 15.5379C13.7932 15.3722 13.6589 15.2379 13.4932 15.2379H11.9932C10.9991 15.2379 10.1932 14.432 10.1932 13.4379C10.1932 12.4438 10.9991 11.6379 11.9932 11.6379L11.9935 11.4879C11.9935 11.0737 12.3293 10.7379 12.7435 10.7379Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MoneyBag;