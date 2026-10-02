import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { C, F } from './theme';
import s from './styles';
import Card from './Card';
import Header from './Header';
import Kpi from './Kpi';
import Badge from './Badge';
import Grid from './Grid';
import CardTitle from './CardTitle';
import BarChart from './BarChart';

const DashboardScreen = ({ usuario }) => {
  const primeiroNome = usuario?.nome ? usuario.nome.split(' ')[0] : 'usuário';
  const dias = [
    { d: 'Qui', f: 60, l: 25 },
    { d: 'Sex', f: 78, l: 32 },
    { d: 'Sáb', f: 100, l: 40 },
    { d: 'Dom', f: 42, l: 15 },
    { d: 'Seg', f: 52, l: 22 },
    { d: 'Ter', f: 70, l: 30 },
    { d: 'Hoje', f: 72, l: 31 },
  ];
  const top = [
    ['Camiseta Oversized Bege', '14 vendas'],
    ['Calça Wide Leg Jeans', '11 vendas'],
    ['Blazer Alfaiataria Preto', '9 vendas'],
  ];
  const criticos = [
    ['Vestido Midi Linho', 'Tam. M', '2 un.', C.redBg, C.red],
    ['Camisa Social Branca', 'Tam. G', '1 un.', C.redBg, C.red],
    ['Tênis Chunky', 'Tam. 38', '3 un.', C.amberBg, C.amber],
  ];
  const transacoes = [
    ['Camiseta Oversized Bege', '×2', 'R$ 179,80'],
    ['Calça Wide Leg Jeans', '×1', 'R$ 229,90'],
    ['Blazer Alfaiataria Preto', '×1', 'R$ 389,00'],
    ['Tênis Chunky Off-White', '×1', 'R$ 319,00'],
  ];

  return (
    <>
      <Header
        eyebrow="RESUMO DE HOJE"
        title={`Boa tarde, ${primeiroNome}!`}
        subtitle="Quarta-feira, 25 de agosto · 3 vendas nas últimas 2 horas"
      />

      <Grid>
        <Kpi
          label="FATURAMENTO DO DIA"
          value="R$ 4.280,00"
          note="+18% vs. terça"
          valueColor={C.text}
        />
        <Kpi
          label="LUCRO ESTIMADO"
          value="R$ 1.865,00"
          note="margem de 43,6%"
          valueColor={C.greenDark}
        />
        <Kpi label="TICKET MÉDIO" value="R$ 356,67" note="12 pedidos hoje" />
        <Kpi label="PEÇAS VENDIDAS" value="22" note="UPT 1,84" />
      </Grid>

      <Card>
        <CardTitle
          title="Tendência de curto prazo"
          subtitle="Faturamento e lucro nos últimos 7 dias"
        />
        <BarChart
          data={dias.map((x) => ({
            label: x.d,
            bars: [
              { value: x.f, color: C.blueMid },
              { value: x.l, color: C.green },
            ],
          }))}
        />
        <View style={s.insight}>
          <Text style={s.insightText}>
            <Text style={{ fontFamily: F.bold, color: C.navy }}>Insight: </Text>
            o melhor dia da semana foi sábado com R$ 5.760,00 em faturamento.
            "Camiseta Oversized Bege" lidera com 14 vendas.
          </Text>
        </View>
      </Card>

      <Card>
        <CardTitle title="Top 3 da semana" />
        {top.map(([nome, v], i) => (
          <View key={nome} style={s.rowItem}>
            <View
              style={[
                s.rank,
                { backgroundColor: [C.navy, C.blueMid, C.blueLight][i] },
              ]}>
              <Text style={s.rankText}>{i + 1}</Text>
            </View>
            <Text style={[s.body, { flex: 1 }]}>{nome}</Text>
            <Text style={s.link}>{v}</Text>
          </View>
        ))}
      </Card>

      <Card>
        <CardTitle
          title="Estoque crítico"
          right={<Badge text="3" type="crit" />}
        />
        {criticos.map(([nome, tam, qtd, bg, fg]) => (
          <View key={nome} style={[s.alertBox, { backgroundColor: bg }]}>
            <View>
              <Text style={[s.bodyBold, { color: fg }]}>{nome}</Text>
              <Text style={s.small}>{tam}</Text>
            </View>
            <Text style={[s.bodyBold, { color: fg }]}>{qtd}</Text>
          </View>
        ))}
      </Card>

      <Card>
        <CardTitle title="Últimas transações" />
        <FlatList
          data={transacoes}
          keyExtractor={([nome]) => nome}
          scrollEnabled={false}
          renderItem={({ item: [nome, q, v] }) => (
            <View style={s.tableRow}>
              <Text style={[s.body, { flex: 1 }]}>{nome}</Text>
              <Text style={[s.small, { marginRight: 10 }]}>{q}</Text>
              <Text style={s.bodyBold}>{v}</Text>
            </View>
          )}
        />
      </Card>
    </>
  );
};

export default DashboardScreen;
