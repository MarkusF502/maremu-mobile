import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const Field = ({ label, style, children }) => (
  <View style={style}>
    <Text style={s.label}>{label}</Text>
    {children}
  </View>
);

export default Field;
