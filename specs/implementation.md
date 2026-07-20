# Implementation Roadmap & Plan

## Phase 1: Setup & Stitch Design Integration (`001-setup-design`)
- **Goal**: Initialize the Next.js workspace and export the exact styling tokens and markup from the completed Stitch screen.
- **Tasks**:
  - [ ] Initialize Next.js in the current directory (`npx create-next-app@latest ./` with TypeScript, App Router, src/ directory, and NO Tailwind).
  - [ ] Retrieve the completed design system token metadata and HTML/CSS source from Screen ID `db841db45fea4692b7951c9adae25064` using the Stitch MCP tool.
  - [ ] Create `DESIGN.md` in the workspace root matching the retrieved design system guidelines.
  - [ ] Setup `src/app/globals.css` with the custom CSS properties for `--primary` (`#9d4300`), `--primary-container` (`#f97316`), `--surface` (`#fff8f6`), `--on-surface` (`#251913`), resets, and default borders.
- **Verification**: Run `npm run dev` to verify the development environment compiles and styling loads successfully.

## Phase 2: Navigation & Hero Section (`002-shell-hero`)
- **Goal**: Implement the global shell and hero section according to the Refined Scientific Pop layout.
- **Tasks**:
  - [ ] Build the layout shell and navigation header with the `H_SINGH_AI` logo.
  - [ ] Build the Hero section bio card and portrait image with sharp `2.5px` borders and hard-shadows.
- **Verification**: Verify buttons shift slightly (`active:translate-x-0.5`) on active clicks.

## Phase 3: Project Bento Grid (`003-portfolio-grid`)
- **Goal**: Replicate the bento grid from the design.
- **Tasks**:
  - [ ] Construct the 12-column grid layout, collapsing to a single column on mobile.
  - [ ] Render project cards (Antigravity, RAG Evaluation, Pulse Stream) with expandable details.
- **Verification**: Verify the grid matches the screen layout.

## Phase 4: Experience Timeline & Academic Log (`004-timeline-academic`)
- **Goal**: Implement experience narrative and academic history display.
- **Tasks**:
  - [ ] Build the experience log timeline with square Cyber Lime / Rust Orange indicators.
  - [ ] Build the academic log blocks.
- **Verification**: Ensure typography pairing (Source Serif 4 for headers and body, JetBrains Mono for utility text) is maintained.

## Phase 5: Contact & Footer (`005-contact-footer`)
- **Goal**: Add contact form and footer links.
- **Tasks**:
  - [ ] Set up the neo-brutalist form input fields.
- **Verification**: Verify focus states glow correctly.

## Phase 6: SEO & Auditing (`006-seo-audit`)
- **Goal**: Finalize meta tags, titles, accessibility, and production deployment preparation.
- **Tasks**:
  - [ ] Inject meta description, page title, and OG tags.
  - [ ] Audit contrast ratios, keyboard navigation (tabIndex), and aria-labels.
- **Verification**: Verify Lighthouse scores for accessibility and performance.
