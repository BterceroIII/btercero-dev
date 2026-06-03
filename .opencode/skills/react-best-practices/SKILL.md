---
name: react-best-practices
description: React best practices, component boundaries, state placement, effects, rendering behavior, and modern React patterns. Use when writing or reviewing React code in this repo.
---

# React Best Practices

Use this skill for React implementation and review work in this repository.

## Repo-Specific Context

- The app is a Vite React 19 TypeScript app.
- `src/main.tsx` is the runtime entrypoint.
- `src/App.tsx` is the current top-level app component.
- The React Compiler is enabled in `vite.config.ts`.

## Working Rules

- Keep state as local as practical; lift only when multiple consumers need it.
- Prefer straightforward derived values over duplicated state.
- Use effects only for synchronization with external systems, not for routine derivation.
- Follow existing repo patterns before introducing memoization helpers.
- Do not add `useMemo` or `useCallback` by default; use them only when they solve a demonstrated problem or match surrounding code.
- When event logic needs stable semantics, consider modern React patterns such as `useEffectEvent` if appropriate.
- Keep components focused; extract only when reuse or readability clearly improves.

## Verification

- Check for unnecessary state, effect chains, and prop drilling.
- Check loading, error, and empty states, not just the success path.
- Use Context7 when React or library behavior may have changed across versions.
