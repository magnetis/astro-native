import { GradientID } from '@tokens/gradients';

import * as icons from '@components/Icons';

interface getFillParams {
  gradient?: GradientID;
  color: string;
  id: string;
}

export function getFill({ gradient, color, id }: getFillParams) {
  if (gradient) {
    return `url(#${id})`;
  }
  return color;
}

export function getIcon(_iconName: string) {
  const iconName = `${_iconName}Icon`;

  if (Object.keys(icons).includes(iconName)) {
    return (icons as { [key: string]: Function })[iconName];
  }

  return () => null;
}
