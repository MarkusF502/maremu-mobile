import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Button from './Button';
import CardTitle from './CardTitle';
import Field from './Field';
import Input from './Input';
import Select from './Select';
import ReadOnlyInput from './ReadOnlyInput';
import InfoRow from './InfoRow';

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
        <CardTitle title="1 Informações do produto" />
        <Field label="Nome do produto">
          <Input placeholder="Ex: Camiseta Oversized Bege" />
        </Field>
        <View style={s.rowGap}>
          <Field label="Categoria" style={{ flex: 1 }}>
            <Select
              options={[
                'Camisetas',
                'Calças',
                'Vestidos',
                'Jaquetas',
                'Acessórios',
              ]}
            />
          </Field>
          <Field label="Gênero" style={{ flex: 1 }}>
            <Select
              options={['Unissex', 'Masculino', 'Feminino', 'Infantil']}
            />
          </Field>
        </View>
        <Button variant="dashed" title="+ Criar categoria" />
      </Card>

      <Card>
        <CardTitle
          title="2 Definição da grade"
          right={<Button variant="soft" title="+ Adicionar variação" />}
        />
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
        <CardTitle title="3 Custos e preço" />
        <Field label="Custo de fábrica">
          <ReadOnlyInput bold value="R$ 71,40" />
        </Field>
        <Field label="Frete de entrada unitário">
          <ReadOnlyInput bold value="R$ 3,80" />
        </Field>

        <View style={s.summary}>
          <InfoRow label="Custo total unitário" value="R$ 75,20" />
          <InfoRow
            label="Preço piso sugerido"
            value="R$ 101,52"
            valueStyle={[s.bodyBold, { color: C.navy }]}
            style={{ marginTop: 6 }}
          />
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

        <Button title="Cadastrar produto →" style={{ marginTop: 14 }} />
      </Card>
    </>
  );
};

export default CadastroScreen;
