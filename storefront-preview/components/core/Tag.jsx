import React from 'react';

/**
 * T8 Fitness — Tag / filter chip
 * Selectable pill used for filters & categories. Optional dismiss.
 */
export function Tag({ selected = false, onClick, onRemove, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const vis = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    height: 34, padding: onRemove ? '0 8px 0 14px' : '0 16px',
    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid ' + (selected ? 'var(--blue-700)' : 'var(--border-strong)'),
    background: selected ? 'var(--blue-700)' : (hover ? 'var(--ink-50)' : 'var(--white)'),
    color: selected ? 'var(--white)' : 'var(--text-primary)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap', userSelect: 'none',
    ...style,
  };
  return (
    <span style={vis} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
      {onRemove ? (
        <button onClick={(e) => { e.stopPropagation(); onRemove(e); }} aria-label="Remove"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 18, height: 18, border: 0, borderRadius: '50%',
            background: selected ? 'rgba(255,255,255,0.2)' : 'var(--ink-100)',
            color: 'inherit', cursor: 'pointer', fontSize: 13, lineHeight: 1, padding: 0,
          }}>×</button>
      ) : null}
    </span>
  );
}
