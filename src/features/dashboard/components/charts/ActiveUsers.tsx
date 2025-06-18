'use client';

import {Bar, BarChart, CartesianGrid, XAxis} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui';
import {ChartDataItem} from '../TotalActiveUsersCard';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-2)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export default function ActiveUsers({
  filteredData,
}: {
  filteredData: ChartDataItem[];
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[200px] min-h-[200px] w-full">
      <BarChart accessibilityLayer data={filteredData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={value => {
            const date = new Date(value);
            return date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            });
          }}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={value => {
                return new Date(value).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: '2-digit',
                });
              }}
            />
          }
        />
        {/* <ChartLegend content={<ChartLegendContent />} /> */}
        <Bar
          stackId="a"
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          stackId="a"
          dataKey="mobile"
          fill="var(--color-mobile)"
          radius={[2, 2, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
