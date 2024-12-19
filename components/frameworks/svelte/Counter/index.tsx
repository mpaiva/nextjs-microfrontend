'use client';

import { useSvelteCounter } from './hooks/useSvelteCounter';
import { CounterButton } from './components/CounterButton';
import { CounterDisplay } from './components/CounterDisplay';
import { getFrameworkContainerClasses } from '@/lib/utils/styles';

/**
 * Main Svelte counter component
 * Combines counter logic and UI components in a Svelte-inspired structure
 */
export function SvelteCounter() {
  const { count, increment } = useSvelteCounter();

  return (
    <div className={getFrameworkContainerClasses()}>
      <CounterButton onClick={increment} />
      <CounterDisplay value={count} />
    </div>
  );
}