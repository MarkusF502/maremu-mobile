import React from 'react';
import { View, Image } from 'react-native';
import s from './styles';

const Logo = ({ size = 40, textSize = 30 }) => (
  <View style={s.logoRow}>
    <Image
      source={{ uri: 'https://img.lightshot.app/TOOEvOEvQNOdPH0FESKe5w.png' }}
      style={{ width: 167, height: 35 }}
    />
  </View>
);

export default Logo;
