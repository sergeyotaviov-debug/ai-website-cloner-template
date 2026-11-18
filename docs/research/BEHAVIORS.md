# Behaviors — Skillshare Join Landing

## Scroll sweep
- Header stays fixed at top (80px). Background appears white/transparent over hero; no major shrink animation observed on LOH capture.
- No Lenis / smooth-scroll library (scrollBehavior: auto).
- Dark Creative Feed and Teachers sections use large photography; no scroll-snap on page container.
- FAQ answers may be pre-rendered in DOM (visible in a11y tree even when collapsed visually) — treat as accordion with expand/collapse.

## Click sweep
- **Category pills** (Featured, Music, …): click switches active pill style and class card grid content. INTERACTION MODEL: click-driven.
- **FAQ “+”**: toggles answer visibility. INTERACTION MODEL: click accordion (one-or-many open OK; implement single-open for clarity matching typical LOH).
- **Sign Up / SSO / Continue with email**: navigate to auth flows on live site — clone uses `button` stubs (no real auth).
- **Class cards / teacher cards**: links to class/profile URLs — clone keeps `<a href="#">` or real paths as decorative links.

## Hover sweep
- Sign Up mint button: subtle transition 0.2s ease-in-out (darken/brightness).
- SSO outlined buttons: background/box-shadow/border 0.25s cubic-bezier(0.4,0,0.2,1).
- Class cards: slight lift or image scale (typical LOH).
- Nav links: underline or color shift.

## Responsive
- Desktop 1440: full header with Browse + search; hero two-column; 4-col class grid.
- Tablet 768: search may shrink; hero stacks; 2-col class grid.
- Mobile 390: hamburger drawer; logo centered; signup full width; 1-col cards; horizontal scroll for category pills.
