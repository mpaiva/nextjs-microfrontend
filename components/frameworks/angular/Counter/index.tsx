'use client';

import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';
import { CounterButton } from '@/components/shared/counter/Button';
import { CounterDisplay } from '@/components/shared/counter/Display';

export function AngularCounter() {
  const { count, increment } = useCounter('angular');
  const addMessage = useConsoleMessage();

  const handleIncrement = () => {
    increment();
    addMessage('angular');
  };

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={handleIncrement} framework="angular">
        Increment Counter
      </CounterButton>
      <CounterDisplay value={count} framework="angular" />
    </div>
  );
}