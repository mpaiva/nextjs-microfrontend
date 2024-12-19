'use client';

import { useCallback } from 'react';
import { useStore } from './useStore';
import { createCounterKey } from '@/lib/store/utils';
import type { Framework } from '@/lib/types/framework';

export function useCounter(framework: Framework) {
  const counterKey = createCounterKey(framework);
  const [count, setCount] = useStore(counterKey, 0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return { count, increment };
}