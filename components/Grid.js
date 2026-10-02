import React from 'react';
import { View } from 'react-native';
import s from './styles';

const Grid = ({ children }) => (
  <View style={s.grid2}>
    {React.Children.map(children, (child) =>
      child ? <View style={s.half}>{child}</View> : null
    )}
  </View>
);

export default Grid;
