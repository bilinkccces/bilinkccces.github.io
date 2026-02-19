# BILINK CCCES Official Website

React + Vite + TypeScript + Tailwind CSS implementation for `bilinkccces.ca`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment (fix white-screen issue)

This project must be deployed from the **built `dist/` artifact**, not raw source files.

1. In GitHub repository settings, open **Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` to trigger `.github/workflows/deploy.yml`.
4. The workflow runs `npm ci` + `npm run build` and deploys `dist` automatically.

> If Pages serves repository root directly (`index.html` + `/src/main.tsx`), the site will white-screen because browser cannot execute TypeScript/TSX source without Vite build.

## Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- React Router
