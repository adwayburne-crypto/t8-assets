**IconButton** — icon-only control for headers, toolbars and product cards (search, cart, wishlist, close).

```jsx
<IconButton label="Search" variant="ghost"><Search size={20}/></IconButton>
```

- `variant`: `ghost` (default) · `soft` · `outline` · `brand` · `accent`.
- `shape`: `square` (default) or `round`. `size`: sm 32 · md 40 · lg 48.
- Always pass `label` — it's the aria-label and tooltip.
