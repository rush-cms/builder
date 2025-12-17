# Rush Builder

> Internal landing page builder. Drag blocks, export HTML.

## The Stack

- Vite
- React 19
- TypeScript
- TanStack Router
- Zustand
- dnd-kit
- Tailwind CSS v4

## Structure

```
src/
├── routes/          # TanStack Router pages
├── components/      # Editor, blocks, UI
├── lib/store/       # Zustand state
├── lib/blocks/      # Block definitions
├── lib/export/      # HTML generator
└── types/           # TypeScript interfaces
```

## Concept

Sales team drags pre-built blocks. No pixel pushing. Quality enforced by design system.

Export = static HTML with compiled Tailwind. Ready to host.

## AI usage

Read CLAUDE.md for AI instructions. AI is optional, but very useful to speed up development creating sprints and tasks. AI is **not** a replacement for a developer, but a tool to help you.

## License

All rights reserved. No part of this project may be reproduced, distributed, or transmitted in any form or by any means, without the prior written permission of the author.

---

**Internal tool — not for public use.**
