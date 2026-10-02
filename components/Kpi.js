import React from 'react';
import { Text } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';

const Kpi = ({ label, value, note, dark, valueColor }) => (
  <Card style={dark && { backgroundColor: C.navy, borderColor: C.navy }}>
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
  </Card>
);

export default Kpi;
