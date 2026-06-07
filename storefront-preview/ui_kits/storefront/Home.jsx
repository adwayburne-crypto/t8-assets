/* T8 Fitness storefront — Home screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const { Button, Badge, ProductCard, Tag } = DS;

  function Hero({ go }) {
    return (
      <section style={{ background: 'var(--blue-950)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="t8-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '72px var(--container-pad) 80px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--coral-400)' }}>Home of Align-Pilates · Hong Kong</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 5.6vw, 74px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '20px 0 0', color: '#fff' }}>
              Equip the way you move.
            </h1>
            <p style={{ marginTop: 22, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', maxWidth: 460 }}>
              Studio-grade reformers, towers and apparatus — engineered to hold their calibration for years and trusted by Pilates studios across Asia.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
              <Button variant="accent" size="lg" onClick={() => go('collection')} iconRight={<window.Ico n="arrow-right" s={18} color="#fff" />}>Shop reformers</Button>
              <Button variant="inverse" size="lg" onClick={() => go('collection')}>Browse collections</Button>
            </div>
            <div style={{ display: 'flex', gap: 36, marginTop: 44 }}>
              {[['15+ yrs', 'Supplying studios'], ['5-year', 'Frame warranty'], ['48 hr', 'HK assembly']].map(([a, b]) => (
                <div key={a}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em' }}>{a}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '5 / 4', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', background: 'var(--ink-100)' }}>
              <img src={window.T8_HERO_IMG} alt="C8-Pro reformer in a studio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: -18, left: -18, background: 'var(--coral-500)', color: '#fff', padding: '14px 18px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: 0.85 }}>From</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>HK$9,450</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function ValueProps() {
    const items = [
      ['truck', 'Free HK delivery', 'On studio orders over HK$2,000, with white-glove assembly.'],
      ['shield-check', '5-year frame warranty', 'Aircraft-grade aluminium, built to outlast a decade of classes.'],
      ['ruler', 'Sizing support', 'Talk to our specialists before you fit out a studio.'],
      ['repeat', '30-day returns', 'Unused accessories, returned simply within 30 days.'],
    ];
    return (
      <section style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="t8-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28, padding: '36px var(--container-pad)' }}>
          {items.map(([ic, t, d]) => (
            <div key={t} style={{ display: 'flex', gap: 14 }}>
              <span style={{ color: 'var(--blue-700)', flex: 'none' }}><window.Ico n={ic} s={24} color="var(--blue-700)" /></span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{t}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: 3 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function Featured({ go, addToCart }) {
    const featured = window.T8_PRODUCTS.slice(0, 4);
    return (
      <section className="t8-container" style={{ padding: '72px var(--container-pad)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--coral-600)' }}>Best sellers</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.025em', marginTop: 8 }}>Studio favourites</h2>
          </div>
          <Button variant="secondary" onClick={() => go('collection')} iconRight={<window.Ico n="arrow-right" s={16} />}>View all</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} fit={p.fit || 'contain'} onClick={() => go('product', p.id)} onAdd={() => addToCart(p)} />
          ))}
        </div>
      </section>
    );
  }

  function CategoryStrip({ go }) {
    const cats = ['Reformers', 'Towers & Cadillacs', 'Chairs', 'Barrels'];
    return (
      <section style={{ background: 'var(--sand-100)' }}>
        <div className="t8-container" style={{ padding: '64px var(--container-pad)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.025em', marginBottom: 28 }}>Shop by apparatus</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {cats.map((c) => (
              <a key={c} onClick={() => go('collection')} style={{ cursor: 'pointer', display: 'block' }}>
                <div style={{ aspectRatio: '1 / 1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--white)', border: '1px solid var(--border-subtle)' }}>
                  <img src={window.T8_CATEGORY_IMG[c]} alt={c} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12%', boxSizing: 'border-box', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{c}</span>
                  <window.Ico n="arrow-up-right" s={18} color="var(--blue-700)" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Newsletter() {
    return (
      <section style={{ background: 'var(--blue-700)', color: '#fff' }}>
        <div className="t8-container" style={{ padding: '56px var(--container-pad)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.025em' }}>Discounts &amp; early access</h2>
            <p style={{ marginTop: 12, fontSize: 16, color: 'rgba(255,255,255,0.8)', maxWidth: 420 }}>Join the VIP list for first look at new apparatus, studio pricing and seasonal promotions.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 12 }}>
            <input placeholder="Email address" style={{ flex: 1, height: 54, borderRadius: 'var(--radius-sm)', border: 0, padding: '0 18px', fontFamily: 'var(--font-sans)', fontSize: 16 }} />
            <Button variant="accent" size="lg" type="submit">Sign up</Button>
          </form>
        </div>
      </section>
    );
  }

  function Home({ go, addToCart }) {
    return (
      <div>
        <Hero go={go} />
        <ValueProps />
        <Featured go={go} addToCart={addToCart} />
        <CategoryStrip go={go} />
        <Newsletter />
      </div>
    );
  }
  window.Home = Home;
})();
