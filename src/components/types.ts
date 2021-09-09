import type { Insets } from 'react-native';

export type HitSlop = null | Insets | number;

export const sizeOptions = ['small', 'medium', 'large', 'xlarge'] as const;
export type Size = typeof sizeOptions[number];
