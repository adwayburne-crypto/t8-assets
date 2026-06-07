import React from 'react';

/**
 * T8 Fitness — PriceTag
 * Price display with optional compare-at (strikethrough) and currency.
 */
export function PriceTag({ amount, compareAt, currency = 'HK$', size = 'md', style, ...rest }) {
  const sizes = { sm: 16, md: 20, lg: 28, xl: 36 };
  const fs = sizes[size] || sizes.md;
  const fmt = (n) => currency + Number(n).toLocaleString('en-US');
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: fs,
        letterSpacing: '-0.02em', color: compareAt ? 'var(--coral-600)' : 'var(--text-primary)',
        fontVariantNumeric: 'tabular-nums',
      }}>{fmt(amount)}</span>
      {compareAt ? (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: Math.round(fs * 0.62),
          color: 'var(--text-muted)', textDecoration: 'line-through',
        }}>{fmt(compareAt)}</span>
      ) : null}
    </span>
  );
}
