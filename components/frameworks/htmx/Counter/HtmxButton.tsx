'use client';

interface HtmxButtonProps {
  onIncrement: () => void;
}

export function HtmxButton({ onIncrement }: HtmxButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center px-4 py-2 rounded-lg 
                text-white font-medium transition-colors duration-200
                bg-[var(--framework-htmx)] hover:bg-[var(--framework-htmx-hover)]
                focus:outline-none focus:ring-2 focus:ring-[var(--framework-htmx)] focus:ring-offset-2"
      hx-post="/api/counter/increment"
      hx-trigger="click"
      hx-target="#htmx-counter-value"
      hx-swap="innerHTML"
      onClick={onIncrement}
    >
      Increment Counter
    </button>
  );
}