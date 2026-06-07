import React from 'react';

/**
 * T8 Fitness — Badge
 * Small status / metadata pill. Solid or soft tints.
 */
export function Badge({ tone = 'neutral', variant = 'soft', children, style, ...rest }) {
  const map = {
    neutral: { soft: ['var(--ink-100)', 'var(--ink-700)'], solid: ['var(--ink-700)', '#fff'] },
    brand:   { soft: ['var(--blue-50)', 'var(--blue-700)'], solid: ['var(--blue-700)', '#fff'] },
    accent:  { soft: ['var(--coral-50)', 'var(--coral-700)'], solid: ['var(--coral-500)', '#fff'] },
    success: { soft: ['var(--green-100)', 'var(--green-700)'], solid: ['var(--green-500)', '#fff'] },
    warning: { soft: ['var(--amber-100)', 'var(--amber-700)'], solid: ['var(--amber-500)', '#fff'] },
    danger:  { soft: ['var(--red-100)', 'var(--red-700)'], solid: ['var(--red-500)', '#fff'] },
  };
  const [bg, fg] = (map[tone] || map.neutral)[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: 22, padding: '0 9px',
      background: bg, color: fg,
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 400,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap',
      ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
