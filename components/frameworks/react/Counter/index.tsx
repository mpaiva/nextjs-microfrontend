'use client';

import { useReactCounter } from './hooks/useReactCounter';
import { CounterButton } from './components/CounterButton';
import { CounterDisplay } from './components/CounterDisplay';

/**
 * Main React counter component
 * Combines counter logic and UI components
 */
export function ReactCounter() {
  const { count, increment } = useReactCounter();

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={increment} />
      <CounterDisplay value={count} />
    </div>
  );
}