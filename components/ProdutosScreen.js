import React from 'react';
import { View, Text } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Badge from './Badge';
import Button from './Button';
import LabeledValue from './LabeledValue';

const ProdutosScreen = () => {
  const itens = [
    [
      'BA',
      'Blazer Alfaiataria Preto',
      'P · M · G',
      'Blazers',
      '48',
      'R$ 389,00',
      'R$ 174,50',
      'ok',
      'Em estoque',
    ],
    [
      'CW',
      'Calça Wide Leg Jeans',
      '36 · 38 · 40 · 42',
      'Calças',
      '96',
      'R$ 229,90',
      'R$ 111,70',
      'ok',
      'Em estoque',
    ],
    [
      'CS',
      'Camisa Social Branca',
      'M · G · GG',
      'Camisas',
      '4',
      'R$ 189,90',
      'R$ 93,60',
      'crit',
      'Crítico',
    ],
    [
      'CO',
      'Camiseta Oversized Bege',
      'P · M · G · GG',
      'Camisetas',
      '128',
      'R$ 159,90',
      'R$ 88,50',
      'ok',
      'Em estoque',
    ],
    [
      'TC',
      'Tênis Chunky Off-White',
      '36 · 38 · 40',
      'Calçados',
      '21',
      'R$ 319,00',
      'R$ 142,20',
      'low',
      'Estoque baixo',
    ],
    [
      'VM',
      'Vestido Midi Linho',
      'P · M · G',
      'Vestidos',
      '9',
      'R$ 279,90',
      'R$ 131,90',
      'low',
      'Estoque baixo',
    ],
  ];
  return (
    <>
      <Header
        eyebrow="INVENTÁRIO"
        title="Inventário de peças"
        subtitle="6 produtos · 612 unidades em estoque · valor de venda R$ 128.450,00"
      />
      <Button title="+ Novo produto" />

      {itens.map(
        ([sigla, nome, tams, cat, est, preco, lucro, tipo, status]) => (
          <Card key={nome}>
            <View style={s.rowItem}>
              <View style={s.avatar}>
                <Text style={s.avatarText}>{sigla}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.bodyBold}>{nome}</Text>
                <Text style={s.small}>{tams}</Text>
              </View>
              <Badge text={status} type={tipo} />
            </View>
            <View style={s.divider} />
            <View style={s.rowBetween}>
              <LabeledValue label="CATEGORIA" value={cat} />
              <LabeledValue label="ESTOQUE" value={est} valueStyle={s.bodyBold} />
              <LabeledValue label="PREÇO" value={preco} />
              <LabeledValue
                label="LUCRO UN."
                value={lucro}
                valueStyle={[s.bodyBold, { color: C.greenDark }]}
              />
            </View>
          </Card>
        )
      )}
    </>
  );
};

export default ProdutosScreen;
