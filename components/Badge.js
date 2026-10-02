import React from 'react';
import { View, Text } from 'react-native';
import { C } from './theme';
import s from './styles';

const Badge = ({ text, type }) => {
  const map = {
    ok: { bg: '#D1FAE5', fg: C.greenDark },
    low: { bg: '#FEF3C7', fg: C.amber },
    crit: { bg: '#FEE2E2', fg: C.red },
  };
  const c = map[type];
  return (
    <View style={[s.badge, { backgroundColor: c.bg }]}>
      <Text style={[s.badgeText, { color: c.fg }]}>{text}</Text>
    </View>
  );
};

export default Badge;
