import React from 'react';

/**
 * T8 Fitness — IconButton
 * Square/round icon-only control for toolbars, headers, cards.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'square',
  label,
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || dims.md;

  const variants = {
    ghost: { background: 'transparent', color: 'var(--text-primary)', borderColor: 'transparent' },
    soft: { background: 'var(--ink-50)', color: 'var(--text-primary)', borderColor: 'transparent' },
    outline: { background: 'var(--white)', color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
    brand: { background: 'var(--blue-700)', color: 'var(--white)', borderColor: 'transparent' },
    accent: { background: 'var(--coral-500)', color: 'var(--white)', borderColor: 'transparent' },
  };
  const hovers = { ghost: 'var(--ink-50)', soft: 'var(--ink-100)', outline: 'var(--ink-50)', brand: 'var(--blue-800)', accent: 'var(--coral-600)' };

  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.ghost;

  const vis = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: d, height: d, flex: 'none',
    borderRadius: shape === 'round' ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '1px solid ' + v.borderColor,
    background: hover && !disabled ? hovers[variant] : v.background,
    color: v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard)',
    ...style,
  };

  return (
    <button type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={disabled ? undefined : onClick} style={vis} {...rest}>
      {children}
    </button>
  );
}
