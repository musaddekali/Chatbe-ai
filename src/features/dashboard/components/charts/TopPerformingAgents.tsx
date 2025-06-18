'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui';

import {
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Bar,
  LabelList,
} from 'recharts';

const chartData = [
  {date: '2024-04-01', agent_type: 'Sales representative', value: 186},
  {date: '2024-04-02', agent_type: 'Customer support agent', value: 305},
  {date: '2024-04-02', agent_type: 'Night support agent', value: 305},
];

const chartConfig = {
  agent: {
    label: 'Agent',
    color: 'var(--chart-1)',
  },
  label: {
    color: '#fff',
  },
} satisfies ChartConfig;

export default function TopPerformingAgents() {
  return (
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          maxBarSize={40}
          margin={{
            right: 16,
          }}>
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="agent_type"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey="value" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="value"
            layout="vertical"
            fill="var(--color-agent)"
            radius={8}>
            <LabelList
              dataKey="agent_type"
              position="insideLeft"
              offset={8}
              className="fill-(--color-label)"
              fontSize={12}
            />
            <LabelList
              dataKey="value"
              position="right"
              offset={8}
              className="fill-foreground"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
  );
}
