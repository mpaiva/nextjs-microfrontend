/**
 * Type definitions for Svelte counter implementation
 */
export interface SvelteCounterState {
  count: number;
}

export interface SvelteCounterActions {
  increment(): void;
  reset(): void;
}

export interface SvelteButtonProps {
  onClick: () => void;
}

export interface SvelteDisplayProps {
  value: number;
}

export interface SvelteCounterHook {
  count: number;
  increment: () => void;
}