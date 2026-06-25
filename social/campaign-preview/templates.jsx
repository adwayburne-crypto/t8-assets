// templates.jsx — T8 Fitness social-post templates.
// Each template is format-aware: pass {w,h} and it lays out for square /
// portrait / story. Landscape templates are dedicated (row layouts).
// Composes the primitives from brand.jsx. Exports all to window.

const {
  T8C, Lockup, Eyebrow, PriceTab, SpecRow, Photo, ProductPlate, Cta, Dots, Stars, QuoteMark,
} = window;

function Frame({ bg, color, children, style }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: bg, color: color || T8C.ink, fontFamily: T8C.sans, overflow: 'hidden', boxSizing: 'border-box', ...style }}>
      {children}
    </div>
  );
}

// ── A · Spec Sheet — sand, cut-out product, coral price tab ───────────────
function SpotlightSheet({ w = 1080, h = 1080, eyebrow = 'BEST SELLER', line1 = 'Folds flat.', line2 = 'Rolls away.', spec = ['F3 reformer', '243 cm', '5-yr frame'], price = '18,900', img = 'assets/f3-reformer.jpg', headSize }) {
  const P = Math.round(w * 0.066);
  const hs = headSize || Math.round(w * 0.078);
  return (
    <Frame bg={T8C.sand}>
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="dark" h={Math.round(w * 0.032)} />
          <Eyebrow color={T8C.coral600}>{eyebrow}</Eyebrow>
        </div>
        <div style={{ flex: 1, minHeight: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `${P * 0.45}px 0` }}>
          <ProductPlate src={img} style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 800, fontSize: hs, lineHeight: 0.98, letterSpacing: '-0.035em', color: T8C.navy }}>{line1}<br />{line2}</h1>
          <div style={{ marginTop: P * 0.5 }}><SpecRow items={spec} size={Math.round(w * 0.0155)} /></div>
        </div>
      </div>
      <PriceTab amount={price} style={{ position: 'absolute', top: Math.round(h * 0.2), right: P }} />
    </Frame>
  );
}

// ── B · Daylight — full-bleed lifestyle, scrim, overlay ───────────────────
function Daylight({ w = 1080, h = 1080, img = 'assets/c8-noir.jpg', pos = 'center 28%', eyebrow = 'STUDIO REFORMER', line1 = 'Train where', line2 = 'you are.', cta = 'Shop reformers', headSize }) {
  const P = Math.round(w * 0.066);
  const hs = headSize || Math.round(w * 0.084);
  return (
    <Frame bg={T8C.navyDeep} color={T8C.white}>
      <Photo src={img} fit="cover" pos={pos} style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,31,58,0.28) 0%, rgba(7,31,58,0) 32%, rgba(7,31,58,0.18) 55%, rgba(7,31,58,0.9) 100%)' }} />
      <div style={{ position: 'absolute', inset: Math.round(P * 0.62), border: '1px solid rgba(255,255,255,0.45)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <Lockup tone="light" h={Math.round(w * 0.032)} />
        <div>
          <Eyebrow color="rgba(255,255,255,0.85)" style={{ marginBottom: 18 }}>{eyebrow}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 800, fontSize: hs, lineHeight: 0.98, letterSpacing: '-0.035em' }}>{line1}<br />{line2}</h1>
          <div style={{ marginTop: P * 0.5 }}><Cta>{cta}</Cta></div>
        </div>
      </div>
    </Frame>
  );
}

