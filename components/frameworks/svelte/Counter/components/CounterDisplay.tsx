'use client';

import { getFrameworkDisplayClasses } from '@/lib/utils/styles';
import { formatCounterValue } from '@/lib/utils/counter';
import { SVELTE_CONSTANTS } from '../utils/constants';
import type { SvelteDisplayProps } from '../types';

/**
 * Svelte-specific counter display component
 */
export function CounterDisplay({ value }: SvelteDisplayProps) {
  return (
    <div 
      className={getFrameworkDisplayClasses('svelte')}
      aria-label={SVELTE_CONSTANTS.ARIA_LABELS.DISPLAY}
    >
      {formatCounterValue(value)}
    </div>
  );
}