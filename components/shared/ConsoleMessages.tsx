'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/hooks/useStore';
import { cn } from '@/lib/utils';

function MessageContent({ content }: { content: string }) {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Split the content by URLs
  const parts = content.split(urlRegex);
  const matches = content.match(urlRegex) || [];
  
  return (
    <>
      {parts.map((part, index) => {
        // If this part matches a URL, render it as a link
        if (matches.includes(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
              onClick={(e) => e.stopPropagation()}
            >
              {part}
            </a>
          );
        }
        // Otherwise render it as text
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function ConsoleMessages() {
  const [messages, setMessages] = useStore<string[]>('console-messages', []);
  const [fadeIndex, setFadeIndex] = useState<number | null>(null);

  useEffect(() => {
    if (messages.length > 5) {
      setMessages(messages.slice(-5));
    }
  }, [messages, setMessages]);

  useEffect(() => {
    if (messages.length > 0) {
      setFadeIndex(messages.length - 1);
      const timer = setTimeout(() => setFadeIndex(null), 500);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  if (messages.length === 0) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm text-gray-400 mb-2">Framework Counter Instructions:</div>
        <div className="space-y-1">
          {messages.map((message, index) => {
            const [timestamp, framework, ...rest] = message.split(' ');
            const content = rest.join(' ');
            
            return (
              <div
                key={index}
                className={cn(
                  "transition-opacity duration-500",
                  index === fadeIndex ? 'opacity-100' : 'opacity-75'
                )}
              >
                <span className="text-gray-400">{timestamp}</span>{' '}
                <span className={cn(
                  "font-semibold",
                  {
                    'text-[var(--framework-react)]': framework === '[REACT]',
                    'text-[var(--framework-angular)]': framework === '[ANGULAR]',
                    'text-[var(--framework-vue)]': framework === '[VUE]',
                    'text-[var(--framework-web)]': framework === '[WEB]',
                    'text-[var(--framework-htmx)]': framework === '[HTMX]',
                  }
                )}>
                  {framework}
                </span>{' '}
                <MessageContent content={content} />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}