'use client';

import { useHtmxCounter } from './hooks/useHtmxCounter';
import { CounterButton } from './components/CounterButton';
import { CounterDisplay } from './components/CounterDisplay';

/**
 * Main HTMX counter component
 * Combines counter logic and UI components
 */
export function HtmxCounter() {
  const { count, increment } = useHtmxCounter();

  return (
    <div className="text-center space-y-4">
      <CounterButton onClick={increment} />
      <CounterDisplay value={count} />
    </div>
  );
}