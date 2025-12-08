# Privy Monorepo

A modern monorepo powered by pnpm, featuring:

- 🚀 **Vite** - Lightning fast build tool
- ⚛️ **React 18** - UI library
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **pnpm Workspaces** - Efficient monorepo management
- 🔥 **TypeScript** - Type safety

## Project Structure

```
privy/
├── apps/
│   └── web/                 # Vite + React web app
├── packages/
│   ├── ui/                  # Shared UI components
│   └── utils/               # Shared utilities
├── pnpm-workspace.yaml      # Workspace configuration
└── package.json            # Root configuration
```

## Getting Started

### Prerequisites

- Node.js (>= 18)
- pnpm (>= 8)

### Installation

```bash
# Clone the repository
git clone https://github.com/lijinhai255/privy.git
cd privy

# Install dependencies
npx pnpm install
```

### Development

```bash
# Start development server (Vite)
npx pnpm dev:web

# Start all packages in parallel
npx pnpm dev
```

### Build

```bash
# Build web app
npx pnpm build:web

# Build all packages
npx pnpm build

# Build only shared packages
npx pnpm build:packages
```

### Preview

```bash
# Preview production build
npx pnpm preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev:web` | Start web app in development mode |
| `pnpm build:web` | Build web app for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Lint all packages |
| `pnpm type-check` | Type check all packages |

## Shared Packages

### @privy/ui

Shared React components with TypeScript support.

```tsx
import { Button, Card } from '@privy/ui'

<Button onClick={handleClick}>Click me</Button>
<Card title="Title" content="Content" />
```

### @privy/utils

Utility functions for common tasks.

```tsx
import { formatDate, debounce, clamp } from '@privy/utils'

const date = formatDate(new Date())
const debouncedFn = debounce(fn, 300)
const value = clamp(num, 0, 100)
```

## Environment Variables

Create a `.env` file in `apps/web/`:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Privy Web App
```

## License

MIT
