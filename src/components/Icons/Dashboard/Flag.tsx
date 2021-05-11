import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-tokens';
import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function Flag({
  id = 'FlagIcon',
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
        d="M2 16C2 8.268 8.268 2 16 2a1 1 0 110 2C9.373 4 4 9.373 4 16s5.373 12 12 12a12.004 12.004 0 0011.619-8.987 1 1 0 111.936.5A14.003 14.003 0 0116 30c-7.732.001-14-6.267-14-13.999zm12.796-9.455a.996.996 0 01.527.387c1.177.404 2.262.697 3.255.881 1.195.227 1.791.004 2.976-.886l.187-.14c1.59-1.191 2.737-1.548 4.63-.962a40.76 40.76 0 003.154.89 1 1 0 01.746 1.203l-1.658 7.017a1 1 0 01-1.272.724 98.186 98.186 0 00-3.168-.919c-1.52-.377-2.12-.168-3.303.82l-.1.083c-1.556 1.297-2.696 1.691-4.74 1.134-.59-.147-1.61-.427-3.068-.842l-1.758 5.694-.038-.012-.21.68a1 1 0 11-1.911-.593l4.5-14.5a1 1 0 011.251-.66zm1.74 8.297c-.576-.144-1.569-.416-2.984-.818l1.56-5.054c1.101.36 2.133.63 3.098.81 1.858.35 2.955-.06 4.545-1.254l.185-.139c1.128-.845 1.67-1.014 2.83-.655a47.34 47.34 0 002.327.687l-1.186 5.02c-.647-.191-1.39-.402-2.232-.633-2.258-.562-3.463-.14-5.09 1.218l-.1.082c-1.102.92-1.621 1.1-2.953.736z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default Flag;
