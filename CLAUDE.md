# t8-assets — T8 Fitness asset store + hosted storefront preview (sibling to brand-os)

Two things in one repo: (1) `align-pilates/` — a product-image reference pack for the T8/Align Pilates design system; (2) `storefront-preview/` — a static GitHub Pages site rendering the Claude Design storefront kit against real live-store data. This repo exists because heavy binaries (product photos, JS bundle) don't belong in brand-os. Deeper docs: README.md, `align-pilates/README.txt`.

## Prime directive
- The T8 design system (tokens, components, voice) is canonical in **brand-os/t8-fitness/**, not here. This repo holds heavy media + a preview rendering; if a token/spec is in doubt, brand-os wins. The CRM/Shopify store (t8fitness.com) is authoritative for product data — don't invent SKUs, specs, or ratings (specs/ratings/blurbs in `data.js` are illustrative <!-- inferred, confirm -->).

## Scope
- In: T8 Fitness brand only; Align Pilates product imagery; the hosted storefront refresh preview (Home/Collection/Product/Cart). | Out: the design-system source of truth (brand-os/t8-fitness), the actual Shopify storefront build (that's web-studio/t8-shopify), any non-T8 brand.

## How it runs
- Static site on **GitHub Pages**: https://adwayburne-crypto.github.io/t8-assets/storefront-preview/ . No build step / no server. Push to `master` → Pages serves it. Remote: `github.com/adwayburne-crypto/t8-assets` (default branch is **master**, not main).
- One-click image pack: `t8-align-images.zip` at repo root (~21 MB), linked from README via `raw/master/`.

## The loop (most-repeated task)
- Refresh the preview's data: regenerate `storefront-preview/ui_kits/storefront/data.js` from the live Shopify catalogue, commit, push to master; Pages redeploys. Entry redirect lives at `storefront-preview/index.html` → `ui_kits/storefront/index.html`.

## Architecture (only the non-obvious)
- `storefront-preview/index.html` is a meta-refresh redirect into `ui_kits/storefront/`; the real app is the `.jsx` files + `_ds_bundle.js` (145 KB design-system bundle).
- `align-pilates/MANIFEST.csv` maps product → file → live product URL; images split `01_key-equipment/` vs `02_accessories/`.
- `tokens/` here mirror brand-os/t8-fitness tokens (T8 blue `--blue-700 #134f8a`, coral "Signal" action colour) — treat brand-os as source if they diverge.

## Governance (Constitution §3)
- Customer-facing previews are review-only handoffs; do not represent the preview as the live store. No secrets in repo (no .env here; Shopify creds live in the t8-shopify project). Flag any spend. Product photos sourced from the live store — keep usage internal/design-reference.

## Gotchas / Close out
- `.nojekyll` MUST stay at repo root: GitHub Pages runs Jekyll which excludes underscore files, and `_ds_bundle.js` won't serve without it (the preview silently breaks).
- Default branch is `master`; `raw/master/...` links break if renamed.
- Large binaries are committed directly (no LFS); keep the repo's heavy-media role and don't migrate these into brand-os.
- Close out: commit + push to master (auto-save per memory convention); update SOLUTIONS_WE_HAVE only if scope changes.
