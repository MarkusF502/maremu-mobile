import React from 'react';
import { View } from 'react-native';
import s from './styles';

const DividedItem = ({ children, style }) => (
  <View style={[s.dividedItem, style]}>{children}</View>
);

export default DividedItem;
