# Elian David Rivera Guaca — Portfolio

A single-page portfolio built with React, JavaScript, Vite, and Tailwind CSS. The content and project links are based on my public [GitHub profile](https://github.com/aZian10).

## Run locally

```bash
npm ci
npm run dev
```

## Build and check

```bash
npm run lint
npm run build
npm run preview
```

## Deploy to Vercel

Import this GitHub repository into Vercel. Vercel should detect Vite automatically. Use these settings if it asks:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install` (the lockfile is included)
- Environment variables: none

`vercel.json` sends page requests to the SPA entry point. After deployment, verify the homepage and refresh it directly. Add a canonical URL and `og:url` only after choosing the final domain.
