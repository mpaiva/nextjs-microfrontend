'use client';

import { useCounter } from '@/hooks/useCounter';
import { CounterButton } from '@/components/shared/counter/Button';
import { CounterDisplay } from '@/components/shared/counter/Display';

export function ReactCounter() {
  const { count, increment } = useCounter();

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={increment} framework="react">
        Increment Counter
      </CounterButton>
      <CounterDisplay value={count} framework="react" />
    </div>
  );
}