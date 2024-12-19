export const STATE_EVENT_PREFIX = 'state';

export function createStateEventKey(key: string): string {
  return `${STATE_EVENT_PREFIX}:${key}`;
}

export function createCounterKey(framework: string): string {
  return `${framework}:counter`;
}