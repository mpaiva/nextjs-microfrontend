import type { Framework } from '../types/framework';

export function createCounterKey(framework: Framework): string {
  return `${framework}:counter`;
}

export function formatCounterValue(value: number): string {
  return `Count: ${value}`;
}

export function getFrameworkColor(framework: Framework): string {
  return `var(--framework-${framework})`;
}

export function getFrameworkHoverColor(framework: Framework): string {
  return `var(--framework-${framework}-hover)`;
}