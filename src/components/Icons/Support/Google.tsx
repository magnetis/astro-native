import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Google({
  id = 'GoogleIcon',
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
        d="M4 16.5C4 9.60942 9.57531 4 16.435 4C19.6082 4 22.5001 5.13408 24.7862 7.28048C24.9887 7.4697 25.1 7.73088 25.102 8.00235C25.104 8.2759 24.9941 8.53794 24.798 8.72801L21.686 11.7371C21.2969 12.1139 20.6814 12.1105 20.295 11.738L20.2936 11.7367C18.7072 10.1958 16.3532 9.79278 14.1288 10.7335C12.2951 11.5084 10.348 13.4256 10.348 16.5C10.348 19.9653 13.0914 22.762 16.435 22.762C19.3915 22.762 20.9105 21.1784 21.5648 19.804H16.435C15.8829 19.804 15.435 19.3561 15.435 18.804V14.85C15.435 14.2979 15.8829 13.85 16.435 13.85H27.32C27.8044 13.85 28.2183 14.1967 28.3041 14.6735C28.4053 15.2341 28.5 15.8855 28.5 16.77C28.5 20.3403 27.2687 23.4034 25.1269 25.5758C22.9846 27.7487 19.9612 29 16.435 29C9.57531 29 4 23.3906 4 16.5ZM16.435 6C10.684 6 6 10.7083 6 16.5C6 22.2917 10.684 27 16.435 27C19.4236 27 21.9326 25.9422 23.6941 24.1531C25.4561 22.3634 26.5 19.8114 26.5 16.77C26.5 16.4263 26.4837 16.1299 26.4552 15.851H17.434V17.806H22.925C23.2167 17.806 23.4941 17.9336 23.684 18.1549C23.8774 18.379 23.9585 18.6745 23.9128 18.9623C23.5921 20.9905 21.6006 24.763 16.434 24.763C11.9631 24.763 8.347 21.0463 8.347 16.501C8.347 13.1184 10.2632 10.197 13.3472 8.8925C15.9714 7.78334 18.8047 8.08053 20.9442 9.67134L22.6141 8.05726C20.8515 6.70853 18.7386 6 16.435 6Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Google;