'use client';

import { useCallback } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';

/**
 * Custom hook for HTMX counter logic
 * Combines counter state and console message functionality
 */
export function useHtmxCounter() {
  const { count, increment: incrementCount } = useCounter('htmx');
  const addMessage = useConsoleMessage();

  const increment = useCallback(() => {
    incrementCount();
    addMessage('htmx');
  }, [incrementCount, addMessage]);

  return {
    count,
    increment,
  };
}