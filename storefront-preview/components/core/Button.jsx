import React from 'react';

/**
 * T8 Fitness — Button
 * Primary action control. Confident, squared-but-soft, athletic.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 14px', height: 36, fontSize: 13, gap: 7 },
    md: { padding: '0 20px', height: 44, fontSize: 15, gap: 8 },
    lg: { padding: '0 28px', height: 54, fontSize: 16, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  };

  const variants = {
    primary: { background: 'var(--blue-700)', color: 'var(--white)' },
    accent:  { background: 'var(--coral-500)', color: 'var(--white)' },
    secondary: { background: 'var(--white)', color: 'var(--blue-700)', borderColor: 'var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-primary)' },
    inverse: { background: 'var(--white)', color: 'var(--blue-800)' },
  };

  const hovers = {
    primary: 'var(--blue-800)',
    accent: 'var(--coral-600)',
    secondary: 'var(--ink-50)',
    ghost: 'var(--ink-50)',
    inverse: 'var(--blue-50)',
  };

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const vis = { ...base, ...variants[variant], ...style };
  if (hover && !disabled) {
    if (variant === 'secondary' || variant === 'ghost' || variant === 'inverse') {
      vis.background = hovers[variant];
    } else {
      vis.background = hovers[variant];
    }
  }
  if (active && !disabled) vis.transform = 'translateY(1px)';

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? undefined : onClick,
  };

  const content = (
    <>
      {iconLeft ? <span style={{ display: 'inline-flex' }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex' }}>{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    return <a href={href} style={vis} {...handlers} {...rest}>{content}</a>;
  }
  return (
    <button type={type} disabled={disabled} style={vis} {...handlers} {...rest}>
      {content}
    </button>
  );
}
