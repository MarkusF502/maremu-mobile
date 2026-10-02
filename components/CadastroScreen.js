import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';

const CadastroScreen = () => {
  const [vendeEmLoja, setVendeEmLoja] = useState(false);
  const grade = [
    ['P · Bege', '12 un.'],
    ['M · Bege', '24 un.'],
    ['G · Bege', '18 un.'],
  ];
  return (
    <>
      <Header
        eyebrow="CADASTRO"
        title="Novo produto"
        subtitle="O preço piso é calculado pelo sistema; a IA sugere cenários ao final."
      />

      <Card>
        <Text style={s.cardTitle}>1 Informações do produto</Text>
        <Text style={s.label}>Nome do produto</Text>
        <TextInput
          style={s.input}
          placeholder="Ex: Camiseta Oversized Bege"
          placeholderTextColor={C.muted}
        />
        <View style={s.rowGap}>
          <View style={{ flex: 1 }}>
            <Text style={s.label}>Categoria</Text>
            <View style={s.input}>
              <Picker
                mode="dropdown"
                dropdownIconColor={C.muted}
                style={s.picker}>
                <Picker.Item label="Camisetas" value="Camisetas" />
                <Picker.Item label="Calças" value="Calças" />
                <Picker.Item label="Vestidos" value="Vestidos" />
                <Picker.Item label="Jaquetas" value="Jaquetas" />
                <Picker.Item label="Acessórios" value="Acessórios" />
              </Picker>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.label}>Gênero</Text>
            <View style={s.input}>
              <Picker
                mode="dropdown"
                dropdownIconColor={C.muted}
                style={s.picker}>
                <Picker.Item label="Unissex" value="Unissex" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Infantil" value="Infantil" />
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity style={s.dashedBtn}>
          <Text style={s.link}>+ Criar categoria</Text>
        </TouchableOpacity>
      </Card>

      <Card>
        <View style={s.rowBetween}>
          <Text style={s.cardTitle}>2 Definição da grade</Text>
          <TouchableOpacity style={s.softBtn}>
            <Text style={[s.bodyBold, { color: C.navy }]}>
              + Adicionar variação
            </Text>
          </TouchableOpacity>
        </View>
        <View style={s.rowGap}>
          {grade.map(([n, q]) => (
            <View key={n} style={s.chip}>
              <Text style={s.bodyBold}>{n}</Text>
              <Text style={s.small}>{q}</Text>
            </View>
          ))}
        </View>
        <Text style={[s.small, { marginTop: 10 }]}>
          3 variações · 54 unidades no total
        </Text>
      </Card>

      <Card>
        <Text style={s.cardTitle}>3 Custos e preço</Text>
        <Text style={s.label}>Custo de fábrica</Text>
        <View style={s.input}>
          <Text style={s.bodyBold}>R$ 71,40</Text>
        </View>
        <Text style={s.label}>Frete de entrada unitário</Text>
        <View style={s.input}>
          <Text style={s.bodyBold}>R$ 3,80</Text>
        </View>

        <View style={s.summary}>
          <View style={s.rowBetween}>
            <Text style={s.small}>Custo total unitário</Text>
            <Text style={s.bodyBold}>R$ 75,20</Text>
          </View>
          <View style={[s.rowBetween, { marginTop: 6 }]}>
            <Text style={s.small}>Preço piso sugerido</Text>
            <Text style={[s.bodyBold, { color: C.navy }]}>R$ 101,52</Text>
          </View>
          <Text style={[s.small, { marginTop: 8 }]}>
            Calculado sobre custo + frete com a margem mínima configurada da
            loja (35%).
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, gap: 5 }}>
          <Switch
            value={vendeEmLoja}
            onValueChange={(valorSwitch) => setVendeEmLoja(valorSwitch)}
            thumbColor="#0A84FF"
            trackColor="#CCC"
          />
          <Text>Já vendo esse produta em minha loja</Text>
        </View>

        <TouchableOpacity style={[s.primaryBtn, { marginTop: 14 }]}>
          <Text style={s.primaryBtnText}>Cadastrar produto →</Text>
        </TouchableOpacity>
      </Card>
    </>
  );
};

export default CadastroScreen;
