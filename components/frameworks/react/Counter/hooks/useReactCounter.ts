'use client';

import { useCallback } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';

/**
 * Custom hook for React counter logic
 * Combines counter state and console message functionality
 */
export function useReactCounter() {
  const { count, increment: incrementCount } = useCounter('react');
  const addMessage = useConsoleMessage();

  const increment = useCallback(() => {
    incrementCount();
    addMessage('react');
  }, [incrementCount, addMessage]);

  return {
    count,
    increment,
  };
}