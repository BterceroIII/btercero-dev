---
name: shadcn-component-design
description: shadcn component design, composition, variants, Tailwind token usage, and form/layout structure. Use when building or refining UI with shadcn components in this repo.
---

# shadcn Component Design

Use this skill when working on component composition with shadcn in this repository.

## Repo-Specific Context

- This project uses shadcn style `base-nova` with base primitives from `@base-ui/react`.
- Global tokens and theme variables live in `src/index.css`.
- Imports use the `@/` alias.
- `cn` from `@/lib/utils` wraps `clsx` only; it does not merge conflicting Tailwind classes.

## Design Rules

- Prefer existing files in `src/components/ui/*` over writing custom styled markup.
- Favor semantic tokens like `bg-background`, `text-muted-foreground`, and `border-border` over raw color classes.
- Prefer component composition over one-off styling: `CardHeader`, `CardContent`, `FieldGroup`, `Field`, `FieldLabel`, `Separator`.
- Use `gap-*`, not `space-x-*` or `space-y-*`.
- Use `size-*` when width and height are equal.
- When adding or updating shadcn pieces, inspect generated files before trusting them.

## Form Rules

- Use `FieldGroup` and `Field` for form layout.
- Put validation on `data-invalid` for the field wrapper and `aria-invalid` on the control.
- Prefer component-supported variants and sizes before custom class overrides.

## Context7 Rule

- For shadcn, Tailwind, React, or other library API decisions, use Context7 first if the current API shape is uncertain.
