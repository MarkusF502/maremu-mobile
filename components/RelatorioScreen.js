import React from 'react';
import { View, Text } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Kpi from './Kpi';
import Grid from './Grid';
import CardTitle from './CardTitle';
import BarChart from './BarChart';
import DividedItem from './DividedItem';

const RelatorioScreen = () => {
  const abc = [
    ['Calça Wide', 100, C.navy],
    ['Blazer', 78, C.navy],
    ['Camiseta', 62, C.blueMid],
    ['Tênis', 46, C.blueMid],
    ['Vestido', 32, C.blueLight],
    ['Camisa', 20, C.bluePale],
    ['Cinto', 12, C.bluePale],
  ];
  const lucro = [
    ['Calças', 32, C.navy],
    ['Blazers', 24, C.blue],
    ['Camisetas', 18, C.blueLight],
    ['Calçados', 13, C.green],
    ['Acessórios', 13, C.bluePale],
  ];
  const estoque = [
    ['Camisetas', 34],
    ['Calças', 24],
    ['Vestidos', 16],
    ['Camisas', 12],
    ['Blazers', 8],
    ['Acessórios', 6],
  ];
  return (
    <>
      <Header
        eyebrow="RELATÓRIO DA LOJA"
        title="Visão geral financeira"
        subtitle="Dados atualizados diretamente do banco da loja · 148 pedidos registrados"
      />

      <Kpi
        dark
        label="LIQUIDEZ EM ESTOQUE"
        value="R$ 128.450,00"
        note="Potencial de faturamento de 612 peças, com base nos preços atuais cadastrados."
      />
      <View style={{ height: 12 }} />
      <Grid>
        <Kpi
          label="UPT · PEÇAS POR VENDA"
          value="1,84"
          note="Lucro médio por peça: R$ 84,30"
        />
        <Kpi
          label="TICKET MÉDIO POR PEDIDO"
          value="R$ 356,67"
          note="Base: 148 pedidos"
        />
      </Grid>

      <Card>
        <CardTitle
          title="Curva ABC (Pareto)"
          subtitle="Classificação pelo valor de venda do estoque de cada produto"
        />
        <BarChart
          height={130}
          barsHeight={110}
          barWidth={18}
          labelSize={9}
          data={abc.map(([nome, h, cor]) => ({
            label: nome,
            bars: [{ value: h, color: cor }],
          }))}
        />
      </Card>

      <Card>
        <CardTitle
          title="Composição do lucro"
          subtitle="Pelas vendas registradas em pedidos"
        />
        <View style={s.stack}>
          {lucro.map(([n, p, cor]) => (
            <View key={n} style={{ flex: p, backgroundColor: cor }} />
          ))}
        </View>
        {lucro.map(([n, p, cor]) => (
          <View key={n} style={s.legendRow}>
            <View style={[s.dot, { backgroundColor: cor }]} />
            <Text style={[s.body, { flex: 1 }]}>{n}</Text>
            <Text style={s.bodyBold}>{p}%</Text>
          </View>
        ))}
      </Card>

      <Card>
        <CardTitle title="Distribuição de estoque por nicho" />
        {estoque.map(([n, p]) => (
          <View key={n} style={s.progressRow}>
            <Text style={[s.body, { width: 84 }]}>{n}</Text>
            <View style={s.track}>
              <View style={[s.fill, { width: `${p * 2.6}%` }]}>
                <Text style={s.fillText}>{p}%</Text>
              </View>
            </View>
          </View>
        ))}
      </Card>

      <Card>
        <CardTitle
          title="Top peças com maior lucro"
          subtitle="Lucro médio por peça em estoque: R$ 84,30"
        />
        {[
          [
            'Blazer Alfaiataria Preto',
            'R$ 214,50',
            'R$ 389,00',
            'R$ 174,50',
            '81,4%',
          ],
          [
            'Tênis Chunky Off-White',
            'R$ 176,80',
            'R$ 319,00',
            'R$ 142,20',
            '80,4%',
          ],
        ].map(([n, custo, venda, lucroUn, mk]) => (
          <DividedItem key={n} style={{ paddingBottom: 10 }}>
            <Text style={s.bodyBold}>{n}</Text>
            <Text style={s.small}>
              Custo {custo} · Venda {venda} · Markup {mk}
            </Text>
            <Text style={[s.bodyBold, { color: C.greenDark }]}>
              Lucro un. {lucroUn}
            </Text>
          </DividedItem>
        ))}
      </Card>
    </>
  );
};

export default RelatorioScreen;
