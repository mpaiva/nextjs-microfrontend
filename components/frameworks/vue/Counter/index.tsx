'use client';

import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';
import { CounterButton } from '@/components/shared/counter/Button';
import { CounterDisplay } from '@/components/shared/counter/Display';

export function VueCounter() {
  const { count, increment } = useCounter('vue');
  const addMessage = useConsoleMessage();

  const handleIncrement = () => {
    increment();
    addMessage('vue');
  };

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={handleIncrement} framework="vue">
        Increment Counter
      </CounterButton>
      <CounterDisplay value={count} framework="vue" />
    </div>
  );
}