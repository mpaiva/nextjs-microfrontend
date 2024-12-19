export const STATE_EVENT_PREFIX = 'state';

export function createStateEventKey(key: string): string {
  return `${STATE_EVENT_PREFIX}:${key}`;
}

export const EVENT_TYPES = {
  STATE_CHANGE: 'state:change',
  COUNTER: {
    INCREMENT: 'counter:increment',
    RESET: 'counter:reset'
  }
} as const;