# Multi-Framework Counter System

This project showcases a modern micro-frontend architecture that demonstrates how different web frameworks can coexist and share state within a single application. It features multiple counter implementations using React, Angular-style, Vue-style, Web Components, and HTMX approaches, each maintaining its own patterns while sharing a unified state management system. The application includes an interactive console that provides framework-specific learning resources and documentation, making it an excellent educational tool for understanding different frontend architectures and state management patterns.

## Features

- Multiple framework implementations:
  - React (Modern hooks-based approach)
  - Angular-style (Component architecture)
  - Vue-style (Composition API patterns)
  - Web Components (Native web standards)
  - HTMX (Hypermedia-driven approach)
- Shared state management across frameworks
- Interactive console with framework-specific learning resources
- Responsive design with Tailwind CSS
- Dark mode support

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes for HTMX integration
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout component
├── components/            # React components
│   ├── frameworks/        # Framework-specific implementations
│   ├── shared/           # Shared components
│   └── zones/            # Framework zone wrappers
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and types
│   ├── store/           # Shared state management
│   └── types/           # TypeScript type definitions
└── styles/              # CSS styles and design tokens
```

## Key Technologies

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- HTMX
- Shared State Management

## Architecture

The project demonstrates a micro-frontend architecture where different frameworks coexist and share state. Each counter implementation follows its framework's best practices while maintaining consistency through shared components and state management.

## State Management

A custom store implementation provides shared state across all framework implementations:

```typescript
class Store {
  private state: SharedState = {};
  private emitter: EventEmitter;

  setState<T>(key: string, value: T): void {
    this.state[key] = value;
    this.emitter.emit(createStateEventKey(key), value);
  }

  getState<T>(key: string): T | undefined {
    return this.state[key] as T;
  }

  subscribe<T>(key: string, callback: StateCallback<T>): () => void {
    const eventKey = createStateEventKey(key);
    this.emitter.on(eventKey, callback);
    return () => this.emitter.off(eventKey, callback);
  }
}
```

## Framework Implementations

### React Counter
- Uses modern React patterns with hooks
- Demonstrates component composition
- Implements custom hooks for state management

### Angular-style Counter
- Follows Angular architecture patterns
- Uses dependency injection patterns
- Implements lifecycle management

### Vue-style Counter
- Implements Vue's Composition API patterns
- Uses reactive state management
- Demonstrates computed properties pattern

### Web Components Counter
- Uses native web component standards
- Implements shadow DOM concepts
- Shows custom element lifecycle

### HTMX Counter
- Demonstrates hypermedia-driven approach
- Uses HTMX attributes for interactions
- Implements server-side state updates

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Export static site:
```bash
npm run export
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this code for learning and inspiration!