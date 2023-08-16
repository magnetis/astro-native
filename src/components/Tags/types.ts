import { IconID } from '@components/Icons';
import { TagTypeOptions, TagVariantOptions } from './constants';

export type TagType = typeof TagTypeOptions[number];

export type TagVariant = typeof TagVariantOptions[number];

export type TagProperties = {
  backgroundColor: string;
  color: string;
};

export type IconTagProps = {
  icon: IconID;
};
