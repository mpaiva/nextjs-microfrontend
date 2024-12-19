'use client';

import { Button } from '@/components/ui/button';

interface CounterButtonProps {
  onClick: () => void;
}

/**
 * HTMX-specific counter button component
 * Uses framework-specific styling and handles click events
 */
export function CounterButton({ onClick }: CounterButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="inline-flex items-center justify-center px-4 py-2 rounded-lg 
                text-white font-medium transition-colors duration-200
                bg-[var(--framework-htmx)] hover:bg-[var(--framework-htmx-hover)]
                focus:outline-none focus:ring-2 focus:ring-[var(--framework-htmx)] focus:ring-offset-2"
    >
      Increment Counter
    </Button>
  );
}