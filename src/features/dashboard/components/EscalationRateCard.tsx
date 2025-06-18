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

export type TimeRangeOption = {
  value: string;
  label: string;
};

// For testing only
const timeRangeOptions: TimeRangeOption[] = [
  {value: 'last_3_month', label: 'Last 3 months'},
  {value: 'last_month', label: 'Last month'},
  {value: 'this_year', label: 'This year'},
  {value: 'last_year', label: 'Last year'},
];

const defaultTimeRange = timeRangeOptions[0].value;

export default function EscalationRateCard() {
  const [selectedRange, setSelectedRange] = useState<string>(defaultTimeRange);

  return (
    <Card aria-label="Escalation rate">
      <CardHeader>
        <CardTitle className="text-base font-medium">
          Total active users
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Showing total active users for the{' '}
          {selectedRange.replaceAll('_', ' ')}
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
        {/* <ActiveUsersChart /> */}
      </CardContent>
    </Card>
  );
}
