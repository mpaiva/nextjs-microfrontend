'use client';

import { useCallback } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';
import { SVELTE_CONSTANTS } from '../utils/constants';
import type { SvelteCounterHook } from '../types';

/**
 * Custom hook for Svelte counter logic
 * Implements Svelte-like reactivity patterns while maintaining React compatibility
 */
export function useSvelteCounter(): SvelteCounterHook {
  const { count, increment: incrementCount } = useCounter('svelte');
  const addMessage = useConsoleMessage();

  const increment = useCallback(() => {
    incrementCount();
    addMessage('svelte');
  }, [incrementCount, addMessage]);

  return {
    count,
    increment,
  };
}