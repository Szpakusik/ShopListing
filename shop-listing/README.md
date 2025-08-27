## Shop Listing

A React + TypeScript + Vite app for listing products.

### Requirements
- **Node.js**: 18 or newer
- **npm**: 9+ (comes with Node)

### Install
```bash
npm install
```

### Run (development)
Starts the dev server with HMR on a local port (usually 5173).
```bash
npm run dev
```

### Build (production)
Generates a production build to `dist/`.
```bash
npm run build
```

### Preview built app
Serves the contents of `dist/` locally to verify the production build.
```bash
npm run preview
```

### Lint
Runs ESLint across the project.
```bash
npm run lint
```

### Project structure (key paths)
- `src/` — application source
- `src/components/` — UI components
- `src/api/` — data fetching helpers
- `src/types/` — TypeScript types

### Notes
- Default scripts are defined in `package.json`.
- If the dev server port is busy, Vite will pick another port and print it in the console.