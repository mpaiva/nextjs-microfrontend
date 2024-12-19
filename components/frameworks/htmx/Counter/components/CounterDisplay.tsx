'use client';

interface CounterDisplayProps {
  value: number;
}

/**
 * HTMX-specific counter display component
 * Shows the current count with framework-specific styling
 */
export function CounterDisplay({ value }: CounterDisplayProps) {
  return (
    <div className="text-lg font-medium text-[var(--framework-htmx)] dark:text-[var(--framework-htmx)]">
      Count: {value}
    </div>
  );
}