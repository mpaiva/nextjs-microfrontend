'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { buttonStyles } from '../styles/button';
import { SVELTE_CONSTANTS } from '../utils/constants';
import type { SvelteButtonProps } from '../types';

export function CounterButton({ onClick }: SvelteButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        buttonStyles.base,
        buttonStyles.hover,
        buttonStyles.focus
      )}
      aria-label={SVELTE_CONSTANTS.ARIA_LABELS.BUTTON}
    >
      Increment Counter
    </Button>
  );
}