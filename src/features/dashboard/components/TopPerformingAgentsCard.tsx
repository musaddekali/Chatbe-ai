'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import {useState} from 'react';
import TopPerformingAgents from './charts/TopPerformingAgents';

export type TimeRangeOption = {
  value: string;
  label: string;
};

const timeRangeOptions: TimeRangeOption[] = [
  {value: '90d', label: 'Last 3 months'},
  {value: '30d', label: 'Last 30 days'},
  {value: '7d', label: 'Last 7 days'},
];

const defaultTimeRange = timeRangeOptions[0].value;

export default function TopPerformingAgentsCard() {
  const [selectedRange, setSelectedRange] = useState<string>(defaultTimeRange);

  return (
    <Card aria-label="Top performing agents">
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Top performing agents
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Jul 10 - Jul 17, 2025
        </CardDescription>
        <CardAction>
          <Select
            onValueChange={value => setSelectedRange(value)}
            defaultValue={defaultTimeRange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent>
              {timeRangeOptions.map(range => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <TopPerformingAgents />
      </CardContent>
    </Card>
  );
}
