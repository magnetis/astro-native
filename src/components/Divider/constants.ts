import { borders } from '@magnetis/astro-tokens';

export const DividerOrientationOptions = ['horizontal', 'vertical'] as const;
export const DividerTypeOptions = ['neutral', 'inverse'] as const;
export const DividerThicknessOptions = [...Object.keys(borders)] as const;
