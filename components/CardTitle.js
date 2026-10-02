import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const CardTitle = ({ title, subtitle, right, style }) => (
  <>
    {right ? (
      <View style={s.rowBetween}>
        <Text style={[s.cardTitle, style]}>{title}</Text>
        {right}
      </View>
    ) : (
      <Text style={[s.cardTitle, style]}>{title}</Text>
    )}
    {subtitle ? <Text style={s.small}>{subtitle}</Text> : null}
  </>
);

export default CardTitle;
