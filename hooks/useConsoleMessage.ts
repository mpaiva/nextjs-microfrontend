'use client';

import { useCallback } from 'react';
import { useStore } from './useStore';
import type { Framework } from '@/lib/types/framework';

const frameworkStories: Record<Framework, string[]> = {
  react: [
    "Let's start building with React! First, we create a functional component using modern React patterns. 📚 Learn more: https://react.dev/learn/your-first-component",
    "Now we'll use the useState hook for state management - this is React's way of handling component-level state. 🔄 Dive deeper: https://react.dev/reference/react/useState",
    "Time to add useEffect for side effects and cleanup. This hook helps manage component lifecycle. 🔍 Explore: https://react.dev/reference/react/useEffect",
    "Let's implement event handling using React's synthetic events. Notice how we maintain immutability? 🎯 Details: https://react.dev/learn/responding-to-events",
    "Finally, we're seeing React's unidirectional data flow in action. Props down, events up! 🔄 Master it: https://react.dev/learn/thinking-in-react",
    "For optimization, we could add useMemo or useCallback. Let's see why... 🚀 Performance tips: https://react.dev/reference/react/useMemo",
    "Consider adding Error Boundaries for robust error handling. 🛡️ Learn more: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
    "Custom hooks can help extract this logic for reuse. 🎣 Best practices: https://react.dev/learn/reusing-logic-with-custom-hooks"
  ],
  angular: [
    "Welcome to Angular! Let's start with component architecture using decorators. 🏗️ Guide: https://angular.io/guide/component-overview",
    "Now we'll implement dependency injection - a core Angular pattern. 💉 Deep dive: https://angular.io/guide/dependency-injection",
    "Setting up two-way data binding with ngModel. Watch the magic! ✨ Learn more: https://angular.io/guide/two-way-binding",
    "Time to add lifecycle hooks like ngOnInit and ngOnDestroy. 🔄 Details: https://angular.io/guide/lifecycle-hooks",
    "Let's optimize with change detection strategies. 🚀 Performance tips: https://angular.io/guide/change-detection",
    "Adding RxJS for reactive state management. 🔄 Master observables: https://angular.io/guide/rx-library",
    "Implementing Angular services for clean architecture. 🏗️ Best practices: https://angular.io/guide/architecture-services",
    "Finally, let's add unit tests with TestBed. 🧪 Testing guide: https://angular.io/guide/testing"
  ],
  vue: [
    "Welcome to Vue! Let's start with the Composition API. 🎯 Guide: https://vuejs.org/guide/introduction.html",
    "Setting up reactive refs and reactive() for state management. ⚡ Learn more: https://vuejs.org/guide/essentials/reactivity-fundamentals.html",
    "Time for computed properties - Vue's way of handling derived state. 🧮 Details: https://vuejs.org/guide/essentials/computed.html",
    "Adding watchers for side effects. Notice the deep watching options! 👀 Explore: https://vuejs.org/guide/essentials/watchers.html",
    "Let's implement methods and event handling. 🎯 Documentation: https://vuejs.org/guide/essentials/event-handling.html",
    "Using provide/inject for dependency injection. 💉 Advanced: https://vuejs.org/guide/components/provide-inject.html",
    "Implementing Vue's Suspense for async components. ⏳ Learn more: https://vuejs.org/guide/built-ins/suspense.html",
    "Finally, adding composables for logic reuse. 🔄 Best practices: https://vuejs.org/guide/reusability/composables.html"
  ],
  web: [
    "Let's create Web Components! Starting with custom elements. 🏗️ MDN Guide: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements",
    "Setting up Shadow DOM for style encapsulation. 🎨 Learn more: https://developer.mozilla.org/docs/Web/Web_Components/Using_shadow_DOM",
    "Implementing lifecycle callbacks like connectedCallback. 🔄 Details: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks",
    "Adding observed attributes for reactive updates. ⚡ Documentation: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks",
    "Handling events in Web Components. 🎯 Best practices: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements#adding_custom_events",
    "Implementing slots for content projection. 📥 Guide: https://developer.mozilla.org/docs/Web/Web_Components/Using_templates_and_slots",
    "Adding static properties for better DX. 🛠️ Advanced: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements#custom_element_reactions",
    "Finally, let's talk about styling best practices. 🎨 Tips: https://developer.mozilla.org/docs/Web/CSS/::part"
  ],
  htmx: [
    "Welcome to HTMX! Let's start with basic attributes. 🎯 Guide: https://htmx.org/docs/#introduction",
    "Setting up AJAX requests with hx-post. 🔄 Learn more: https://htmx.org/docs/#ajax",
    "Implementing swap strategies for smooth updates. ⚡ Details: https://htmx.org/docs/#swapping",
    "Adding triggers for interactive behavior. 🎯 Documentation: https://htmx.org/docs/#triggers",
    "Using indicators for loading states. ⏳ Best practices: https://htmx.org/docs/#indicators",
    "Implementing validation with server responses. ✅ Guide: https://htmx.org/docs/#validation",
    "Adding websocket support for real-time updates. 🔄 Advanced: https://htmx.org/docs/#websockets",
    "Finally, optimizing with view transitions. 🚀 Learn more: https://htmx.org/docs/#view-transitions"
  ],
  svelte: [
    "Welcome to Svelte! Let's explore reactive declarations. 🎯 Guide: https://svelte.dev/tutorial/reactive-declarations",
    "Setting up stores for state management. ⚡ Learn more: https://svelte.dev/tutorial/writable-stores",
    "Implementing lifecycle functions with onMount. 🔄 Details: https://svelte.dev/tutorial/onmount",
    "Adding reactive statements with $: syntax. 🎯 Documentation: https://svelte.dev/tutorial/reactive-statements",
    "Using actions for DOM manipulation. 🎨 Best practices: https://svelte.dev/tutorial/actions",
    "Implementing transitions and animations. ✨ Guide: https://svelte.dev/tutorial/transition",
    "Adding event modifiers for better DX. 🎯 Learn more: https://svelte.dev/tutorial/event-modifiers",
    "Finally, exploring stores and context. 🔄 Advanced: https://svelte.dev/tutorial/context-api"
  ]
};

/**
 * Custom hook for managing console messages
 * Handles framework-specific learning resources and message history
 */
export function useConsoleMessage() {
  const [messages, setMessages] = useStore<string[]>('console-messages', []);
  const [counters, setCounters] = useStore<Record<Framework, number>>('story-counters', {
    react: 0,
    angular: 0,
    vue: 0,
    web: 0,
    htmx: 0,
    svelte: 0
  });

  const addMessage = useCallback((framework: Framework) => {
    const currentCount = counters[framework] ?? 0;
    const stories = frameworkStories[framework];
    
    if (!stories) {
      console.warn(`No stories found for framework: ${framework}`);
      return;
    }

    if (currentCount < stories.length) {
      const timestamp = new Date().toLocaleTimeString();
      const message = `${timestamp} [${framework.toUpperCase()}] ${stories[currentCount]}`;
      
      setMessages(prevMessages => {
        const newMessages = [...prevMessages, message];
        // Keep only the last 5 messages
        return newMessages.slice(-5);
      });
      
      setCounters(prevCounters => ({
        ...prevCounters,
        [framework]: currentCount + 1
      }));
    } else {
      // Reset the counter and start over
      setCounters(prevCounters => ({
        ...prevCounters,
        [framework]: 0
      }));
    }
  }, [setMessages, setCounters, counters]);

  return addMessage;
}