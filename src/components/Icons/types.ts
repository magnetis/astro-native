import { Colors } from '@magnetis/astro-galaxy-tokens';
import { GradientID } from '@tokens/gradients';

import type { GestureResponderEvent } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'color' | 'onPress'> {
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
  /** Size value. This value will be used as icon's width and height internally */
  size?: number;
  /** Called when a single tap gesture is detected */
  onPress?: (event: GestureResponderEvent) => void;
}

export type IconID =
  | 'Additional'
  | 'Airplane'
  | 'Alert'
  | 'Apple'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'ArrowUp'
  | 'Award'
  | 'Bag'
  | 'Balloon'
  | 'Bank'
  | 'Biometric'
  | 'Cake'
  | 'CalendarCheck'
  | 'Calendar'
  | 'Camera'
  | 'Car'
  | 'ChartUp'
  | 'Chart'
  | 'Chat'
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
  | 'Down'
  | 'DropUp'
  | 'Education'
  | 'EyeOpen'
  | 'EyeClosed'
  | 'FaceId'
  | 'Faq'
  | 'Flag'
  | 'Floater'
  | 'Gift'
  | 'Google'
  | 'Heart'
  | 'House'
  | 'Info'
  | 'Invite'
  | 'Key'
  | 'Laptop'
  | 'Light'
  | 'Link'
  | 'LockClosed'
  | 'LockOpen'
  | 'Locker'
  | 'Logout'
  | 'Magnifier'
  | 'Mail'
  | 'Menu'
  | 'MoneyBag'
  | 'More'
  | 'Mountain'
  | 'Notification'
  | 'Pause'
  | 'Pencil'
  | 'Phone'
  | 'Photo'
  | 'Pizza'
  | 'Play'
  | 'PlayStore'
  | 'Profile'
  | 'Profiles'
  | 'Return'
  | 'RotatePhone'
  | 'Share'
  | 'Sheet'
  | 'Sliders'
  | 'Tax'
  | 'Time'
  | 'Transactions'
  | 'Trash'
  | 'Update'
  | 'Upload'
  | 'Warning';
