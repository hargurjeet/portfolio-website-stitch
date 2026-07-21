# Design System: Refined Scientific Pop

This document outlines the design tokens and layout rules extracted from the Stitch screen `projects/6624443985264640229/screens/db841db45fea4692b7951c9adae25064`.

## Color Palette

| Token Name | Hex Value | Usage |
| :--- | :--- | :--- |
| `primary` | `#9d4300` | Accent text, branding elements |
| `primary-container` | `#f97316` | Main CTA background, highlight blocks |
| `surface` | `#fff8f6` | Global page background, warm tone |
| `on-surface` | `#251913` | Dark charcoal for high-contrast text and borders |
| `outline` | `#8c7164` | Subdued borders or separators |
| `white` | `#ffffff` | Card background for contrast against the warm surface |

## Typography

- **Headings & Body Text**: `Source Serif 4`
- **Labels, Status Tags, Code**: `JetBrains Mono`

## Borders & Depth

- **Borders**: Stark `2px` or `2.5px` borders in `var(--on-surface)` (`#251913`).
- **Border Radius**: Always `0px` for interactive items (cards, buttons, inputs) to maintain a rigid Neo-Brutalist structure.
- **Shadows**:
  - `hard-shadow`: `box-shadow: 4px 4px 0px 0px #251913`
  - `hard-shadow-lg`: `box-shadow: 8px 8px 0px 0px #251913`
- **Interactive Shift**: On click/active, buttons translate by `0.5` or `1` unit to simulate physical depression:
  ```css
  .btn-shift:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--on-surface);
  }
  ```
