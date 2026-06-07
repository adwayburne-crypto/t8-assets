import React from 'react';

/**
 * T8 Fitness — Rating
 * Star rating display (read-only) with optional count.
 */
export function Rating({ value = 0, max = 5, count, size = 16, style, ...rest }) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const fill = Math.max(0, Math.min(1, value - i));
    stars.push(
      <span key={i} style={{ position: 'relative', display: 'inline-block', width: size, height: size, lineHeight: 0 }}>
        <Star size={size} color="var(--ink-200)" />
        <span style={{ position: 'absolute', inset: 0, width: (fill * 100) + '%', overflow: 'hidden' }}>
          <Star size={size} color="var(--coral-500)" />
        </span>
      </span>
    );
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, ...style }} {...rest}>
      <span style={{ display: 'inline-flex', gap: 2 }}>{stars}</span>
      {count != null ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>({count})</span>
      ) : null}
    </span>
  );
}

function Star({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" style={{ display: 'block' }}>
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9z"/>
    </svg>
  );
}
