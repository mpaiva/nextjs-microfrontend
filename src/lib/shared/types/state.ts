export interface SharedState {
  [key: string]: any;
}

export type StateCallback<T = any> = (value: T) => void;

export interface StateManager {
  setState<T>(key: string, value: T): void;
  getState<T>(key: string): T | undefined;
  subscribe<T>(key: string, callback: StateCallback<T>): () => void;
}