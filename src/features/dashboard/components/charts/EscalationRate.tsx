'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui';

import {PieChart, Pie} from 'recharts';

type EscalationType = 'escalated-to-human' | 'resolved-by-bot' | 'unresolved';

type ChartItem = {
  date: string;
  escalation_type: EscalationType;
  value: number;
};

const chartData: ChartItem[] = [
  {
    date: '2024-04-01',
    escalation_type: 'escalated-to-human',
    value: 186,
  },
  {
    date: '2024-04-02',
    escalation_type: 'resolved-by-bot',
    value: 305,
  },
  {
    date: '2024-04-02',
    escalation_type: 'unresolved',
    value: 305,
  },
];

const chartConfig = {
  'escalated-to-human': {
    label: 'Escalated to Human',
    color: '#155DFC',
  },
  'resolved-by-bot': {
    label: 'Resolved by Bot',
    color: '#2B7FFF',
  },
  unresolved: {
    label: 'Unresolved',
    color: '#8EC5FF',
  },
} satisfies ChartConfig;

const chartDataWithColors = chartData.map(item => ({
  ...item,
  fill: chartConfig[item.escalation_type]?.color,
}));

export default function EscalationRate() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px]">
      <PieChart accessibilityLayer>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartDataWithColors}
          dataKey="value"
          nameKey={'escalation_type'}
        />
        <ChartLegend 
          content={<ChartLegendContent nameKey="escalation_type" />}
          className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}
