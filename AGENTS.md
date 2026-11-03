<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Hermione client

Next.js 16 App Router frontend for a volunteer event platform. Source is JavaScript/JSX only — `tsconfig.json` exists for Next's JS checking (`allowJs`, `strict: false`); do not introduce TypeScript unless asked.

## Architecture

- `src/app` — App Router pages. Data-fetching pages (`/events`, `/events/[id]`, `/manage-events`, `/my-events`) are async Server Components; forms, modals, and session UI use `"use client"`.
- `src/components` — shared UI. `src/lib` — Better Auth server/client setup.
- The backend is a separate Express app at `../assignment-8-server` (port 5000), not part of this repo. Do not add event CRUD API routes here; call the existing backend.
- Auth is Better Auth + MongoDB in `src/lib/auth.js`, exposed at `/api/auth/[...all]`; client helpers are in `src/lib/auth-client.js`. Server components read sessions with `auth.api.getSession({ headers: await headers() })`.
- Both auth and event data live in MongoDB database `hermione`; backend collections are `destination` (created events) and `joined` (joined events).

Backend contract (hardcoded as `http://localhost:5000` in 9 files, no env-based base URL):

```
GET    /events
GET    /events/:id
POST   /createEvent
PATCH  /events/:id
DELETE /events/:id
GET    /my-events/:email          # events the user joined
GET    /my-created-events/:email  # events the user created
POST   /joined
```

## Setup and commands

- `npm install`
- Start the backend first: `cd ../assignment-8-server && node index.js` (that repo has no `start`/`dev` script; it is ESM and listens on 5000).
- `npm run dev` — Next dev server on `http://localhost:3000`.
- `npm run lint` — the only automated check; it is clean at the time of writing.
- `npm run build` / `npm run start` — production build and serve.
- There is no test runner, `npm test`, or `typecheck` script. Do not invent one; use `npm run lint` plus manual browser checks.
- `npm run build` is memory-heavy (Turbopack + React Compiler). On this machine it can fail with `Zone Allocation failed` when free RAM is low — that is an environment OOM, not necessarily a code error.

## Environment

`.env` is gitignored and there is no `.env.example`. Required variables:

```
MONGODB_URI
BETTER_AUTH_SECRET
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```

`BETTER_AUTH_URL` is read in `src/lib/auth-client.js`, but it is not a `NEXT_PUBLIC_*` variable, so it is not exposed to browser bundles. The client works because Better Auth defaults to the current origin; use `NEXT_PUBLIC_*` for any new browser-side config.

## Conventions and gotchas

- Brand palette: navy `#003366` and gold `#F4C542`. Reuse these rather than introducing new theme colors.
- Tailwind v4 + daisyUI are imported in `src/app/globals.css` (`@import "tailwindcss"; @plugin "daisyui";`). Styling is utility-first.
- Existing code uses relative imports even though `@/*` → `src/*` is configured in `jsconfig.json`. Follow the relative-import style for consistency.
- Route casing matters: the create page is `/createEvent` (camelCase), while `/manage-events` and `/my-events` are kebab-case.
- `/my-events` dereferences `session.user.email` without a guard and will throw if signed out; test it signed in. `/manage-events` handles the signed-out case by rendering a login message.
- Event images are arbitrary remote URLs; `next.config.mjs` allows any HTTPS host. Some components use `unoptimized`, so do not assume Next image optimization is active everywhere.
- Next 16 async APIs are already used here: `const { id } = await params` and `await headers()`. Keep that pattern in new pages.
