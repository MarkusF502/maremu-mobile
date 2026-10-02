import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const LabeledValue = ({ label, value, valueStyle = s.body }) => (
  <View>
    <Text style={s.kpiLabel}>{label}</Text>
    <Text style={valueStyle}>{value}</Text>
  </View>
);

export default LabeledValue;