// ── C · Signal — navy, oversized italic display, one coral word ───────────
function SpotlightSignal({ w = 1080, h = 1080, eyebrow = 'NEW · ALIGN-PILATES', word1 = 'Fold', word2 = 'flat.', accentWord = 'Roll out.', price = '18,900', specs = ['Aircraft-grade frame', '4 graded springs', 'Folds in 10 seconds'] }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.navy} color={T8C.white}>
      <div style={{ position: 'absolute', width: w * 0.85, height: w * 0.85, borderRadius: '50%', background: 'radial-gradient(circle, rgba(80,151,218,0.24), rgba(12,47,83,0) 70%)', top: -w * 0.18, right: -w * 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Eyebrow color={T8C.coral}>{eyebrow}</Eyebrow>
          <Lockup tone="light" h={Math.round(w * 0.03)} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontStyle: 'italic', fontWeight: 800, fontSize: Math.round(w * 0.155), lineHeight: 0.88, letterSpacing: '-0.04em' }}>
            {word1} {word2}<br /><span style={{ color: T8C.coral }}>{accentWord}</span>
          </h1>
          <div style={{ marginTop: P * 0.6, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {specs.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: T8C.coral, flex: '0 0 auto' }} />
                <span style={{ fontFamily: T8C.mono, fontSize: Math.round(w * 0.017), letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 24 }}>
          <div>
            <Eyebrow color="rgba(255,255,255,0.6)" size={15} style={{ marginBottom: 8 }}>F3 REFORMER · FROM</Eyebrow>
            <div style={{ fontFamily: T8C.display, fontWeight: 800, fontSize: Math.round(w * 0.058), letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>HK${price}</div>
          </div>
          <Cta>Shop now</Cta>
        </div>
      </div>
    </Frame>
  );
}

// ── Sale / offer — deep navy, the discount is the hero ────────────────────
function SaleOffer({ w = 1080, h = 1080, eyebrow = 'LIMITED · STUDIO PRICING', big = '−20%', line = 'off every reformer.', terms = ['Until 30 June', 'Studios & clinics', 'Code T8STUDIO'] }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.navyDeep} color={T8C.white}>
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="light" h={Math.round(w * 0.032)} />
          <Eyebrow color={T8C.coral}>{eyebrow}</Eyebrow>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: T8C.display, fontWeight: 800, fontStyle: 'italic', fontSize: Math.round(w * 0.27), lineHeight: 0.82, letterSpacing: '-0.04em', color: T8C.coral, fontVariantNumeric: 'tabular-nums' }}>{big}</div>
          <h1 style={{ margin: `${P * 0.3}px 0 0`, fontFamily: T8C.display, fontWeight: 700, fontSize: Math.round(w * 0.072), lineHeight: 0.98, letterSpacing: '-0.03em' }}>{line}</h1>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 18 }}>
          <SpecRow items={terms} size={Math.round(w * 0.0155)} rule={false} color="rgba(255,255,255,0.82)" />
        </div>
      </div>
    </Frame>
  );
}

// ── Tip carousel — cover ──────────────────────────────────────────────────
function TipCover({ w = 1080, h = 1080, eyebrow = 'REFORMER 101', l1 = 'Three checks', l2 = 'before you', l3 = 'push off.', pages = 4 }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.blue50}>
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="dark" h={Math.round(w * 0.032)} />
          <Eyebrow color={T8C.coral600}>{eyebrow}</Eyebrow>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 800, fontSize: Math.round(w * 0.105), lineHeight: 0.97, letterSpacing: '-0.035em', color: T8C.navy }}>{l1}<br />{l2}<br />{l3}</h1>
          <div style={{ width: Math.round(w * 0.13), height: 7, background: T8C.coral, marginTop: P * 0.5, borderRadius: 4 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Dots count={pages} active={0} />
          <Eyebrow color={T8C.ink500} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>SWIPE
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
          </Eyebrow>
        </div>
      </div>
    </Frame>
  );
}

