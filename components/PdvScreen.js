import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { C, F } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Kpi from './Kpi';
import Badge from './Badge';
import Grid from './Grid';
import Button from './Button';
import CardTitle from './CardTitle';
import Field from './Field';
import Input from './Input';
import ReadOnlyInput from './ReadOnlyInput';
import InfoRow from './InfoRow';
import DividedItem from './DividedItem';

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

      <Grid>
        <Kpi label="VENDAS HOJE" value="12" />
        <Kpi label="FATURAMENTO HOJE" value="R$ 4.280,00" />
      </Grid>

      <Card>
        <CardTitle
          title="Adicionar produto"
          right={<Badge text="6 produtos" type="ok" />}
        />
        <Input placeholder="Buscar por nome, SKU ou categoria" />
        <FlatList
          data={lista}
          keyExtractor={([n]) => n}
          scrollEnabled={false}
          renderItem={({ item: [n, sub, preco, est, sel] }) => (
            <View style={[s.listItem, sel && s.selected]}>
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
            <View key={t} style={[s.sizeBox, sel && s.selected]}>
              <Text style={s.bodyBold}>Tam. {t}</Text>
              <Text style={[s.small, { color: C.greenDark }]}>{q} disp.</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <View style={s.preview} />
        <Badge text="CAMISETAS" type="ok" />
        <CardTitle title="Camiseta Oversized Bege" style={{ marginTop: 8 }} />
        <Text style={[s.kpiValue, { color: C.blue }]}>R$ 159,90</Text>
        <Text style={s.small}>Tamanho P · 12 em estoque</Text>
        <Button
          variant="dark"
          title="+ Adicionar ao carrinho"
          style={{ marginTop: 12 }}
        />
      </Card>

      <Card>
        <CardTitle title="Carrinho" right={<Badge text="0 itens" type="ok" />} />
        <View style={s.empty}>
          <Text style={s.small}>O carrinho está vazio.</Text>
        </View>
        <View style={s.rowGap}>
          <Field label="Canal da venda" style={{ flex: 1 }}>
            <ReadOnlyInput value="Loja física" />
          </Field>
          <Field label="Pagamento" style={{ flex: 1 }}>
            <ReadOnlyInput value="PIX" />
          </Field>
        </View>
        <Field label="Desconto total">
          <ReadOnlyInput value="R$ 0,00" />
        </Field>
        <InfoRow
          label="Subtotal"
          value="R$ 0,00"
          valueStyle={s.small}
          style={{ marginTop: 10 }}
        />
        <InfoRow
          label="Desconto"
          value="- R$ 0,00"
          labelStyle={[s.small, { color: C.red }]}
          valueStyle={[s.small, { color: C.red }]}
        />
        <InfoRow
          label="TOTAL"
          value="R$ 0,00"
          labelStyle={s.bodyBold}
          valueStyle={s.kpiValue}
          style={{ marginTop: 10 }}
        />
        <Button
          disabled
          title="FINALIZAR VENDA (F2)"
          style={{ marginTop: 12 }}
        />
      </Card>

      <Card>
        <CardTitle
          title="Saídas recentes"
          subtitle="Últimas vendas salvas em pedidos e itens_pedido."
        />
        {saidas.map(([id, hora, itens, canal, desc, total]) => (
          <DividedItem key={id}>
            <InfoRow
              label={id}
              value={hora}
              labelStyle={[s.small, { color: C.blue, fontFamily: F.bold }]}
              valueStyle={s.small}
            />
            <Text style={s.body}>{itens}</Text>
            <Text style={s.small}>{canal}</Text>
            <InfoRow
              label={desc}
              value={total}
              labelStyle={[s.small, { color: C.red }]}
              valueStyle={[s.bodyBold, { color: C.greenDark }]}
            />
          </DividedItem>
        ))}
      </Card>
    </>
  );
};

export default PdvScreen;
