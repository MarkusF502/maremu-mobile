import React from 'react';
import { TextInput } from 'react-native';
import { C } from './theme';
import s from './styles';

const Input = ({ style, ...props }) => (
  <TextInput
    style={[s.input, style]}
    placeholderTextColor={C.muted}
    {...props}
  />
);

export default Input;
