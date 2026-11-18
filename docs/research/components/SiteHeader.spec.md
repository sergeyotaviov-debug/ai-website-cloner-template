# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/skillshare-home-desktop-1440-full.png`
- **Interaction model:** click-driven (mobile menu); fixed on scroll

## Computed Styles
### Container
- height: 80px
- position: fixed
- z-index: 10 (implemented 50 for overlay safety)
- background: white / translucent

### Sign Up button
- fontSize: 18px / fontWeight: 700
- backgroundColor: rgb(85, 218, 155) `#55da9b`
- height: 40px, borderRadius: 4px
- transition: 0.2s ease-in-out

## Text Content
Browse · Sign In · Sign Up · Search placeholder "Search for classes"

## Responsive
- Desktop: Browse + search visible
- Mobile: hamburger + logo + Sign Up; search icon
