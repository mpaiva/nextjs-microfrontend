"use client";

import { useSharedState } from "@/lib/backbone-integration/hooks/useSharedState";

export function Counter() {
  const [count, setCount] = useSharedState("counter", 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">React Counter</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Increment Counter: {count}
      </button>
    </div>
  );
}