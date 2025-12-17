# Current Sprint

## Sprint #3 - Architecture Refactor

**Started**: 2024-12-17
**Estimated**: 8 hours
**Status**: PLANNED
**Priority**: Critical
**Branch**: refactor/architecture

### Tasks

#### Architecture [P1]
- [x] **Decouple Definitions**: Move `definitions.ts` content to `src/components/blocks/.../definition.ts`
- [x] **Block Registry**: Create `src/lib/blocks/registry.ts` to auto-import definitions.

#### Dynamic Engine [P1]
- [x] **Repeater Field**: Implement `type: 'array'` in `SchemaForm` for dynamic lists (FAQs, Features).
- [x] **Recursive Editing**: Allow editing nested objects within the Properties Panel.

#### Composition & Styling [P1]
- [x] **Block Wrapper**: Create `BlockWrapper` component to handle standard Layout (Padding/Margins).
- [x] **Global Padding Controls**: Add padding sliders to the bottom of the Properties Panel for every block.
- [ ] **Atomic Refactor**: Remove `<h2>Title</h2>` and `p` descriptions from existing blocks (Hero, Features, Pricing, etc.).
- [ ] **New Block**: `SectionHeader` (Title + Subtitle + Alignment) for composition.

#### Organization [P2]
- [ ] **Rebrand Categories**: Split into `Layout` (Headers, Footers, Spacers) and `Components` (Pricing, Hero, etc.).

### Dependencies
- Needs complex state management for `Repeater` fields.

---

## Past Sprints

### Sprint #2 - Marketing & Customization
**Status**: COMPLETED
**Completed**: 2024-12-17
- Global Settings (Colors, Fonts, SEO)
- Marketing Blocks (Pricing, Testimonials, FAQ)
- Interface Improvements (Sidebar Accordion, Mobile Preview)

### Sprint #1 - Foundation
**Status**: COMPLETED
**Completed**: 2024-12-17
- Setup (Vite, Router, Zustand, Tailwind)
- Drag & Drop System
- Core Blocks (Hero, Features, Footer)
- Properties Panel & Schema Form
- Netlify Deployment