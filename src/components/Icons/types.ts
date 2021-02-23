import type { SvgProps } from 'react-native-svg';
import { Colors } from '@magnetis/astro-galaxy-tokens';

import { GradientID } from '@tokens/gradients';

export interface IconProps extends Omit<SvgProps, 'color'> {
  /** Id for icon gradient. Recomended to pass a unique value. */
  id?: string;
  /** A valid gradient name from `GradientID` */
  gradient?: GradientID;
  /** Width value */
  width?: number | string;
  /** Height value */
  height?: number | string;
  /** A valid color for Astro's colors */
  color?: Colors[keyof Colors];
}

export type IconID =
  | 'Additional'
  | 'Chart'
  | 'Chat'
  | 'Down'
  | 'Flag'
  | 'Heart'
  | 'Invite'
  | 'More'
  | 'Sheet'
  | 'Time'
  | 'Transactions'
  | 'Airplane'
  | 'Alert'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowUp'
  | 'Balloon'
  | 'Bank'
  | 'Cake'
  | 'CalendarCheck'
  | 'Calendar'
  | 'Car'
  | 'ChartUp'
  | 'Check'
  | 'CircleCheck'
  | 'CircleDown'
  | 'CircleLeft'
  | 'CircleLess'
  | 'CircleMail'
  | 'CircleMore'
  | 'CircleRight'
  | 'CircleUp'
  | 'Clock'
  | 'CloseCircle'
  | 'Close'
  | 'Coin'
  | 'Comparison'
  | 'Configuration'
  | 'Copy'
  | 'Cup'
  | 'DiagonalLeft'
  | 'DiagonalRight'
  | 'Document'
  | 'Dollars'
  | 'Download'
  | 'DropDown'
  | 'DropLeft'
  | 'DropRight'
  | 'DropUp'
  | 'Education'
  | 'EyeOpen'
  | 'EyeClosed'
  | 'Faq'
  | 'Floater'
  | 'Gift'
  | 'House'
  | 'Info'
  | 'Key'
  | 'Laptop'
  | 'Light'
  | 'Link'
  | 'Locker'
  | 'Logout'
  | 'Magnifier'
  | 'Mail'
  | 'Menu'
  | 'MoneyBag'
  | 'Mountain'
  | 'Pencil'
  | 'Phone'
  | 'Photo'
  | 'Pizza'
  | 'Play'
  | 'Profile'
  | 'Return'
  | 'Sliders'
  | 'Tax'
  | 'Trash'
  | 'Update'
  | 'Upload'
  | 'Warning';
