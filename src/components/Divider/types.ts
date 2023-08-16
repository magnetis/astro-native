import { borders } from '@magnetis/astro-tokens';
import { DividerOrientationOptions, DividerTypeOptions } from './constants';

export type DividerOrientation = typeof DividerOrientationOptions[number];

export type DividerType = typeof DividerTypeOptions[number];

export type DividerThickness = keyof typeof borders;
