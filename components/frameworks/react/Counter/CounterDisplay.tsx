'use client';

import { CounterDisplay as SharedCounterDisplay } from '@/components/shared/counter/Display';

interface CounterDisplayProps {
  value: number;
}

export function CounterDisplay({ value }: CounterDisplayProps) {
  return <SharedCounterDisplay value={value} framework="react" />;
}