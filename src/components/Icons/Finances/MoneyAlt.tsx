import React from 'react';
import { Path } from 'react-native-svg';
import { colors } from '@magnetis/astro-galaxy-tokens';

import BaseIcon from '../BaseIcon';
import { getFill, getSize, getViewBox } from '../utils';
import type { IconProps } from '../types';

function MoneyAlt({
  id = 'MoneyAltIcon',
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
        d="M2.76768 2.92078C2.76768 2.36849 3.2154 1.92078 3.76768 1.92078H21.9172C22.4695 1.92078 22.9172 2.36849 22.9172 2.92078V12.2941C22.9172 12.8463 22.4695 13.2941 21.9172 13.2941H3.76768C3.2154 13.2941 2.76768 12.8463 2.76768 12.2941V2.92078ZM4.76768 3.92078V11.2941H20.9172V3.92078H4.76768Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2881 2.92079C17.2881 2.36851 17.7358 1.92079 18.2881 1.92079L21.9172 1.92078C22.4695 1.92078 22.9172 2.36849 22.9172 2.92078L22.918 6.55069C22.918 6.81591 22.8126 7.07026 22.6251 7.2578C22.4375 7.44534 22.1832 7.55069 21.918 7.55069C21.31 7.55069 20.7079 7.43094 20.1462 7.19826C19.5845 6.96559 19.0741 6.62455 18.6441 6.19463C18.2142 5.7647 17.8732 5.2543 17.6405 4.69258C17.4078 4.13085 17.2881 3.5288 17.2881 2.92079ZM19.4856 3.92079C19.4865 3.92293 19.4874 3.92507 19.4883 3.92721C19.6204 4.24628 19.8141 4.5362 20.0583 4.78041C20.3026 5.02462 20.5925 5.21834 20.9115 5.3505C20.9137 5.35139 20.9158 5.35227 20.918 5.35315L20.9172 3.92078L19.4856 3.92079Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.918 9.86172C20.5994 9.99269 20.3066 10.1862 20.0583 10.4345C19.8101 10.6827 19.6166 10.9755 19.4856 11.2941L20.9172 11.2941L20.918 9.86172ZM18.6441 9.02025C19.5124 8.15198 20.69 7.66418 21.918 7.66418C22.1832 7.66418 22.4375 7.76954 22.6251 7.95708C22.8126 8.14461 22.918 8.39897 22.918 8.66418L22.9172 12.2941C22.9172 12.5593 22.8126 12.8137 22.6251 13.0012C22.4375 13.1887 22.1824 13.2941 21.9172 13.2941L18.2881 13.2941C17.7358 13.2941 17.2881 12.8464 17.2881 12.2941C17.2881 11.0662 17.7759 9.88853 18.6441 9.02025Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.76758 8.66418C2.76758 8.1119 3.21529 7.66418 3.76758 7.66418C4.9955 7.66418 6.17314 8.15198 7.04141 9.02025C7.90969 9.88853 8.39748 11.0662 8.39748 12.2941C8.39748 12.8464 7.94977 13.2941 7.39748 13.2941L3.76768 13.2941C3.50246 13.2941 3.24801 13.1887 3.06047 13.0012C2.87294 12.8137 2.76768 12.5593 2.76768 12.2941L2.76758 8.66418ZM4.76758 9.86172L4.76768 11.2941L6.19994 11.2941C6.06897 10.9755 5.87547 10.6827 5.6272 10.4345C5.37893 10.1862 5.08613 9.99269 4.76758 9.86172Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.06047 2.21368C3.24801 2.02615 3.50246 1.92078 3.76768 1.92078L7.39748 1.92079C7.94977 1.92079 8.39748 2.36851 8.39748 2.92079C8.39748 4.14872 7.90969 5.32635 7.04141 6.19463C6.17314 7.0629 4.99551 7.55069 3.76758 7.55069C3.21529 7.55069 2.76758 7.10298 2.76758 6.55069L2.76768 2.92078C2.76768 2.65556 2.87293 2.40122 3.06047 2.21368ZM4.76768 3.92078L4.76758 5.35315C5.08613 5.22219 5.37893 5.02868 5.6272 4.78041C5.87547 4.53214 6.06898 4.23934 6.19994 3.92079L4.76768 3.92078Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.843 7.10742C12.5669 7.10742 12.343 7.33128 12.343 7.60742C12.343 7.88356 12.5669 8.10742 12.843 8.10742C13.1191 8.10742 13.343 7.88356 13.343 7.60742C13.343 7.33128 13.1191 7.10742 12.843 7.10742ZM10.343 7.60742C10.343 6.22671 11.4623 5.10742 12.843 5.10742C14.2237 5.10742 15.343 6.22671 15.343 7.60742C15.343 8.98813 14.2237 10.1074 12.843 10.1074C11.4623 10.1074 10.343 8.98813 10.343 7.60742Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7678 13.6692C4.32009 13.6692 4.7678 14.1169 4.7678 14.6692V15.6692H20.9173V14.6692C20.9173 14.1169 21.365 13.6692 21.9173 13.6692C22.4696 13.6692 22.9173 14.1169 22.9173 14.6692V16.6692C22.9173 17.2215 22.4696 17.6692 21.9173 17.6692H3.7678C3.21552 17.6692 2.7678 17.2215 2.7678 16.6692V14.6692C2.7678 14.1169 3.21552 13.6692 3.7678 13.6692Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7678 18.0444C4.32009 18.0444 4.7678 18.4921 4.7678 19.0444V20.0444H20.9173V19.0444C20.9173 18.4921 21.365 18.0444 21.9173 18.0444C22.4696 18.0444 22.9173 18.4921 22.9173 19.0444V21.0444C22.9173 21.5967 22.4696 22.0444 21.9173 22.0444H3.7678C3.21552 22.0444 2.7678 21.5967 2.7678 21.0444V19.0444C2.7678 18.4921 3.21552 18.0444 3.7678 18.0444Z"
        fill={fill}
      />
    </BaseIcon>
  );
}

export default MoneyAlt;
