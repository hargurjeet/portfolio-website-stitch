# Implementation Roadmap & Plan

## Phase 1: Setup & Design Tokens (`001-setup-tokens`)
- **Goal**: Initialize Next.js workspace and establish basic layout, css variables, and fonts.
- **Tasks**:
  - [ ] Initialize Next.js in the current directory (`npx create-next-app@latest ./` with TypeScript, ESLint, App Router, src/ directory, and NO Tailwind).
  - [ ] Create `DESIGN.md` in the workspace root mapping design assets.
  - [ ] Create `src/app/globals.css` with CSS custom properties representing color tokens, reset, and base fonts.
- **Verification**: Ensure Next.js builds successfully (`npm run build`) and renders a clean background with the correct fonts.

## Phase 2: Shell & Hero Page (`002-shell-hero`)
- **Goal**: Build the global navigation header and the interactive landing hero block.
- **Tasks**:
  - [ ] Create `src/components/Navbar.tsx` (glassmorphic menu with responsive links).
  - [ ] Create `src/components/Hero.tsx` (Outfitted heading, bold action buttons).
  - [ ] Update `src/app/page.tsx` to mount the layout components.
- **Verification**: Verify mobile navigation hamburger menu drawer toggles correctly and buttons show correct hover micro-animations.

## Phase 3: Project Portfolio Bento Grid (`003-portfolio-grid`)
- **Goal**: Implement the projects showcase section.
- **Tasks**:
  - [ ] Create `src/components/BentoGrid.tsx` for visual arrangement.
  - [ ] Create card component with tag pills and click-out links.
  - [ ] Implement category selection state (All, Web, GenAI).
- **Verification**: Confirm grid is responsive (collapsing on mobile) and filters projects accurately.

## Phase 4: Timeline & Skills Visualizer (`004-timeline-skills`)
- **Goal**: Add experience timeline and visual skills tracker.
- **Tasks**:
  - [ ] Create `src/components/Timeline.tsx` (experience cards along a vertical axis).
  - [ ] Create `src/components/SkillsGraph.tsx` (styled skill levels).
- **Verification**: Ensure timeline items align correctly and skills graph displays accessible labels.

## Phase 5: Contact Widget (`005-contact-form`)
- **Goal**: Add user message contact portal.
- **Tasks**:
  - [ ] Create `src/components/ContactForm.tsx` (validated email and text areas).
- **Verification**: Test forms validation constraints and success message delivery.

## Phase 6: SEO & Performance Auditing (`006-seo-audit`)
- **Goal**: Finalize meta tags, titles, accessibility, and production deployment preparation.
- **Tasks**:
  - [ ] Inject meta description, page title, favicon assets, and OG tags.
  - [ ] Audit contrast ratios, keyboard navigation (tabIndex), and aria-labels.
- **Verification**: Run Lighthouse audits to confirm Core Web Vitals (LCP, INP) are optimized.
