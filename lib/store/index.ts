import { EventEmitter } from 'events';
import { createStateEventKey } from './utils';
import type { SharedState, StateCallback } from './types';

class Store {
  private static instance: Store;
  private state: SharedState = {};
  private emitter: EventEmitter;

  private constructor() {
    this.emitter = new EventEmitter();
    this.emitter.setMaxListeners(100);
  }

  public static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  setState<T>(key: string, value: T): void {
    this.state[key] = value;
    const eventKey = createStateEventKey(key);
    this.emitter.emit(eventKey, value);
  }

  getState<T>(key: string): T | undefined {
    return this.state[key] as T;
  }

  subscribe<T>(key: string, callback: StateCallback<T>): () => void {
    if (typeof callback !== 'function') {
      throw new Error(`Invalid callback provided for key "${key}"`);
    }
    const eventKey = createStateEventKey(key);
    this.emitter.on(eventKey, callback);
    
    return () => {
      this.emitter.off(eventKey, callback);
    };
  }
}

export const store = Store.getInstance();