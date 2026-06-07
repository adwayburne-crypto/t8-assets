**Button** — the primary action control for T8 Fitness; use for any committed action (Add to cart, Shop now, Submit).

```jsx
<Button variant="accent" size="lg" iconRight={<ChevronRight/>}>Add to cart</Button>
```

- `variant`: `primary` (T8 blue, default) · `accent` (coral — sale/CTA, use sparingly for the single most important action) · `secondary` (outlined, on light) · `ghost` (text-only) · `inverse` (white, for dark/photo sections).
- `size`: `sm` 36px · `md` 44px (default) · `lg` 54px.
- Pass icons as nodes via `iconLeft` / `iconRight`. Use `fullWidth` in narrow columns and drawers.
- One accent button per view. Never stack two accent buttons side by side.
