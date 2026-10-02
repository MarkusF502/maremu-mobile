import React, { useState } from 'react';
import AuthInput from './AuthInput';
import AuthLayout from './AuthLayout';
import Button from './Button';

const SignupScreen = ({ onCreate, goToLogin }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('');

  const criar = () => {
    const n = nome.trim();
    const e = email.trim();
    onCreate({ nome: n, email: e });
  };

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Primeiro passo para gerenciar sua loja."
      footerText="Já possui uma conta?"
      footerLink="Fazer login"
      onFooterPress={goToLogin}>
      <AuthInput
        label="Nome Completo"
        icon="user"
        placeholder="João da Silva"
        autoCapitalize="words"
        value={nome}
        onChangeText={setNome}
      />
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
        placeholder="Mínimo 6 caracteres"
        secure
        showToggle
        value={senha}
        onChangeText={setSenha}
      />
      <AuthInput
        label="Confirme a Senha"
        icon="lock"
        placeholder="Repita sua senha"
        secure
        value={confirma}
        onChangeText={setConfirma}
        onSubmitEditing={criar}
      />

      <Button
        variant="auth"
        title="Criar Conta"
        onPress={criar}
        activeOpacity={0.85}
      />
    </AuthLayout>
  );
};

export default SignupScreen;
