# Skillshare Join Page — Visual Notes

Source: full-page capture `docs/design-references/skillshare-join-desktop-1440-full.png` from extraction pass.

**Prefer measured tokens in `DESIGN_TOKENS.md`** (from live `getComputedStyle` on Skillshare LOH). Do not use guessed hex values from screenshot eyeballing for CTAs.

## Join-page layout differences vs generic homepage

1. **Hero** — sky/blue band (`#24c2f2` brand sky), signup card on the **left**, headline + collage on the **right**
2. **Popular Classes** — near-black section; active category pill uses sky blue
3. **Teachers** — white page background; cards use purple→sky gradient under photography
4. **Search placeholder** — “Search classes, digital products, teachers, and more.”

## Trust hierarchy

| Source | Trust |
|--------|-------|
| `homepage-extract.json` computed styles | High |
| Join full-page screenshot | High for layout/structure |
| Section crops / `browser-extract.json` from Cloudflare challenge | Discard |
