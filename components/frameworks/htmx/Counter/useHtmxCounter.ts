'use client';

import { useEffect, useRef } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useConsoleMessage } from '@/hooks/useConsoleMessage';
import htmx from 'htmx.org';

export function useHtmxCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { count, increment } = useCounter('htmx');
  const addMessage = useConsoleMessage();

  useEffect(() => {
    if (containerRef.current) {
      htmx.process(containerRef.current);
    }
  }, []);

  const handleIncrement = () => {
    increment();
    addMessage('htmx');
  };

  return {
    containerRef,
    count,
    handleIncrement,
  };
}