# Page Topology — Skillshare `/en/join/ps`

Target: coupon join landing (GOOGB30DAYSFREE → “1 free month” messaging).
Visual language shared with logged-out homepage (`/en/`).

## Order (top → bottom)

1. **Header** (fixed overlay, z-index 10, 80px)
   - Logo wordmark (Skillshare + mint dots)
   - Browse dropdown
   - Search combobox
   - Sign In text link
   - Sign Up mint CTA
   - Interaction: sticky/fixed; mobile collapses to hamburger + centered logo

2. **Hero + Signup**
   - Left/center: H1 “Creative Classes Taught by the Best Creative Pros”
   - Subcopy: “Thousands of creative classes. **1 free month**. Cancel anytime*”
   - Collage imagery (tablet drawing, purple-hair illustration, woman in red) + “Lisa Bardot / Illustrator & Teacher”
   - Right: white signup card “Get 1 free month of Skillshare” with Google / Facebook / Apple / email CTAs + legal
   - Interaction: static; SSO buttons are non-functional stubs in clone

3. **Explore Popular Classes**
   - Twin H2: “Explore Popular Classes” / “on Skillshare”
   - Horizontal category pills: Featured, Music, Drawing & Painting, …
   - Grid of class cards (Staff Pick badge, students, duration, title, teacher)
   - Interaction model: **click-driven tabs** — switching category swaps card set

4. **Creative Feed**
   - Dark band
   - H2 “Explore Your Creative Feed”
   - Three columns: Stay Inspired / Stay Connected / Keep Creating
   - Interaction: mostly static; may have scroll-in imagery

5. **Teachers**
   - “Learn from Creative Experts” + body copy
   - Grid of “MEET {Name} {ROLE}” portrait cards linking to profiles
   - Interaction: hover lift/opacity on cards

6. **FAQ**
   - Accordion rows with “+” toggles
   - Interaction model: **click-driven accordion**

7. **Footer** (join page may use compact legal + full link columns like home)
   - Featured In logos, social, category link columns, company links, © 2026

## Layout notes

- Desktop ~1440: two-column hero (copy+collage | signup card)
- Tablet 768: stack signup under hero; pills scroll horizontally
- Mobile 390: hamburger header; single column; full-width cards
