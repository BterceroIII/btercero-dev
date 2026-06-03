# AGENTS.md

## Commands
- Use `pnpm` for repo commands; `pnpm-lock.yaml` is the root lockfile and no `packageManager` field is set.
- `pnpm dev` starts the Vite dev server.
- `pnpm build` runs `tsc -b` before `vite build`; use it for full verification.
- `pnpm lint` runs `eslint .`.
- No test script is configured in `package.json`; do not assume a test runner exists.

## App Structure
- This is a single Vite React 19 TypeScript app, not a monorepo.
- Runtime entrypoint is `src/main.tsx`; `src/App.tsx` currently renders `LoginPage` from `src/components/auth/LoginPage.tsx`.
- The `@/*` alias maps to `src/*` in both `vite.config.ts` and `tsconfig.app.json`.
- TypeScript uses `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`; avoid enums/namespaces and unused imports/params.

## UI And Styling
- shadcn is configured in `components.json` with style `base-nova`, base primitives from `@base-ui/react`, Tailwind v4, CSS at `src/index.css`, and lucide icons.
- Use existing UI sources in `src/components/ui/*` and `cn` from `@/lib/utils`; this local `cn` only wraps `clsx` and does not call `tailwind-merge`.
- Tailwind theme tokens and shadcn CSS variables live in `src/index.css`; there is no `tailwind.config.*` file.
- For shadcn registry work, prefer the configured shadcn MCP or `pnpm exec shadcn ...`; inspect generated files after adding/updating components.

## OpenCode
- `opencode.json` configures local `shadcn` and `filesystem` MCP servers for this repo; keep repo instructions in `AGENTS.md` unless changing OpenCode behavior itself.
