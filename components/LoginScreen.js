import React, { useState } from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import s from './styles';
import AuthInput from './AuthInput';
import AuthLayout from './AuthLayout';
import Button from './Button';
import ErrorBox from './ErrorBox';

const emailValido = (e) => /^\S+@\S+\.\S+$/.test(e);

const LoginScreen = ({ onLogin, goToSignup }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const entrar = () => {
    const e = email.trim();
    setErro('');
    onLogin({ nome: e.split('@')[0], email: e });
  };

  return (
    <AuthLayout
      title="Bem-vindo de volta"
      subtitle="Faça login para gerenciar sua loja."
      footerText="Ainda não tem uma conta?"
      footerLink="Crie sua conta"
      onFooterPress={goToSignup}>
      <ErrorBox text={erro} />

      <AuthInput
        label="E-mail"
        icon="mail"
        placeholder="seu@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <AuthInput
        label="Senha"
        icon="lock"
        placeholder="••••••••"
        secure
        showToggle
        value={senha}
        onChangeText={setSenha}
        onSubmitEditing={entrar}
        rightLabel={
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Recuperar senha',
                'Enviaremos um link de redefinição para o seu e-mail.'
              )
            }>
            <Text style={s.authLink}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        }
      />

      <Button
        variant="auth"
        title="Entrar no Sistema"
        onPress={entrar}
        activeOpacity={0.85}
      />
    </AuthLayout>
  );
};

export default LoginScreen;
