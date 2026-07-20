# Tech Stack & Guidelines

## Core Technologies
- **Framework**: Next.js (App Router, React 19, TypeScript)
- **Styling**: Vanilla CSS / CSS Modules
- **Fonts**: Source Serif 4 (headings), Geist (body), JetBrains Mono (data/utility labels)

## Stitch Design Integration (Strict Compliance)
All components and layouts must match the completed **Bespoke Data Lead Portfolio** design system (ID: `projects/6624443985264640229`) retrieved via the Stitch MCP Server.

### Design System Tokens:
*   **Aesthetic Style**: Neo-Brutalist Professionalism (rigid layouts, heavy black strokes, flat high-contrast layering).
*   **Colors**:
    *   `--bg-dark`: Matte Graphite (`#0F1115`)
    *   `--bg-surface`: Stark White (`#FFFFFF`) for cards
    *   `--color-primary`: Cyber Lime (`#c0ff00`)
    *   `--color-secondary`: Electric Cyan (`#00f0ff`)
    *   `--stroke-lead`: `2.5px` border width with color `#2A2D35` or `#000000`
*   **Elevation & Depth**:
    *   No soft gradients or blurs. Depth is created via a hard-offset black shadow (`box-shadow: 4px 4px 0px #000000` or `8px 8px 0px #000000`).
    *   Hover/Active States: Shadow shrinks to `2px` on focus/hover (simulating physical displacement).
*   **Geometry**:
    *   Rigid 0px border-radius (sharp, square corners) for all containers, buttons, and input fields.
    *   Pill-shape indicators are only permitted for non-interactive status tags.

## Performance & Quality Constraints
- **SEO**: Describing page title, custom meta tags, and semantic structure.
- **Accessibility**: Verify that the white cards and black texts satisfy WCAG AA contrast.
