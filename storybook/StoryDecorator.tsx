import React from 'react';
import { View } from 'react-native';

export default function StoryDecorator(Story: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Story />
    </View>
  );
}
