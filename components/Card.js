import React from 'react';
import { View } from 'react-native';
import s from './styles';

const Card = ({ children, style }) => (
  <View style={[s.card, style]}>{children}</View>
);

export default Card;
