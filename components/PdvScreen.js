import React from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { C, F } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Kpi from './Kpi';
import Badge from './Badge';

const PdvScreen = () => {
  const lista = [
    [
      'Camiseta Oversized Bege',
      'Camisetas · SKU CAM-001',
      'R$ 159,90',
      '128 un.',
      true,
    ],
    [
      'Calça Wide Leg Jeans',
      'Calças · SKU CAL-014',
      'R$ 229,90',
      '96 un.',
      false,
    ],
    [
      'Blazer Alfaiataria Preto',
      'Blazers · SKU BLZ-007',
      'R$ 389,00',
      '48 un.',
      false,
    ],
    [
      'Vestido Midi Linho',
      'Vestidos · SKU VES-003',
      'R$ 279,90',
      '9 un.',
      false,
    ],
  ];
  const tams = [
    ['P', '12', true],
    ['M', '24', false],
    ['G', '18', false],
    ['GG', '74', false],
  ];
  const saidas = [
    [
      '#A7F31C09',
      '14:12',
      '2 un. · Camiseta Oversized Bege (M), Cinto Couro (U)',
      'Loja física · PIX',
      '—',
      'R$ 219,80',
    ],
    [
      '#B21D8E44',
      '13:38',
      '1 un. · Calça Wide Leg Jeans (38)',
      'Instagram / WhatsApp · Crédito',
      '- R$ 20,00',
      'R$ 209,90',
    ],
    [
      '#C90A5F17',
      '12:05',
      '3 un. · Blazer Alfaiataria Preto (M), Camisa Social Branca (G)',
      'Loja física · Débito',
      '—',
      'R$ 578,90',
    ],
  ];
  return (
    <>
      <Header
        eyebrow="PONTO DE VENDA"
        title="Fluxo de saídas"
        subtitle="Venda registrada no banco e baixa automática do estoque."
      />

      <View style={s.grid2}>
        <View style={s.half}>
          <Kpi label="VENDAS HOJE" value="12" />
        </View>
        <View style={s.half}>
          <Kpi label="FATURAMENTO HOJE" value="R$ 4.280,00" />
        </View>
      </View>

      <Card>
        <View style={s.rowBetween}>
          <Text style={s.cardTitle}>Adicionar produto</Text>
          <Badge text="6 produtos" type="ok" />
        </View>
        <TextInput
          style={s.input}
          placeholder="Buscar por nome, SKU ou categoria"
          placeholderTextColor={C.muted}
        />
        <FlatList
          data={lista}
          keyExtractor={([n]) => n}
          scrollEnabled={false}
          renderItem={({ item: [n, sub, preco, est, sel] }) => (
            <View
              style={[
                s.listItem,
                sel && { borderColor: C.blue, backgroundColor: '#EFF6FF' },
              ]}>
              <View style={{ flex: 1 }}>
                <Text style={s.bodyBold}>{n}</Text>
                <Text style={s.small}>{sub}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={s.bodyBold}>{preco}</Text>
                <Text style={[s.small, { color: C.greenDark }]}>{est}</Text>
              </View>
            </View>
          )}
        />
        <Text style={[s.kpiLabel, { marginTop: 14 }]}>
          VARIAÇÃO SELECIONADA
        </Text>
        <View style={s.rowGap}>
          {tams.map(([t, q, sel]) => (
            <View
              key={t}
              style={[
                s.sizeBox,
                sel && { borderColor: C.blue, backgroundColor: '#EFF6FF' },
              ]}>
              <Text style={s.bodyBold}>Tam. {t}</Text>
              <Text style={[s.small, { color: C.greenDark }]}>{q} disp.</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <View style={s.preview} />
        <Badge text="CAMISETAS" type="ok" />
        <Text style={[s.cardTitle, { marginTop: 8 }]}>
          Camiseta Oversized Bege
        </Text>
        <Text style={[s.kpiValue, { color: C.blue }]}>R$ 159,90</Text>
        <Text style={s.small}>Tamanho P · 12 em estoque</Text>
        <TouchableOpacity style={[s.darkBtn, { marginTop: 12 }]}>
          <Text style={s.primaryBtnText}>+ Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </Card>

      <Card>
        <View style={s.rowBetween}>
          <Text style={s.cardTitle}>Carrinho</Text>
          <Badge text="0 itens" type="ok" />
        </View>
        <View style={s.empty}>
          <Text style={s.small}>O carrinho está vazio.</Text>
        </View>
        <View style={s.rowGap}>
          <View style={{ flex: 1 }}>
            <Text style={s.label}>Canal da venda</Text>
            <View style={s.input}>
              <Text style={s.body}>Loja física</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.label}>Pagamento</Text>
            <View style={s.input}>
              <Text style={s.body}>PIX</Text>
            </View>
          </View>
        </View>
        <Text style={s.label}>Desconto total</Text>
        <View style={s.input}>
          <Text style={s.body}>R$ 0,00</Text>
        </View>
        <View style={[s.rowBetween, { marginTop: 10 }]}>
          <Text style={s.small}>Subtotal</Text>
          <Text style={s.small}>R$ 0,00</Text>
        </View>
        <View style={s.rowBetween}>
          <Text style={[s.small, { color: C.red }]}>Desconto</Text>
          <Text style={[s.small, { color: C.red }]}>- R$ 0,00</Text>
        </View>
        <View style={[s.rowBetween, { marginTop: 10 }]}>
          <Text style={s.bodyBold}>TOTAL</Text>
          <Text style={s.kpiValue}>R$ 0,00</Text>
        </View>
        <View
          style={[s.primaryBtn, { backgroundColor: '#B6C4D8', marginTop: 12 }]}>
          <Text style={s.primaryBtnText}>FINALIZAR VENDA (F2)</Text>
        </View>
      </Card>

      <Card>
        <Text style={s.cardTitle}>Saídas recentes</Text>
        <Text style={s.small}>
          Últimas vendas salvas em pedidos e itens_pedido.
        </Text>
        {saidas.map(([id, hora, itens, canal, desc, total]) => (
          <View
            key={id}
            style={{
              borderTopWidth: 1,
              borderTopColor: C.border,
              marginTop: 10,
              paddingTop: 10,
            }}>
            <View style={s.rowBetween}>
              <Text style={[s.small, { color: C.blue, fontFamily: F.bold }]}>
                {id}
              </Text>
              <Text style={s.small}>{hora}</Text>
            </View>
            <Text style={s.body}>{itens}</Text>
            <Text style={s.small}>{canal}</Text>
            <View style={s.rowBetween}>
              <Text style={[s.small, { color: C.red }]}>{desc}</Text>
              <Text style={[s.bodyBold, { color: C.greenDark }]}>{total}</Text>
            </View>
          </View>
        ))}
      </Card>
    </>
  );
};

export default PdvScreen;
