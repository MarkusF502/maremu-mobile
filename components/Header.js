import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const Header = ({ eyebrow, title, subtitle }) => (
  <View style={{ marginBottom: 16 }}>
    <Text style={s.eyebrow}>{eyebrow}</Text>
    <Text style={s.title}>{title}</Text>
    {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
  </View>
);

export default Header;
