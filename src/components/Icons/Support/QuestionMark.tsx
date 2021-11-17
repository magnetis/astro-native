import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import { IconProps } from '../types';
import BaseIcon from '../BaseIcon';
import { getFill } from '../utils';

function QuestionMark({
  id = 'QuestionMarkIcon',
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
        d="M16.4641 2.75C15 2.75 13.2701 3.17932 11.6765 4.36834C10.025 5.60057 8.75 7.61066 8.75 10.5769C8.75 11.2673 9.30964 11.8269 10 11.8269C10.6904 11.8269 11.25 11.2673 11.25 10.5769C11.25 8.4278 12.1297 7.14944 13.1715 6.37205C14.2713 5.55145 15.3502 5.25 16.4641 5.25C17.5 5.25 18.7634 5.66777 19.9871 6.66831C21.1431 7.6135 21.9858 9.02901 21.6903 11.1339C21.3913 13.2629 20.2192 14.59 18.9014 15.3349C17.5103 16.1212 16.0869 16.1932 15.4291 15.9701C15.0475 15.8407 14.6269 15.9031 14.2994 16.1379C13.9719 16.3726 13.7776 16.7509 13.7776 17.1538V23C13.7776 23.6904 14.3373 24.25 15.0276 24.25C15.718 24.25 16.2776 23.6904 16.2776 23V18.5805C17.5078 18.5729 18.8936 18.2111 20.1316 17.5113C22.0459 16.4292 23.7467 14.4678 24.166 11.4815C24.6018 8.37773 23.2898 6.13938 21.5696 4.7329C19.9171 3.38174 18.1117 2.75 16.4641 2.75ZM15 30C16.1046 30 17 29.1046 17 28C17 26.8954 16.1046 26 15 26C13.8954 26 13 26.8954 13 28C13 29.1046 13.8954 30 15 30Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default QuestionMark;
