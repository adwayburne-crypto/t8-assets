**ProductCard** — the storefront product tile; lifts on hover, reveals a wishlist control, and composes Badge + Rating + PriceTag + Button.

```jsx
<ProductCard
  image="/assets/reformer.jpg"
  category="Reformer"
  title="Align-Pilates A8-Pro"
  price={8990} compareAt={10990}
  badge={{ label: 'Sale', tone: 'accent' }}
  rating={4.5} reviews={28}
  onAdd={fn} onClick={fn}
/>
```

- Use in a responsive grid (min column ~280px). `badge` is a corner flag. Omit `image` to get a neutral placeholder.
- Don't re-implement the inner controls — this card already composes the core primitives.
