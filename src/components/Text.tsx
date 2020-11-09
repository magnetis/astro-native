import { Text as RNText, View } from 'react-native';
import React from 'react';

export interface Props {
  text: string;
}

const Text: React.FC<Props> = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <RNText>{props.text}</RNText>
  </View>
);

export default Text;
