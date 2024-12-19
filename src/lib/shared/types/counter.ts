export interface CounterState {
  value: number;
}

export interface CounterActions {
  increment(): void;
  reset(): void;
}