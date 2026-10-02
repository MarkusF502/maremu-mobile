import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import s from './styles';
import Logo from './Logo';

const AuthLayout = ({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  onFooterPress,
}) => (
  <SafeAreaView style={s.safe}>
    <StatusBar barStyle="dark-content" />
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={s.authScroll}
        keyboardShouldPersistTaps="handled">
        <View style={s.authCard}>
          <View style={{ alignItems: 'center' }}>
            <Logo />
          </View>

          <Text style={s.authTitle}>{title}</Text>
          <Text style={s.authSubtitle}>{subtitle}</Text>

          {children}

          <View style={s.authDivider} />
          <Text style={s.authFooter}>
            {footerText}{' '}
            <Text style={s.authFooterLink} onPress={onFooterPress}>
              {footerLink}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default AuthLayout;
