// brand.jsx — T8 Fitness social-post primitives.
// Shared chrome (logo lockup, eyebrows, price tab, photo, spec row) used by
// every template. Tokens lifted verbatim from the T8 design system.
// Exports to window so the template + render scripts can compose them.

const T8C = {
  navy:     '#0c2f53',  // blue-900 — hero panels
  navyDeep: '#071f3a',  // blue-950 — footers / deepest
  blue:     '#134f8a',  // brand blue
  blue50:   '#f0f6fc',
  coral:    '#f15a36',
  coral600: '#df4a27',
  coral50:  '#fff3ef',
  sand:     '#faf7f1',  // sand-50, default page
  sand100:  '#f3ede2',
  sand200:  '#e8dfcf',
  sand300:  '#d8cbb3',
  ink:      '#151f27',  // ink-900 text
  ink700:   '#38454f',
  ink600:   '#4c5d6b',
  ink500:   '#687a89',
  ink300:   '#b7c3cd',
  ink200:   '#d8e0e7',
  ink100:   '#eaeff3',
  white:    '#ffffff',
  display: "'Archivo', system-ui, sans-serif",
  sans:    "'Hanken Grotesk', system-ui, sans-serif",
  mono:    "'Space Mono', monospace",
};

const MARK = {
  white: 'assets/t8-mark-white.png',
  navy:  'assets/t8-mark-navy.png',
  coral: 'assets/t8-mark-coral.png',
  ink:   'assets/t8-mark-ink.png',
};
const MARK_RATIO = 896 / 540; // ≈1.659

// Brand lockup: the T8 monogram + "fitness" set in Archivo italic.
function Lockup({ tone = 'dark', h = 34, style }) {
  // tone: 'light' for dark backgrounds (white), 'dark' for light backgrounds (navy)
  const isLight = tone === 'light';
  const src = isLight ? MARK.white : MARK.navy;
  const color = isLight ? T8C.white : T8C.navy;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: h * 0.34, ...style }}>
      <img src={src} alt="T8" style={{ height: h, width: h * MARK_RATIO, objectFit: 'contain', display: 'block' }} />
      <span style={{ fontFamily: T8C.display, fontStyle: 'italic', fontWeight: 600, fontSize: h * 0.74, color, letterSpacing: '-0.02em', lineHeight: 1 }}>fitness</span>
    </div>
  );
}

// Mono uppercase label — the system's "engineering" signature.
function Eyebrow({ children, color = T8C.ink600, size = 17, style }) {
  return (
    <div style={{ fontFamily: T8C.mono, textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: size, fontWeight: 400, color, lineHeight: 1.2, ...style }}>{children}</div>
  );
}

// Coral price tab that overlaps a corner — the storefront hero device.
function PriceTab({ amount, prefix = 'HK$', kicker = 'FROM', style }) {
  return (
    <div style={{ background: T8C.coral, color: T8C.white, padding: '18px 26px 20px', borderRadius: 14, boxShadow: '0 18px 40px -16px rgba(241,90,54,0.55)', display: 'inline-flex', flexDirection: 'column', gap: 4, ...style }}>
      <span style={{ fontFamily: T8C.mono, fontSize: 14, letterSpacing: '0.2em', opacity: 0.92 }}>{kicker}</span>
      <span style={{ fontFamily: T8C.display, fontWeight: 800, fontSize: 40, letterSpacing: '-0.025em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{prefix}{amount}</span>
    </div>
  );
}

// Mono spec row — tabular, dot-separated. Optional hairline above.
function SpecRow({ items, color = T8C.ink600, rule = true, size = 16, style }) {
  return (
    <div style={{ ...(rule ? { borderTop: `1px solid ${T8C.ink200}`, paddingTop: 18 } : {}), display: 'flex', flexWrap: 'wrap', gap: '10px 18px', ...style }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
          <span style={{ fontFamily: T8C.mono, fontSize: size, letterSpacing: '0.1em', color, fontVariantNumeric: 'tabular-nums', textTransform: 'uppercase' }}>{it}</span>
          {i < items.length - 1 && <span style={{ color: T8C.ink300, fontSize: size }}>·</span>}
        </span>
      ))}
    </div>
  );
}

function Photo({ src, fit = 'cover', pos = 'center', style }) {
  return <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: fit, objectPosition: pos, display: 'block', ...style }} />;
}

// Product cut-out on a deliberate white "lightbox" plate — the DS register
// for studio cut-outs. Reads cleanly on sand or navy.
function ProductPlate({ src, pad = '9%', radius = 20, shadow = '0 26px 60px -26px rgba(12,20,26,0.45)', style }) {
  return (
    <div style={{ background: T8C.white, borderRadius: radius, boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: pad, boxSizing: 'border-box', ...style }}>
      <img src={src} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
    </div>
  );
}

// Coral pill CTA.
function Cta({ children, tone = 'coral', style }) {
  const bg = tone === 'coral' ? T8C.coral : T8C.white;
  const fg = tone === 'coral' ? T8C.white : T8C.navy;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: bg, color: fg, fontFamily: T8C.sans, fontWeight: 600, fontSize: 22, padding: '16px 28px', borderRadius: 999, ...style }}>
      {children}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
    </span>
  );
}

// Page-dot indicator for carousels.
function Dots({ count, active = 0, color = T8C.navy, dim }) {
  const off = dim || 'rgba(12,47,83,0.22)';
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ width: i === active ? 26 : 9, height: 9, borderRadius: 999, background: i === active ? color : off, transition: 'none' }} />
      ))}
    </div>
  );
}

// Read-only coral star rating.
function Stars({ value = 5, size = 26, color = T8C.coral }) {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < value ? color : 'none'} stroke={color} strokeWidth="1.6">
          <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.3l-5.8 3.07 1.1-6.47L2.6 9.3l6.5-.95z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

// Large decorative quote glyph.
function QuoteMark({ size = 150, color = T8C.coral, style }) {
  return (
    <div style={{ fontFamily: T8C.display, fontWeight: 800, fontStyle: 'italic', fontSize: size, lineHeight: 0.8, color, height: size * 0.55, overflow: 'hidden', ...style }}>“</div>
  );
}

Object.assign(window, { T8C, MARK, MARK_RATIO, Lockup, Eyebrow, PriceTab, SpecRow, Photo, ProductPlate, Cta, Dots, Stars, QuoteMark });
