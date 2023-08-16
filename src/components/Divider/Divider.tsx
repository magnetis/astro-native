import { colors, borders } from '@magnetis/astro-tokens';
import React from 'react';
import { View } from 'react-native';

import type { DividerOrientation, DividerType, DividerThickness } from './types';

export type DividerProps = {
  orientation?: DividerOrientation;
  type?: DividerType;
  thickness: DividerThickness;
  testID?: string;
};

/**
 * A customizable divider component.
 *
 * @param {DividerProps} props - The props for the Divider.
 * @param {DividerOrientation} props.orientation - The orientation of the Divider.
 * @param {DividerThickness} props.thickness - The thickness of the Divider, based on magnetis/astro-tokens borders tokens keys.
 * @param {DividerType} props.type - The type of the Divider.
 * @param {string} props.testID - Test ID for testing purposes.
 *
 * @returns {JSX.Element} The rendered Divider component.
 * @example
 * <Divider thickness='thick' />
 */
function Divider({ orientation = 'horizontal', type = 'neutral', thickness, testID = 'Divider' }: DividerProps) {
  const baseProps = {
    backgroundColor: type === 'neutral' ? colors.transparentFaintClear : colors.transparentBrightClear,
    height: orientation === 'horizontal' ? borders[thickness] : '100%',
    width: orientation === 'vertical' ? borders[thickness] : '100%',
  };

  return <View style={{ ...baseProps }} testID={testID} />;
}

export default Divider;
