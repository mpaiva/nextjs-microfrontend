'use client';

import { useSharedState } from '@/lib/shared/hooks/useSharedState';
import { CounterButton } from './CounterButton';
import { CounterDisplay } from './CounterDisplay';

export function AngularCounter() {
  const [count, setCount] = useSharedState('counter', 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={handleIncrement}>
        Increment Counter
      </CounterButton>
      <CounterDisplay value={count} />
    </div>
  );
}