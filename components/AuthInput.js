import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { C } from './theme';
import s from './styles';

const AuthInput = ({
  label,
  icon,
  rightLabel,
  secure,
  showToggle,
  ...props
}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <View style={{ marginTop: 18 }}>
      <View style={s.rowBetween}>
        <Text style={s.authLabel}>{label}</Text>
        {rightLabel}
      </View>
      <View style={s.authInputBox}>
        <Feather name={icon} size={18} color={C.placeholder} />
        <TextInput
          style={s.authInput}
          placeholderTextColor={C.placeholder}
          secureTextEntry={secure && hidden}
          autoCapitalize="none"
          autoCorrect={false}
          {...props}
        />
        {secure && showToggle ? (
          <TouchableOpacity
            onPress={() => setHidden(!hidden)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Feather
              name={hidden ? 'eye' : 'eye-off'}
              size={18}
              color={C.placeholder}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default AuthInput;
