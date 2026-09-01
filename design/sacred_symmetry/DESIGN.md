---
name: Sacred Symmetry
colors:
  surface: '#f9f9f8'
  surface-dim: '#d9dad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#edeeed'
  surface-container-high: '#e7e8e7'
  surface-container-highest: '#e1e3e2'
  on-surface: '#191c1c'
  on-surface-variant: '#42493d'
  inverse-surface: '#2e3131'
  inverse-on-surface: '#f0f1f0'
  outline: '#72796c'
  outline-variant: '#c1c9ba'
  surface-tint: '#376a29'
  primary: '#022300'
  on-primary: '#ffffff'
  primary-container: '#063b00'
  on-primary-container: '#71a85f'
  inverse-primary: '#9cd588'
  secondary: '#2f6b19'
  on-secondary: '#ffffff'
  secondary-container: '#b0f591'
  on-secondary-container: '#35721f'
  tertiary: '#172000'
  on-tertiary: '#ffffff'
  tertiary-container: '#293700'
  on-tertiary-container: '#82a700'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b8f2a2'
  primary-fixed-dim: '#9cd588'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#1f5113'
  secondary-fixed: '#b0f591'
  secondary-fixed-dim: '#95d878'
  on-secondary-fixed: '#052100'
  on-secondary-fixed-variant: '#165200'
  tertiary-fixed: '#c7f24b'
  tertiary-fixed-dim: '#abd52e'
  on-tertiary-fixed: '#161f00'
  on-tertiary-fixed-variant: '#3b4d00'
  background: '#f9f9f8'
  on-background: '#191c1c'
  surface-variant: '#e1e3e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system for this masjid management platform prioritizes a balance of administrative precision and spiritual tranquility. The target audience includes masjid administrators, treasurers, and community members who require a reliable tool for religious and financial governance.

The design style is **Corporate Modern** with a **Minimalist** foundation. It utilizes heavy whitespace to provide mental clarity, high-quality typography for legibility in data-heavy contexts, and subtle Islamic-inspired geometric patterns as a decorative grounding element. The aesthetic response should feel institutional yet welcoming, modern yet respectful of tradition.

## Colors
The palette is rooted in a spectrum of greens, symbolizing growth, peace, and Islamic heritage. 

- **Primary (#063B00):** Used for top-level navigation, headers, and authoritative text to establish a deep, trustworthy foundation.
- **Secondary (#266210):** Applied to active states, primary buttons, and successful status indicators.
- **Tertiary (#90B800):** Used for highlighting trends in financial charts and secondary calls to action.
- **Accent (#E1E100):** Reserved for critical focus points, alerts, or celebratory highlights (e.g., special events or donor milestones).
- **Surface & Backgrounds:** Use high-tint neutrals to maintain a "clean" look, avoiding pure white (#FFFFFF) in favor of extremely soft, green-tinted grays to reduce eye strain.

## Typography
This design system utilizes **Inter** exclusively to ensure maximum legibility across data-intensive interfaces. The typeface’s tall x-height and neutral character make it ideal for financial reports and prayer schedules.

- **Headlines:** Use Bold or SemiBold weights in the Primary Green to establish a clear information hierarchy.
- **Body Text:** Keep at a comfortable 16px for readability. Use Medium weight for subheaders within cards.
- **Labels:** Use for table headers and form captions. The `label-sm` style should be used sparingly with subtle letter spacing for a professional, systematic feel.

## Layout & Spacing
The design system employs a **Fluid Grid** model with a maximum container width of 1280px for desktop to prevent line lengths from becoming unreadable.

- **Grid:** A 12-column grid is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Margins:** Desktop margins are set to 48px to allow the "spiritual" airiness of the design to breathe. Mobile margins shrink to 16px.
- **Rhythm:** An 8px base unit governs all padding and margins. Vertical rhythm is strictly enforced in data tables to maintain a professional, systematic appearance.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. This maintains the clean, professional aesthetic.

1.  **Base Layer:** The soft neutral background.
2.  **Surface Layer:** White cards with a 1px border (#E2E8F0) and a very soft, diffused ambient shadow (4px blur, 2% opacity) to denote interactivity.
3.  **Raised Layer:** Used for modals and dropdowns. These use a more defined shadow with a slight green tint (#063B00 at 8% opacity) to provide a subtle "organic" depth.
4.  **Patterns:** Use watermark-style geometric Islamic patterns (opacity 3-5%) on the base layer to create texture without distracting from content.

## Shapes
The shape language is **Soft (Level 1)**. 

While the system is modern, sharp edges feel too aggressive and fully rounded "pill" shapes feel too casual. A 0.25rem (4px) base radius provides a disciplined, architectural feel reminiscent of modern Islamic masonry.

- **Small Components (Buttons, Inputs):** 4px radius.
- **Large Components (Cards, Modals):** 8px (rounded-lg) radius.
- **Status Badges:** Use a slightly higher radius (12px) to differentiate them from functional inputs.

## Components
- **Buttons:** Primary buttons use the Secondary Green (#266210) with white text. Ghost buttons use Primary Green text with a 1px border.
- **Data Tables:** High-density with subtle row striping. Headers are `label-sm` with a light gray background. No vertical borders; use horizontal dividers only.
- **Financial Charts:** Utilize the Tertiary (#90B800) and Accent (#E1E100) colors for data visualization. Use smooth splines for line charts to reflect organic growth.
- **Interactive Calendars:** Current day highlighted with a Primary Green circle. Events indicated by small colored dots (Green for Prayer times, Yellow for community events).
- **Status Badges:** Small, caps-on labels with low-opacity background fills (e.g., a "Paid" status uses 10% opacity Green background with 100% Green text).
- **Input Fields:** Clean, 1px bordered boxes. On focus, the border transitions to Secondary Green with a 2px outer glow in the same color at 10% opacity.
- **Cards:** Used for dashboard summaries. Include a subtle geometric pattern "header" strip (5px height) using the Tertiary Green to add character.