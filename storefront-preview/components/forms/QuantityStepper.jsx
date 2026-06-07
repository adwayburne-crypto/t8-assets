import React from 'react';

/**
 * T8 Fitness — QuantityStepper
 * −/+ stepper for cart & product quantity.
 */
export function QuantityStepper({ value, defaultValue = 1, min = 1, max = 99, onChange, size = 'md', style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = isControlled ? value : internal;
  const set = (next) => {
    const clamped = Math.max(min, Math.min(max, next));
    if (!isControlled) setInternal(clamped);
    onChange && onChange(clamped);
  };
  const h = size === 'sm' ? 36 : 44;
  const btn = {
    width: h, height: h, flex: 'none', border: 0, background: 'transparent',
    cursor: 'pointer', color: 'var(--text-primary)', fontSize: 18, lineHeight: 1,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
  };
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)',
      background: 'var(--white)', overflow: 'hidden', height: h, ...style,
    }} {...rest}>
      <button type="button" aria-label="Decrease" style={btn} onClick={() => set(v - 1)} disabled={v <= min}>−</button>
      <span style={{
        minWidth: 36, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 15,
        fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)',
        borderLeft: '1px solid var(--border-default)', borderRight: '1px solid var(--border-default)',
        height: h, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0 6px',
      }}>{v}</span>
      <button type="button" aria-label="Increase" style={btn} onClick={() => set(v + 1)} disabled={v >= max}>+</button>
    </div>
  );
}
