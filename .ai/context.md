# Ravi Builder - Context

## Last Updated: 2024-12-17

## Current State
- Working on: Phase 2 - Core Blocks
- Last completed: Drag-and-drop implementation (Phase 1)
- Next task: Create Block Definitions and Hero/Footer components
- Current file: `src/components/editor/sidebar-item.tsx`

---

## Project Overview

Internal landing page builder for sales team. Drag pre-approved blocks, customize content, export static HTML.

**Philosophy:** 'Restriction creates Freedom' — No pixel pushing, only quality blocks.

## Tech Stack

- **Framework:** Vite + React 19 + TypeScript (strict)
- **Routing:** TanStack Router (state in URL)
- **State:** Zustand
- **Drag-and-drop:** @dnd-kit
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui

## Architecture

```
Editor (stateful)     →    Renderer (stateless)
- Manages block list       - Receives JSON
- Handles drag-drop        - Outputs HTML/React  
- URL state sync           - Same for preview & export
```

## Key Files

- `src/lib/store/editor.ts` — Zustand store (project, blocks, selection)
- `src/lib/blocks/definitions.ts` — Block definitions and schemas
- `src/routes/editor/$projectId.tsx` — Main editor page
- `src/types/index.ts` — TypeScript interfaces

## Data Model

```typescript
Project → has many → BlockInstance → references → BlockDefinition
```

- **Project:** Name, settings (colors, fonts, SEO), ordered blocks array
- **BlockDefinition:** Type, category, schema (editable fields), defaults
- **BlockInstance:** UUID, type reference, user-filled data

## URL State (TanStack Router)

```
/editor/:projectId?block=abc&panel=properties&preview=mobile
```

- `block` — Selected block ID
- `panel` — Active sidebar (library | properties)
- `preview` — Canvas mode (desktop | mobile)

## Blocks (21 total for MVP)

| Category | Blocks |
|----------|--------|
| Hero | hero-centered, hero-split, hero-video |
| Features | features-grid, features-alternating, features-icons |
| Social Proof | testimonials-carousel, testimonials-grid, logos-bar |
| Pricing | pricing-cards, pricing-comparison |
| FAQ | faq-accordion, faq-two-columns |
| CTA | cta-simple, cta-with-image, cta-newsletter |
| Content | text-block, image-text, stats-counter |
| Footer | footer-simple, footer-multi-column |

## Important Context

- Each block = 1 component + 1 schema + 1 form
- Use `cn()` from `lib/utils` for classnames
- Generate IDs with `crypto.randomUUID()`
- No nested blocks/containers in MVP

## Export Output

Single `.html` file with:
- Compiled Tailwind (only used classes)
- No React runtime
- No drag-drop scripts
- Ready to host anywhere

## Not in MVP

- Nested blocks / containers
- Backend integration
- Multi-user auth
- Version history