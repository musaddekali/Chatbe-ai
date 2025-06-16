'use client';

import {Bar, BarChart, CartesianGrid, XAxis} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui';

const chartData = [
  {day: '5 Jan', app: 120, web: 180, agent: 75},
  {day: '10 Jan', app: 135, web: 190, agent: 80},
  {day: '15 Jan', app: 145, web: 200, agent: 85},
  {day: '20 Jan', app: 130, web: 175, agent: 78},
  {day: '25 Jan', app: 150, web: 195, agent: 90},
  {day: '30 Jan', app: 160, web: 185, agent: 88},
  {day: '4 Feb', app: 155, web: 200, agent: 92},
  {day: '9 Feb', app: 170, web: 210, agent: 97},
  {day: '14 Feb', app: 165, web: 195, agent: 91},
  {day: '19 Feb', app: 175, web: 220, agent: 96},
  {day: '24 Feb', app: 180, web: 225, agent: 99},
  {day: '1 Mar', app: 190, web: 230, agent: 105},
  {day: '6 Mar', app: 200, web: 240, agent: 110},
  {day: '11 Mar', app: 185, web: 215, agent: 103},
  {day: '16 Mar', app: 195, web: 235, agent: 108},
];

const chartConfig = {
  app: {
    label: 'App',
    color: 'var(--chart-1)',
  },
  web: {
    label: 'Website',
    color: 'var(--chart-2)',
  },
  agent: {
    label: 'Agent',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;

export default function ActiveUsersChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[200px] min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          // tickFormatter={value => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        {/* <ChartLegend content={<ChartLegendContent />} /> */}
        <Bar dataKey="app" fill="var(--color-app)" radius={4} />
        <Bar dataKey="web" fill="var(--color-web)" radius={4} />
        <Bar dataKey="agent" fill="var(--color-agent)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
