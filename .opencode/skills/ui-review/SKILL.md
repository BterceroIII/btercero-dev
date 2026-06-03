---
name: ui-review
description: UI review, UX review, visual polish, mobile responsiveness, spacing, hierarchy, and interaction critique. Use when reviewing or improving React screens, flows, layouts, or component composition.
---

# UI Review

Use this skill when the task is to review or improve UI quality, not just make code compile.

## Review Priorities

1. Visual hierarchy: can users tell what matters first?
2. Layout rhythm: consistent spacing, alignment, and grouping.
3. Interaction clarity: obvious primary actions, states, and affordances.
4. Responsive behavior: works cleanly on mobile first, then desktop.
5. Empty, loading, and error states: avoid polished-happy-path-only UI.

## Working Rules

- Preserve the repo's current visual language unless the user asks for a redesign.
- Prefer fixing the existing composition before adding more wrappers or abstractions.
- Review real states: default, hover, focus, disabled, invalid, loading, and long-content cases.
- Avoid generic dashboard-looking layouts unless the product already uses them.
- If a screen uses shadcn components, reuse them before introducing custom primitives.

## Output Expectations

- Call out concrete issues tied to specific elements or files.
- Propose the smallest visual changes that materially improve usability.
- When implementing, validate both narrow and wide layouts.
