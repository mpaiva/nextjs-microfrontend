/**
 * HTMX counter type definitions
 */
export interface HtmxCounterState {
  count: number;
}

export interface HtmxCounterActions {
  increment(): void;
  reset(): void;
}

export interface HtmxButtonProps {
  onClick: () => void;
}

export interface HtmxDisplayProps {
  value: number;
}