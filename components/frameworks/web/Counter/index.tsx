'use client';

import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';
import { CounterButton } from '@/components/shared/counter/Button';
import { CounterDisplay } from '@/components/shared/counter/Display';

export function WebCounter() {
  const { count, increment } = useCounter('web');
  const addMessage = useConsoleMessage();

  const handleIncrement = () => {
    increment();
    addMessage('web');
  };

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={handleIncrement} framework="web">
        Increment Counter
      </CounterButton>
      <CounterDisplay value={count} framework="web" />
    </div>
  );
}