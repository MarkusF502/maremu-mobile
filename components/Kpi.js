import React from 'react';
import { View, Text } from 'react-native';
import { C } from './theme';
import s from './styles';

const Kpi = ({ label, value, note, dark, valueColor }) => (
  <View
    style={[s.card, dark && { backgroundColor: C.navy, borderColor: C.navy }]}>
    <Text style={[s.kpiLabel, dark && { color: '#93C5FD' }]}>{label}</Text>
    <Text
      style={[
        s.kpiValue,
        dark && { color: '#fff' },
        valueColor && { color: valueColor },
      ]}>
      {value}
    </Text>
    {note ? (
      <Text style={[s.small, dark && { color: '#DBEAFE' }]}>{note}</Text>
    ) : null}
  </View>
);

export default Kpi;
