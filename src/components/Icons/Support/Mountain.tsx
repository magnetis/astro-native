import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Mountain({
  id = 'MountainIcon',
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
        d="M20.085 4.94111L20.3229 5.04067C21.3312 5.45593 22.0387 5.66076 22.3836 5.66076C22.4143 5.66076 22.4661 5.64397 22.5559 5.59138C22.5977 5.56694 22.6432 5.53708 22.6955 5.49974L22.8752 5.36329C22.8925 5.34958 22.9439 5.30809 23.0068 5.25727L23.0073 5.25683C23.1157 5.16921 23.2582 5.05407 23.3197 5.00579L23.5306 4.84569C24.157 4.38709 24.7336 4.1232 25.4692 4.0362C26.4803 3.91663 27.5824 4.09419 28.773 4.5553C29.6007 4.87586 30.0712 5.75191 29.8813 6.61895L29.22 9.63803C29.0073 10.6092 28.0476 11.224 27.0765 11.0113C26.9699 10.9879 26.8655 10.9549 26.7649 10.9126C25.454 10.3623 24.6224 10.1964 24.4949 10.2179L24.4802 10.2232L23.8412 10.7762C23.7051 10.8899 23.5739 10.9953 23.4395 11.0983C22.4602 11.8483 21.5361 12.2933 20.5789 12.3096C20.2503 12.3152 19.9288 12.2667 19.6191 12.1601C18.6855 11.8388 17.5033 11.5084 16.0748 11.1703L15.0175 12.8042C15.1396 12.8598 15.2574 12.93 15.3684 13.0151C15.4519 13.0791 15.5296 13.1503 15.6005 13.2277L15.7018 13.3484L20.5849 19.7178L22.3333 17.3867C22.9297 16.5914 24.058 16.4302 24.8533 17.0267C24.9897 17.129 25.1109 17.2503 25.2133 17.3867L29.2133 22.72C29.8097 23.5153 29.6486 24.6436 28.8533 25.24C28.5417 25.4737 28.1627 25.6 27.7733 25.6H25.0947L25.175 25.7049C25.7799 26.4938 25.6306 27.6237 24.8417 28.2285C24.5274 28.4695 24.1425 28.6 23.7465 28.6H4.8C3.80589 28.6 3 27.7942 3 26.8C3 26.4041 3.13058 26.0191 3.37151 25.7049L12.2993 14.0599L17.6016 5.86544C17.6749 5.75224 17.7719 5.66371 17.8819 5.60214C18.3609 4.88055 19.2868 4.60213 20.085 4.94111ZM17.5097 9.8757C18.5231 10.1355 19.3995 10.3924 20.1397 10.6472C20.2694 10.6918 20.4055 10.7123 20.5517 10.7098C21.0376 10.7016 21.6181 10.4426 22.2692 9.97462L22.4667 9.82801C22.5246 9.78361 22.5823 9.73834 22.6406 9.69155L23.0047 9.38741L23.4388 9.00846C24.1373 8.40963 25.2903 8.58511 27.1292 9.332L27.3842 9.43737L27.4189 9.44833C27.5268 9.47197 27.6334 9.40366 27.657 9.29573L28.3183 6.27661C28.3394 6.18027 28.2871 6.08293 28.1952 6.04731C27.2334 5.67486 26.3882 5.53867 25.6571 5.62513C25.243 5.6741 24.9036 5.82616 24.4897 6.12665L24.3073 6.26465L23.7317 6.72364C23.6006 6.8226 23.4845 6.90183 23.364 6.97232C23.0472 7.15769 22.7296 7.26076 22.3836 7.26076C21.7326 7.26076 20.7836 6.97611 19.4595 6.4138C19.3705 6.37598 19.2671 6.40733 19.2141 6.4883L17.067 9.7642L17.5097 9.8757ZM4.64128 26.6784L13.2625 15.4333C13.3323 15.3794 13.3943 15.3129 13.4449 15.2346L13.6079 14.9828L14.1145 14.3219C14.1817 14.2343 14.3073 14.2177 14.3949 14.2849L14.432 14.3219L23.9052 26.6784C23.9725 26.766 23.9559 26.8916 23.8682 26.9588C23.8333 26.9855 23.7905 27 23.7465 27H4.8C4.68954 27 4.6 26.9105 4.6 26.8C4.6 26.756 4.61451 26.7133 4.64128 26.6784ZM23.868 24H27.7733C27.8165 24 27.8586 23.986 27.8933 23.96C27.9816 23.8938 27.9995 23.7684 27.9333 23.68L23.9333 18.3467L23.8933 18.3067C23.8049 18.2404 23.6795 18.2583 23.6133 18.3467L21.5959 21.0365L23.868 24Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Mountain;
