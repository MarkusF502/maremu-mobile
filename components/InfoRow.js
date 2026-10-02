import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const InfoRow = ({
  label,
  value,
  labelStyle = s.small,
  valueStyle = s.bodyBold,
  style,
}) => (
  <View style={[s.rowBetween, style]}>
    <Text style={labelStyle}>{label}</Text>
    <Text style={valueStyle}>{value}</Text>
  </View>
);

export default InfoRow;
