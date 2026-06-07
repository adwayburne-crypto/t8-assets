/* T8 Fitness storefront — shared parts (Logo, Header, Footer, PhotoFrame, Ico) */
const { IconButton, Badge, Button } = window.T8FitnessDesignSystem_ce2827;

/* Lucide icon helper */
function Ico({ n, s = 20, color = 'currentColor', strokeWidth = 2 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', n);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: s, height: s, stroke: color, 'stroke-width': strokeWidth } });
    }
  }, [n, s, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

/* Social brand glyphs (Lucide dropped brand icons from core) */
const SOCIAL_PATHS = {
  instagram: <React.Fragment><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></React.Fragment>,
  facebook: <path d="M14.5 8.5h2V5.7h-2.3c-2 0-3.2 1.2-3.2 3.3v1.8H9v2.8h2V21h2.9v-7.4h2.1l.4-2.8h-2.5V9.4c0-.6.3-.9 1.1-.9z" fill="currentColor"/>,
  youtube: <React.Fragment><rect x="2" y="5.5" width="20" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M10.2 9.2l4.6 2.8-4.6 2.8z" fill="currentColor"/></React.Fragment>,
};
function Social({ n, s = 18 }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" style={{ display: 'block' }}>{SOCIAL_PATHS[n]}</svg>;
}

/* Wordmark lockup */
function Logo({ height = 30, light = false }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.28 }}>
      <img src={light ? '../../assets/logos/t8-mark-white.png' : '../../assets/logos/t8-mark-navy.png'}
        alt="T8" style={{ height, display: 'block' }} />
      <span style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
        fontSize: height * 0.95, letterSpacing: '-0.03em', lineHeight: 1,
        color: light ? 'var(--white)' : 'var(--blue-700)',
      }}>fitness</span>
    </span>
  );
}

/* Branded photo placeholder — honest stand-in for real product photography */
function PhotoFrame({ tint = '#1f3a52', label = 'Product photography', aspect = '4 / 3', radius = 'var(--radius-lg)', style }) {
  return (
    <div style={{
      position: 'relative', aspectRatio: aspect, width: '100%',
      borderRadius: radius, overflow: 'hidden',
      background: `linear-gradient(150deg, var(--sand-100), var(--sand-200))`,
      ...style,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: tint, opacity: 0.05 }} />
      <img src="../../assets/logos/t8-mark-ink.png" alt=""
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '34%', opacity: 0.10 }} />
      <span style={{
        position: 'absolute', left: 14, bottom: 12,
        fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em',
        textTransform: 'uppercase', color: 'var(--ink-500)',
      }}>{label}</span>
    </div>
  );
}

/* Top announcement + header nav */
function Header({ route, go, cartCount, onCart, onSearch }) {
  const nav = ['Products', 'Collections', 'Delivery', 'Sale', 'Blog', 'Wholesale'];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{
        background: 'var(--blue-950)', color: 'rgba(255,255,255,0.86)',
        fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em',
        textTransform: 'uppercase', textAlign: 'center', padding: '9px 16px',
      }}>
        Free delivery on Hong Kong studio orders over HK$2,000
      </div>
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="t8-container" style={{ display: 'flex', alignItems: 'center', gap: 28, height: 76 }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer', flex: 'none' }}><Logo height={30} /></a>
          <nav style={{ display: 'flex', gap: 26, marginLeft: 12, flex: 1 }}>
            {nav.map((n) => {
              const active = (n === 'Collections' && route === 'collection');
              return (
                <a key={n} onClick={() => go(n === 'Collections' || n === 'Products' || n === 'Sale' ? 'collection' : 'collection')}
                  style={{
                    cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                    letterSpacing: '.02em', textTransform: 'uppercase',
                    color: active ? 'var(--blue-700)' : 'var(--text-secondary)',
                    paddingBottom: 4, borderBottom: '2px solid ' + (active ? 'var(--coral-500)' : 'transparent'),
                    transition: 'color var(--dur-fast)',
                  }}>{n === 'Sale' ? <span style={{ color: 'var(--coral-600)' }}>Sale</span> : n}</a>
              );
            })}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <IconButton label="Search" variant="ghost" onClick={onSearch}><Ico n="search" /></IconButton>
            <IconButton label="Account" variant="ghost"><Ico n="user" /></IconButton>
            <div style={{ position: 'relative' }}>
              <IconButton label="Cart" variant="ghost" onClick={onCart}><Ico n="shopping-bag" /></IconButton>
              {cartCount > 0 ? (
                <span style={{
                  position: 'absolute', top: 2, right: 2, minWidth: 18, height: 18, padding: '0 5px',
                  background: 'var(--coral-500)', color: '#fff', borderRadius: 999,
                  fontFamily: 'var(--font-mono)', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{cartCount}</span>
              ) : null}
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>EN · 中文</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* Footer */
function Footer() {
  const cols = [
    ['Shop', ['Reformers', 'Towers & Cadillacs', 'Chairs', 'Barrels', 'Accessories']],
    ['Support', ['Delivery & assembly', 'Sizing guide', 'Warranty', 'Returns', 'Contact']],
    ['Company', ['About T8', 'Wholesale', 'Studios we supply', 'Blog', 'Careers']],
  ];
  return (
    <footer style={{ background: 'var(--blue-950)', color: 'rgba(255,255,255,0.72)', marginTop: 'auto' }}>
      <div className="t8-container" style={{ padding: '56px var(--container-pad) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Logo height={28} light />
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, maxWidth: 280, color: 'rgba(255,255,255,0.6)' }}>
              Studio-grade movement equipment, properly fitted and built to last. Home of Align-Pilates in Hong Kong since 2009.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['instagram', 'facebook', 'youtube'].map((s) => (
                <span key={s} style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.16)', display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.8)' }}><Social n={s} s={18} /></span>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map((i) => <li key={i}><a style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, cursor: 'pointer' }}>{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
          <span>© 2026 T8 Fitness Ltd. · t8fitness.com</span>
          <span>Hong Kong · Singapore · Shipping across Asia-Pacific</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Ico, Logo, PhotoFrame, Header, Footer });
