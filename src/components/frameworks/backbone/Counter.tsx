'use client';

import { BackboneWrapper } from '@/lib/backbone-integration/BackboneWrapper';
import { CounterView } from './CounterView';

export function BackboneCounter() {
  return (
    <BackboneWrapper
      backboneComponent={CounterView}
      className="backbone-counter text-center"
      ariaLabel="Backbone Counter Component"
    />
  );
}