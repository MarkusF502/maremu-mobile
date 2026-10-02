import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Badge from './Badge';

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
      <TouchableOpacity style={s.primaryBtn}>
        <Text style={s.primaryBtnText}>+ Novo produto</Text>
      </TouchableOpacity>

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
              <View>
                <Text style={s.kpiLabel}>CATEGORIA</Text>
                <Text style={s.body}>{cat}</Text>
              </View>
              <View>
                <Text style={s.kpiLabel}>ESTOQUE</Text>
                <Text style={s.bodyBold}>{est}</Text>
              </View>
              <View>
                <Text style={s.kpiLabel}>PREÇO</Text>
                <Text style={s.body}>{preco}</Text>
              </View>
              <View>
                <Text style={s.kpiLabel}>LUCRO UN.</Text>
                <Text style={[s.bodyBold, { color: C.greenDark }]}>
                  {lucro}
                </Text>
              </View>
            </View>
          </Card>
        )
      )}
    </>
  );
};

export default ProdutosScreen;
