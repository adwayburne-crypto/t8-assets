import React from 'react';

/**
 * T8 Fitness — Checkbox
 * Square check control with label. Controlled or uncontrolled.
 */
export function Checkbox({ checked, defaultChecked, onChange, label, disabled = false, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal((v) => !v);
    onChange && onChange(!on);
  };
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-primary)', userSelect: 'none', ...style,
    }} {...rest}>
      <span onClick={toggle} style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none',
        borderRadius: 'var(--radius-xs)',
        border: '1.5px solid ' + (on ? 'var(--blue-700)' : 'var(--border-strong)'),
        background: on ? 'var(--blue-700)' : 'var(--white)',
        color: '#fff', transition: 'all var(--dur-fast) var(--ease-standard)',
      }}>
        {on ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        ) : null}
      </span>
      {label ? <span onClick={toggle}>{label}</span> : null}
    </label>
  );
}
