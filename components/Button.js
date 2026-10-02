import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { C } from './theme';
import s from './styles';

const VARIANTS = {
  primary: { box: s.primaryBtn, text: s.primaryBtnText },
  dark: { box: s.darkBtn, text: s.primaryBtnText },
  auth: { box: s.authBtn, text: s.authBtnText },
  soft: { box: s.softBtn, text: [s.bodyBold, { color: C.navy }] },
  dashed: { box: s.dashedBtn, text: s.link },
};

const Button = ({ title, variant = 'primary', disabled, style, ...props }) => {
  const v = VARIANTS[variant];
  return (
    <TouchableOpacity
      style={[v.box, disabled && s.btnDisabled, style]}
      disabled={disabled}
      {...props}>
      <Text style={v.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
