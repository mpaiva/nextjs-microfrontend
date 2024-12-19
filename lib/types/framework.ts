export type Framework = 'react' | 'angular' | 'vue' | 'web' | 'htmx' | 'svelte';

export interface FrameworkProps {
  framework: Framework;
}

export interface CounterState {
  value: number;
}

export interface CounterActions {
  increment(): void;
  reset(): void;
}

export interface CounterHook {
  count: number;
  increment: () => void;
}