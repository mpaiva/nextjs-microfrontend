'use client';

import { ReactCounter } from '@/components/frameworks/react/Counter';
import { AngularCounter } from '@/components/frameworks/angular/Counter';
import { VueCounter } from '@/components/frameworks/vue/Counter';
import { WebCounter } from '@/components/frameworks/web/Counter';
import { HtmxCounter } from '@/components/frameworks/htmx/Counter';
import { SvelteCounter } from '@/components/frameworks/svelte/Counter';
import { ZoneWrapper } from '@/components/zones/ZoneWrapper';
import { ConsoleMessages } from '@/components/shared/ConsoleMessages';
import { InfoIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-gray-50 p-8 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Multi-Framework Counter System
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfo(!showInfo)}
              className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle information"
            >
              <InfoIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
          
          {showInfo && (
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-in fade-in slide-in-from-top-1 duration-300">
              Experience the power of micro-frontend architecture through this interactive demonstration. 
              Each counter implementation showcases different frontend frameworks and approaches, from 
              React's modern hooks to Svelte's compile-time reactivity. All counters share a unified 
              state while maintaining their unique framework characteristics. Watch the console below 
              for framework-specific tips and best practices as you interact with each counter.
            </p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ZoneWrapper framework="react" title="React Counter">
              <ReactCounter />
            </ZoneWrapper>

            <ZoneWrapper framework="angular" title="Angular-style Counter">
              <AngularCounter />
            </ZoneWrapper>

            <ZoneWrapper framework="vue" title="Vue-style Counter">
              <VueCounter />
            </ZoneWrapper>

            <ZoneWrapper framework="web" title="Web Component Counter">
              <WebCounter />
            </ZoneWrapper>

            <ZoneWrapper framework="htmx" title="HTMX Counter">
              <HtmxCounter />
            </ZoneWrapper>

            <ZoneWrapper framework="svelte" title="Svelte Counter">
              <SvelteCounter />
            </ZoneWrapper>
          </div>
        </div>
      </main>
      <ConsoleMessages />
    </>
  );
}