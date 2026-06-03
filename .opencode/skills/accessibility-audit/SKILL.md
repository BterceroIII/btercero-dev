---
name: accessibility-audit
description: accessibility audit, a11y review, keyboard support, labels, focus states, semantics, and screen reader issues. Use when reviewing or building interactive UI.
---

# Accessibility Audit

Use this skill when a task touches forms, dialogs, navigation, buttons, links, or any other interactive UI.

## Audit Checklist

1. Semantic elements: button vs link vs div.
2. Labels and names: every control has an accessible name.
3. Keyboard access: tab order, focus visibility, and activation without a mouse.
4. State exposure: disabled, invalid, expanded, selected, and loading states are conveyed accessibly.
5. Error messaging: invalid fields expose both visual and programmatic feedback.
6. Color dependence: meaning does not rely on color alone.

## Repo-Specific Rules

- shadcn overlays and triggers must keep their required accessibility subcomponents.
- For forms in this repo, prefer `Field`, `FieldLabel`, `FieldDescription`, and `FieldError` instead of ad hoc markup.
- If hiding visible text, ensure the accessible name still exists.
- Preserve visible focus styles unless the user explicitly asks otherwise.

## Implementation Guidance

- Fix semantics first, styling second.
- Prefer native HTML behavior where possible.
- When uncertain about a third-party component's accessibility API, use Context7 before changing it.
