import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const ReadOnlyInput = ({ value, bold }) => (
  <View style={s.input}>
    <Text style={bold ? s.bodyBold : s.body}>{value}</Text>
  </View>
);

export default ReadOnlyInput;
