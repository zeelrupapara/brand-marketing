# Haley Mae Website — Developer Handoff

This package contains the complete source for the approved Haley Mae brand-management website.

## Included

- `app/page.tsx` — complete page structure and written content
- `app/globals.css` — complete styling and responsive desktop/tablet/mobile layouts
- `app/layout.tsx` — page title, description, Open Graph content, and other metadata
- `public/images/hero.png` — hero image, 1584 × 990 PNG
- `public/images/strategy.png` — brand-strategy image, 1774 × 887 PNG
- `public/images/reputation.png` — reputation-management image, 1448 × 1086 PNG
- Project configuration, build scripts, lockfile, and validation files

## Technology

- React 19
- Next-compatible Vinext application
- TypeScript
- Vite
- CSS with responsive breakpoints at 980px and 640px

## Local setup

1. Install Node.js 22.13 or newer.
2. Run `npm run install:ci`.
3. Run `npm run dev` for local development.
4. Run `npm run build` for a production build.

## Moving to another platform

The presentation is front-end only and does not require a database or custom backend. A developer may retain the current project structure or translate `app/page.tsx` and `app/globals.css` into another React/Next.js environment.

The images must remain under `/public/images/` unless their paths in `app/page.tsx` are updated.

## Contact-button note

The current Brand Review button uses the temporary address `hello@haleymae.com`. Replace it with Haley's confirmed email address or scheduling/contact-form URL before a public launch.

## Current saved website

https://haley-mae-brand.tatenhan.chatgpt.site