// ── Tip carousel — inner slide ────────────────────────────────────────────
function TipInner({ w = 1080, h = 1080, num = '02', total = '04', sub = 'Set the footbar\nto height 3.', body = 'For most full-body flows, the third notch keeps your shoulders stacked over the carriage and protects the wrists during planks.', eyebrow = 'REFORMER 101' }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.white}>
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="dark" h={Math.round(w * 0.03)} />
          <Eyebrow color={T8C.ink500}>{eyebrow} · {num}/{total}</Eyebrow>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: P * 0.55 }}>
            <span style={{ fontFamily: T8C.display, fontWeight: 800, fontStyle: 'italic', fontSize: Math.round(w * 0.155), lineHeight: 0.86, color: T8C.coral, fontVariantNumeric: 'tabular-nums', flex: '0 0 auto' }}>{num}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 700, fontSize: Math.round(w * 0.062), lineHeight: 1.0, letterSpacing: '-0.03em', color: T8C.navy, whiteSpace: 'pre-line' }}>{sub}</h2>
              <p style={{ margin: `${P * 0.5}px 0 0`, fontSize: Math.round(w * 0.026), lineHeight: 1.55, color: T8C.ink700 }}>{body}</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${T8C.ink100}`, paddingTop: 22 }}>
          <Dots count={parseInt(total, 10)} active={parseInt(num, 10) - 1} />
          <Eyebrow color={T8C.ink500} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>SWIPE
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h11M11 5l5 5-5 5" /></svg>
          </Eyebrow>
        </div>
      </div>
    </Frame>
  );
}

// ── New launch — navy product reveal ──────────────────────────────────────
function NewLaunch({ w = 1080, h = 1080, eyebrow = 'NEW · 2026', img = 'assets/c8-noir-2.jpg', l1 = 'Meet the', l2 = 'C8 Pro.', sub = 'Now shipping across Asia.' }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.navy} color={T8C.white}>
      <div style={{ position: 'absolute', width: w * 0.95, height: w * 0.6, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(80,151,218,0.28), rgba(12,47,83,0) 65%)', top: h * 0.18, left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="light" h={Math.round(w * 0.032)} />
          <span style={{ background: T8C.coral, color: T8C.white, fontFamily: T8C.mono, fontSize: Math.round(w * 0.015), letterSpacing: '0.18em', padding: '9px 16px', borderRadius: 999 }}>{eyebrow}</span>
        </div>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: `${P * 0.3}px 0` }}>
          <ProductPlate src={img} pad="7%" style={{ width: '92%', height: '100%' }} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 800, fontSize: Math.round(w * 0.092), lineHeight: 0.96, letterSpacing: '-0.035em' }}>{l1} <span style={{ fontStyle: 'italic' }}>{l2}</span></h1>
          <div style={{ marginTop: 18, fontFamily: T8C.mono, fontSize: Math.round(w * 0.019), letterSpacing: '0.04em', color: 'rgba(255,255,255,0.75)' }}>{sub}</div>
        </div>
      </div>
    </Frame>
  );
}

// ── Quote / testimonial — sand, editorial ─────────────────────────────────
function QuotePost({ w = 1080, h = 1080, quote = 'Three years of daily classes and it still holds its calibration.', who = 'Felicia T.', role = 'Studio owner · Hong Kong', stars = 5 }) {
  const P = Math.round(w * 0.066);
  return (
    <Frame bg={T8C.sand}>
      <div style={{ position: 'absolute', inset: 0, padding: P, display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="dark" h={Math.round(w * 0.032)} />
          <Stars value={stars} size={Math.round(w * 0.026)} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <QuoteMark size={Math.round(w * 0.16)} style={{ marginBottom: -Math.round(w * 0.01) }} />
          <blockquote style={{ margin: 0, fontFamily: T8C.display, fontWeight: 600, fontSize: Math.round(w * 0.058), lineHeight: 1.08, letterSpacing: '-0.025em', color: T8C.navy, textWrap: 'pretty' }}>{quote}</blockquote>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, borderTop: `1px solid ${T8C.ink200}`, paddingTop: 24 }}>
          <span style={{ fontFamily: T8C.display, fontWeight: 700, fontSize: Math.round(w * 0.03), color: T8C.navy, letterSpacing: '-0.02em' }}>{who}</span>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: T8C.coral }} />
          <Eyebrow color={T8C.ink500} size={Math.round(w * 0.016)}>{role}</Eyebrow>
        </div>
      </div>
    </Frame>
  );
}

// ── Announcement — landscape (FB / LinkedIn) split ────────────────────────
function Announcement({ w = 1200, h = 630, eyebrow = 'OPEN STUDIO DAY · HONG KONG', l1 = 'Try every', l2 = 'reformer.', sub = 'Saturday 14 June · Kwun Tong showroom', cta = 'Reserve a slot', img = 'assets/c8-noir.jpg', pos = 'center 30%' }) {
  const P = Math.round(h * 0.1);
  return (
    <Frame bg={T8C.navyDeep} color={T8C.white} style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 56%', padding: P, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lockup tone="light" h={Math.round(h * 0.05)} />
        </div>
        <div>
          <Eyebrow color={T8C.coral} style={{ marginBottom: 16 }}>{eyebrow}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: T8C.display, fontWeight: 800, fontSize: Math.round(h * 0.135), lineHeight: 0.95, letterSpacing: '-0.035em' }}>{l1} <span style={{ fontStyle: 'italic' }}>{l2}</span></h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
          <Cta style={{ fontSize: Math.round(h * 0.034), padding: '14px 24px' }}>{cta}</Cta>
          <span style={{ fontFamily: T8C.mono, fontSize: Math.round(h * 0.026), letterSpacing: '0.04em', color: 'rgba(255,255,255,0.78)' }}>{sub}</span>
        </div>
      </div>
      <div style={{ flex: '1 1 44%', position: 'relative' }}>
        <Photo src={img} fit="cover" pos={pos} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(7,31,58,0.85), rgba(7,31,58,0) 30%)' }} />
      </div>
    </Frame>
  );
}

Object.assign(window, {
  Frame, SpotlightSheet, Daylight, SpotlightSignal, SaleOffer,
  TipCover, TipInner, NewLaunch, QuotePost, Announcement,
});
