# Tech Stack & Guidelines

## Core Technologies
- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Styling**: Vanilla CSS / CSS Modules (maximizing performance and precise control)
- **Fonts**: Outfit (headers), Inter (body) imported via Google Fonts or Next.js Font Optimization

## Stitch Integration
- **Design System**: Guided by a semantic `DESIGN.md` file specifying Obsidian Space colors, Glacial Glass containers, typography weights, and geometric layouts.
- **Stitch MCP Server**: Used for:
  - Retrieval: Accessing existing designed screens and project schemas (`list_screens`, `get_screen`).
  - Creation & Generation: Exporting style tokens and generating responsive layout variants using Stitch design system tools (`create_design_system_from_design_md`, `apply_design_system`, `generate_variants`).

## Performance & Quality Constraints
- **SEO**: Standard `<title>` tags, descriptive `<meta>` elements, open-graph details, and semantic heading hierarchy on all pages.
- **Accessibility**: Strict compliance with WCAG AA standard contrast ratios, readable focus rings, and logical DOM ordering.
