import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { C } from './theme';
import s from './styles';

const ErrorBox = ({ text }) =>
  text ? (
    <View style={s.errorBox}>
      <Feather name="alert-circle" size={16} color={C.red} />
      <Text style={s.errorText}>{text}</Text>
    </View>
  ) : null;

export default ErrorBox;
