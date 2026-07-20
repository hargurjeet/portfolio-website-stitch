# Implementation Roadmap & Plan

## Phase 1: Setup & Stitch Design Integration (`001-setup-design`)
- **Goal**: Initialize the Next.js workspace and export the exact styling tokens from the completed Stitch project.
- **Tasks**:
  - [ ] Initialize Next.js in the current directory (`npx create-next-app@latest ./` with TypeScript, App Router, src/ directory, and NO Tailwind).
  - [ ] Retrieve the completed design system token metadata (`designTheme` and `designMd`) from the Stitch project `projects/6624443985264640229` using Stitch MCP.
  - [ ] Create `DESIGN.md` in the workspace root matching the retrieved design system guidelines.
  - [ ] Setup `src/app/globals.css` with the exact Custom CSS variables representing the Cyber Lime primary, Stark White surface, 2.5px borders, and 4px/8px hard offset shadows.
- **Verification**: Run `npm run dev` to verify the development environment compiles and base styling loads successfully.

## Phase 2: Navigation & Hero section (`002-shell-hero`)
- **Goal**: Implement the global shell and hero section according to the Stitch design screens.
- **Tasks**:
  - [ ] Build the layout shell and navigation header.
  - [ ] Build the Hero section with bold Source Serif 4 headlines, Cyber Lime CTA buttons, and sharp 2.5px borders.
- **Verification**: Verify buttons shrink their hard offsets on hover/active states as specified.

## Phase 3: Project Bento Grid (`003-portfolio-grid`)
- **Goal**: Replicate the projects grid from the Stitch design.
- **Tasks**:
  - [ ] Construct the 12-column grid layout, collapsing to a single column on mobile.
  - [ ] Render the bento cards with white backgrounds, black 2.5px borders, and category tags.
- **Verification**: Verify the grid matches the screen layout retrieved from Stitch.

## Phase 4: Experience Timeline & Skills (`004-timeline-skills`)
- **Goal**: Implement experience narrative and skills display.
- **Tasks**:
  - [ ] Build the vertical experience timeline with square Cyber Lime indicators.
  - [ ] Build the flat, segmented loading-bar style skills graph.
- **Verification**: Ensure typography pairing (Source Serif 4 for headers, Geist for body, JetBrains Mono for tags) renders correctly.

## Phase 5: Contact Widget (`005-contact-form`)
- **Goal**: Build the contact portal.
- **Tasks**:
  - [ ] Set up the high-contrast Neo-Brutalist form elements.
- **Verification**: Verify focus states highlight the borders with Cyber Lime/Electric Cyan.

## Phase 6: SEO & Auditing (`006-seo-audit`)
- **Goal**: Finalize meta tags, titles, accessibility, and production deployment preparation.
- **Tasks**:
  - [ ] Inject meta description, page title, favicon assets, and OG tags.
  - [ ] Audit contrast ratios, keyboard navigation (tabIndex), and aria-labels.
- **Verification**: Verify Lighthouse scores for accessibility and performance.
