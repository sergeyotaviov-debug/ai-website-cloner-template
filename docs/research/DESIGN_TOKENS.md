# Skillshare Design Tokens

Source: computed styles from live Skillshare homepage (2026-11-18) + Screenrove/brand capture notes.
Font note: live site uses licensed **GT Walsheim Pro**. Clone uses free **Outfit** (Google Fonts) as the closest licensed-safe substitute.

## Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| canvas | `#ffffff` | `rgb(255,255,255)` | Page background |
| ink | `#000000` | `rgb(0,0,0)` | Primary text / H1 |
| near-black | `#0b1215` | `rgb(11,18,21)` | Dark sections, button text |
| mint / wander green CTA | `#55da9b` | `rgb(85,218,155)` | Sign Up button fill |
| brand purple | `#5620c1` | `rgb(86,32,193)` | Continue with email, accents |
| deep teal | `#002333` | — | Secondary navy text |
| muted text | `#394649` | `rgb(57,70,73)` | Borders on SSO buttons, secondary |
| chip grey | `#dcdee1` | — | Chips / hairlines |
| sky | `#24c2f2` | — | Join hero band, active category pill, checkmarks |
| ribbon green | `#08d078` | — | Hero ribbon stroke |
| ribbon cyan | `#1cc7d8` | — | Hero ribbon stroke |
| ribbon magenta | `#ff119d` | — | Hero ribbon stroke |

## Typography

| Role | Size / Line | Weight | Notes |
|------|-------------|--------|-------|
| Hero H1 | 46px / 57.96px | 700 | Black |
| Section H2 (feed) | 46px / 46px | 700 | White on dark |
| Feature H2 | 34px / 37.4px | 700 | White |
| Category tile title | 28px / 40.04px | 700 | White overlay |
| Signup card H3 | 22px / 31.9px | 700 | `#0b1215` |
| Sign Up button | 18px / 39px | 700 | On mint |
| SSO buttons | 16px / 24px | 700 | Dark text |
| Email CTA | 16px / 22.08px | 700 | Purple `#5620c1` |
| Body / small print | 11–16px | 400 | Legal under signup |

## Spacing & Chrome

- Header height: **80px**, `position: fixed`, `z-index: 10`
- Content column ~1130px centered
- Button radius: **4px**
- Mint Sign Up: height 40px, padding `0 20px`, border mint
- SSO buttons: width 320px, height 40px, border `#394649`, radius 4px
- Card radius (class cards): ~8px

## Motion

- Sign Up button: `transition: 0.2s ease-in-out`
- SSO buttons: `transition: background-color/box-shadow/border 0.25s cubic-bezier(0.4, 0, 0.2, 1)`
- No Lenis / Locomotive detected on LOH
