'use client';

import {Bar, BarChart, CartesianGrid, XAxis} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui';

const chartData = [
  { day: "5 Jan", desktop: 132, mobile: 75 },
  { day: "10 Jan", desktop: 145, mobile: 82 },
  { day: "15 Feb", desktop: 198, mobile: 92 },
  { day: "20 Feb", desktop: 205, mobile: 95 },
  { day: "5 Mar", desktop: 145, mobile: 110 },
  { day: "10 Mar", desktop: 152, mobile: 108 },
  { day: "15 Apr", desktop: 220, mobile: 130 },
  { day: "20 Apr", desktop: 210, mobile: 125 },
  { day: "5 May", desktop: 160, mobile: 100 },
  { day: "10 May", desktop: 170, mobile: 104 },
  { day: "15 Jun", desktop: 175, mobile: 115 },
  { day: "20 Jun", desktop: 180, mobile: 112 },
  { day: "5 Jul", desktop: 210, mobile: 140 },
  { day: "10 Jul", desktop: 205, mobile: 138 },
  { day: "15 Aug", desktop: 189, mobile: 120 },
  { day: "20 Aug", desktop: 192, mobile: 118 },
  { day: "5 Sep", desktop: 202, mobile: 125 },
  { day: "10 Sep", desktop: 198, mobile: 122 },
  { day: "15 Oct", desktop: 230, mobile: 160 },
  { day: "20 Oct", desktop: 225, mobile: 158 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  }
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
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
