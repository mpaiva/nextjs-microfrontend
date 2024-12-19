'use client';

interface HtmxDisplayProps {
  count: number;
}

export function HtmxDisplay({ count }: HtmxDisplayProps) {
  return (
    <div 
      id="htmx-counter-value"
      className="text-lg font-medium text-[var(--framework-htmx)]"
    >
      Count: {count}
    </div>
  );
}