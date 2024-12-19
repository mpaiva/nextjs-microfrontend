import { NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { createCounterKey } from '@/lib/store/utils';

export async function POST() {
  const counterKey = createCounterKey('htmx');
  const currentCount = store.getState<number>(counterKey) ?? 0;
  const newCount = currentCount + 1;
  store.setState(counterKey, newCount);
  
  return NextResponse.json({ count: newCount });
}