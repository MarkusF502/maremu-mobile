import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { C, F } from './components/theme';
import s from './components/styles';
import Logo from './components/Logo';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import DashboardScreen from './components/DashboardScreen';
import ProdutosScreen from './components/ProdutosScreen';
import RelatorioScreen from './components/RelatorioScreen';
import CadastroScreen from './components/CadastroScreen';
import PdvScreen from './components/PdvScreen';

const TABS = [
  { key: 'dashboard', label: 'Dashboard', screen: DashboardScreen },
  { key: 'produtos', label: 'Produtos', screen: ProdutosScreen },
  { key: 'relatorio', label: 'Relatório', screen: RelatorioScreen },
  { key: 'cadastro', label: 'Cadastrar', screen: CadastroScreen },
  { key: 'pdv', label: 'Venda', screen: PdvScreen },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });
  const [tab, setTab] = useState('dashboard');
  const [usuario, setUsuario] = useState(null); // null = ninguém logado
  const [authTela, setAuthTela] = useState('login'); // 'login' | 'signup'

  if (!fontsLoaded) return null;

  /* Sem usuário logado: mostra Login ou Criar conta */
  if (!usuario) {
    return authTela === 'login' ? (
      <LoginScreen
        onLogin={setUsuario}
        goToSignup={() => setAuthTela('signup')}
      />
    ) : (
      <SignupScreen
        onCreate={setUsuario}
        goToLogin={() => setAuthTela('login')}
      />
    );
  }

  const sair = () => {
    setUsuario(null);
    setAuthTela('login');
    setTab('dashboard');
  };

  const Screen = TABS.find((t) => t.key === tab).screen;

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={s.topbar}>
        <Logo size={26} textSize={20} />
        <TouchableOpacity style={s.logoutBtn} onPress={sair}>
          <Feather name="log-out" size={16} color={C.muted} />
          <Text style={s.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content}>
        <Screen usuario={usuario} />
      </ScrollView>

      <View style={s.tabbar}>
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <TouchableOpacity
              key={t.key}
              style={[s.tab, active && s.tabActive]}
              onPress={() => setTab(t.key)}>
              <Text
                style={[
                  s.tabText,
                  active && { color: C.navy, fontFamily: F.bold },
                ]}>
                {t.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
