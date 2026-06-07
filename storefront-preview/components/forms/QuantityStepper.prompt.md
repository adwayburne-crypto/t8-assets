**QuantityStepper** — −/+ control for product & cart quantities; value shown in mono tabular figures.

```jsx
<QuantityStepper defaultValue={1} min={1} max={10} onChange={fn} />
```

- Clamps to `min`/`max` and disables the relevant button at the bounds.
