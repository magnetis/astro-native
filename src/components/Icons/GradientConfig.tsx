import React from 'react';
import { LinearGradient, Stop } from 'react-native-svg';

import gradients, { GradientID } from '@tokens/gradients';

interface GradientConfigProps {
  gradient: GradientID;
  id: string;
}

function GradientConfig({ gradient, id }: GradientConfigProps) {
  return gradients[gradient].length === 3 ? (
    <LinearGradient id={id} x1="0" y1="1" x2="1" y2="0">
      <Stop offset="0%" stopColor={gradients[gradient][0]} stopOpacity="1" />
      <Stop offset="50%" stopColor={gradients[gradient][1]} stopOpacity="1" />
      <Stop offset="100%" stopColor={gradients[gradient][2]} stopOpacity="1" />
    </LinearGradient>
  ) : (
    <LinearGradient id={id} x1="0" y1="1" x2="1" y2="0">
      <Stop offset="0%" stopColor={gradients[gradient][0]} stopOpacity="1" />
      <Stop offset="100%" stopColor={gradients[gradient][1]} stopOpacity="1" />
    </LinearGradient>
  );
}

export default GradientConfig;
