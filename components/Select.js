import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { C } from './theme';
import s from './styles';

const Select = ({ options, ...props }) => (
  <View style={s.input}>
    <Picker
      mode="dropdown"
      dropdownIconColor={C.muted}
      style={s.picker}
      {...props}>
      {options.map((o) => (
        <Picker.Item key={o} label={o} value={o} />
      ))}
    </Picker>
  </View>
);

export default Select;
