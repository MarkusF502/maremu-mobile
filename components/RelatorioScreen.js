import React from 'react';
import { View, Text } from 'react-native';
import { C } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Kpi from './Kpi';

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
      <View style={s.grid2}>
        <View style={s.half}>
          <Kpi
            label="UPT · PEÇAS POR VENDA"
            value="1,84"
            note="Lucro médio por peça: R$ 84,30"
          />
        </View>
        <View style={s.half}>
          <Kpi
            label="TICKET MÉDIO POR PEDIDO"
            value="R$ 356,67"
            note="Base: 148 pedidos"
          />
        </View>
      </View>

      <Card>
        <Text style={s.cardTitle}>Curva ABC (Pareto)</Text>
        <Text style={s.small}>
          Classificação pelo valor de venda do estoque de cada produto
        </Text>
        <View style={[s.chart, { height: 130 }]}>
          {abc.map(([nome, h, cor]) => (
            <View key={nome} style={s.chartCol}>
              <View style={[s.chartBars, { height: 110 }]}>
                <View
                  style={[
                    s.bar,
                    { height: h, width: 18, backgroundColor: cor },
                  ]}
                />
              </View>
              <Text style={[s.chartLabel, { fontSize: 9 }]} numberOfLines={1}>
                {nome}
              </Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={s.cardTitle}>Composição do lucro</Text>
        <Text style={s.small}>Pelas vendas registradas em pedidos</Text>
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
        <Text style={s.cardTitle}>Distribuição de estoque por nicho</Text>
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
        <View style={s.rowBetween}>
          <Text style={s.cardTitle}>Top peças com maior lucro</Text>
        </View>
        <Text style={s.small}>Lucro médio por peça em estoque: R$ 84,30</Text>
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
          <View
            key={n}
            style={{
              paddingVertical: 10,
              borderTopWidth: 1,
              borderTopColor: C.border,
              marginTop: 10,
            }}>
            <Text style={s.bodyBold}>{n}</Text>
            <Text style={s.small}>
              Custo {custo} · Venda {venda} · Markup {mk}
            </Text>
            <Text style={[s.bodyBold, { color: C.greenDark }]}>
              Lucro un. {lucroUn}
            </Text>
          </View>
        ))}
      </Card>
    </>
  );
};

export default RelatorioScreen;
