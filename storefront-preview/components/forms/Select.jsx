import React from 'react';

/**
 * T8 Fitness — Select
 * Native select styled to match Input, with chevron affordance.
 */
export function Select({ label, hint, options = [], size = 'md', id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 38, md: 46, lg: 54 };
  const h = heights[size] || heights.md;
  const selId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label ? (
        <label htmlFor={selId} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>
      ) : null}
      <div style={{ position: 'relative' }}>
        <select id={selId}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: h, padding: '0 40px 0 14px',
            appearance: 'none', WebkitAppearance: 'none',
            background: 'var(--white)', color: 'var(--text-primary)',
            border: '1px solid ' + (focus ? 'var(--blue-500)' : 'var(--border-strong)'),
            borderRadius: 'var(--radius-sm)',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none',
            fontFamily: 'var(--font-sans)', fontSize: 15, cursor: 'pointer',
            transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          }} {...rest}>
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 12 }}>▾</span>
      </div>
      {hint ? <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>{hint}</span> : null}
    </div>
  );
}
