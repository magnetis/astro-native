import * as icons from '@components/Icons';

import { TAG_PROPERTIES } from './constants';
import type { TagProperties, TagType, TagVariant } from './types';

/**
 * Defines Tag text color and background color based on variant and type
 * @param {TagVariant} variant Valid **TagVariant**
 * @param {TagType} type Valid **TagType**
 *
 */

export function getTagProperties(variant: TagVariant = 'neutral', type: TagType = 'default'): TagProperties {
  return TAG_PROPERTIES[variant][type];
}

/**
 * Recovers Icon component based on iconName
 * @param _iconName Valid **IconID**
 */
export function getTagIcon(_iconName: string) {
  const iconName = `${_iconName}Icon`;

  if (Object.keys(icons).includes(iconName)) {
    return (icons as { [key: string]: Function })[iconName];
  }

  return () => null;
}
