import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

/* data: [{ label, bars: [{ value, color }] }] */
const BarChart = ({ data, height, barsHeight, barWidth, labelSize }) => (
  <View style={[s.chart, height && { height }]}>
    {data.map(({ label, bars }) => (
      <View key={label} style={s.chartCol}>
        <View style={[s.chartBars, barsHeight && { height: barsHeight }]}>
          {bars.map((b, i) => (
            <View
              key={i}
              style={[
                s.bar,
                { height: b.value, backgroundColor: b.color },
                barWidth && { width: barWidth },
              ]}
            />
          ))}
        </View>
        <Text
          style={[s.chartLabel, labelSize && { fontSize: labelSize }]}
          numberOfLines={1}>
          {label}
        </Text>
      </View>
    ))}
  </View>
);

export default BarChart;
