# Specification

## Summary
**Goal:** Remove the A11y icon from the header and darken all text site-wide for improved readability and WCAG AA compliance.

**Planned changes:**
- Remove the Accessibility (A11y) icon/button from the header control row (between the Language switcher and DSOUZA AI chatbot icon)
- Rebalance spacing and alignment of remaining header controls (Size, EN, DSOUZA AI, Voice) across all viewport sizes
- Darken all header control text labels (Size, EN, DSOUZA AI, Voice) to #000000 or #1A1A1A
- Apply high-contrast dark text colors site-wide: #000000 for primary text and #1A1A1A/#222222 for secondary text, covering all headings (h1–h6), subheadings, navigation items, body text, button labels, card text, form labels, and footer text
- Update global CSS custom properties and/or Tailwind config to enforce these dark text values across all pages (Home, Services, About, Neo, Contact)
- Preserve the existing light, premium background theme — only foreground text colors are changed

**User-visible outcome:** The header no longer shows the A11y icon, remaining controls are neatly aligned, and all text throughout the site is dark and highly legible against the light background, meeting WCAG AA contrast standards.
