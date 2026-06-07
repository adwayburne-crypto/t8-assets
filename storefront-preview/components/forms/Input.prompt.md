**Input** — single-line text field with label, hint/error and optional leading/trailing icons.

```jsx
<Input label="Email address" placeholder="you@studio.com" leading={<Mail size={18}/>} />
```

- `error` shows a red message and red border. `size`: sm · md (default) · lg.
- Use `leading` for a search/mail icon, `trailing` for units or a clear button.
