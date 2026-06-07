import React from 'react';

/**
 * T8 Fitness — Input
 * Text field with optional label, leading/trailing nodes & error.
 */
export function Input({
  label, hint, error, leading, trailing,
  size = 'md', type = 'text', id, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = { sm: 38, md: 46, lg: 54 };
  const h = heights[size] || heights.md;
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : (focus ? 'var(--blue-500)' : 'var(--border-strong)');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label ? (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>
      ) : null}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: h,
        padding: '0 14px', background: 'var(--white)',
        border: '1px solid ' + borderColor,
        borderRadius: 'var(--radius-sm)',
        boxShadow: focus ? (error ? 'var(--shadow-focus-accent)' : 'var(--shadow-focus)') : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {leading ? <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}>{leading}</span> : null}
        <input id={inputId} type={type}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 0, outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-primary)',
            minWidth: 0,
          }} {...rest} />
        {trailing ? <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}>{trailing}</span> : null}
      </div>
      {error ? (
        <span style={{ fontSize: 12, color: 'var(--red-700)', fontFamily: 'var(--font-sans)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
