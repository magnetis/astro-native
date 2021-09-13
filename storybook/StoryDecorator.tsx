import { colors } from '@magnetis/astro-tokens';
import React from 'react';
import { View } from 'react-native';

export default function StoryDecorator(Story: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 8, backgroundColor: colors.solidBrightLight }}>
      <Story />
    </View>
  );
}
