/* T8 Fitness storefront — Product detail screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const { Button, Badge, Rating, PriceTag, QuantityStepper, IconButton } = DS;

  function Product({ id, go, addToCart }) {
    const p = window.T8_PRODUCTS.find((x) => x.id === id) || window.T8_PRODUCTS[0];
    const [qty, setQty] = React.useState(1);
    const [tab, setTab] = React.useState('Description');
    const [activeImg, setActiveImg] = React.useState(0);
    React.useEffect(() => { setActiveImg(0); }, [id]);
    const imgs = p.images || [p.image];
    const idx = Math.min(activeImg, imgs.length - 1);
    const pad = p.fit === 'cover' ? 0 : '7%';
    const tabs = ['Description', 'Specifications', 'Delivery & assembly'];

    return (
      <div className="t8-container" style={{ padding: '28px var(--container-pad) 80px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 8, marginBottom: 28 }}>
          <a onClick={() => go('home')} style={{ cursor: 'pointer' }}>Home</a><span>/</span>
          <a onClick={() => go('collection')} style={{ cursor: 'pointer' }}>{p.category}</a><span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{p.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 96 }}>
            <div style={{ aspectRatio: '1 / 1', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--white)', border: '1px solid var(--border-subtle)' }}>
              <img src={imgs[idx]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: p.fit || 'contain', padding: pad, boxSizing: 'border-box', display: 'block' }} />
            </div>
            {imgs.length > 1 ? (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(imgs.length, 4)},1fr)`, gap: 12 }}>
                {imgs.map((src, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} style={{ cursor: 'pointer', aspectRatio: '1 / 1', borderRadius: 'var(--radius-md)', background: 'var(--white)', outline: idx === i ? '2px solid var(--blue-700)' : '1px solid var(--border-default)', outlineOffset: idx === i ? 0 : -1, overflow: 'hidden' }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: p.fit || 'contain', padding: p.fit === 'cover' ? 0 : '10%', boxSizing: 'border-box', display: 'block' }} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* buy box */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--coral-600)' }}>{p.category}</span>
              {p.badge ? <Badge tone={p.badge.tone} variant="solid">{p.badge.label}</Badge> : null}
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '14px 0 0' }}>{p.title}</h1>
            <div style={{ marginTop: 14 }}><Rating value={p.rating} count={p.reviews} size={18} /></div>
            <div style={{ marginTop: 22 }}><PriceTag amount={p.price} compareAt={p.compareAt} size="xl" /></div>
            <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{p.blurb}</p>

            {/* options */}
            <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Frame finish</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[['Silver', '#c7ccd1'], ['Graphite', '#3a4452'], ['Black', '#16202a']].map(([n, c], i) => (
                    <Swatch key={n} name={n} color={c} defaultActive={i === 0} />
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Quantity</div>
                  <QuantityStepper value={qty} min={1} max={10} onChange={setQty} size="md" />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green-700)', paddingBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <window.Ico n="check-circle-2" s={15} color="var(--green-700)" /> In stock · ships in 48 hrs
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <Button variant="accent" size="lg" style={{ flex: 1 }} onClick={() => addToCart(p, qty)} iconLeft={<window.Ico n="shopping-bag" s={18} color="#fff" />}>Add to cart · {fmt(p.price * qty)}</Button>
              <IconButton label="Add to wishlist" variant="outline" size="lg"><window.Ico n="heart" s={20} /></IconButton>
            </div>

            <div style={{ display: 'flex', gap: 24, marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--border-subtle)', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', gap: 7, alignItems: 'center' }}><window.Ico n="truck" s={16} color="var(--blue-700)" /> Free HK delivery</span>
              <span style={{ display: 'flex', gap: 7, alignItems: 'center' }}><window.Ico n="shield-check" s={16} color="var(--blue-700)" /> {p.specs[5][1]} warranty</span>
              <span style={{ display: 'flex', gap: 7, alignItems: 'center' }}><window.Ico n="wrench" s={16} color="var(--blue-700)" /> Pro assembly</span>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div style={{ marginTop: 64, borderTop: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', gap: 6, borderBottom: '1px solid var(--border-default)' }}>
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{
                background: 'none', border: 0, cursor: 'pointer', padding: '18px 4px', marginRight: 24,
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                color: tab === t ? 'var(--text-primary)' : 'var(--text-muted)',
                borderBottom: '2px solid ' + (tab === t ? 'var(--coral-500)' : 'transparent'), marginBottom: -1,
              }}>{t}</button>
            ))}
          </div>
          <div style={{ padding: '32px 0', maxWidth: 760 }}>
            {tab === 'Description' ? (
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{p.blurb} Every unit is workshop-tested before dispatch and backed by our Hong Kong service team. Replacement springs, straps and footbar parts are kept in stock for the lifetime of the apparatus.</p>
            ) : tab === 'Specifications' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 56px', maxWidth: 640 }}>
                {p.specs.map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '13px 0', borderBottom: '1px dashed var(--border-default)', fontFamily: 'var(--font-mono)', fontSize: 14 }}>
                    <span style={{ color: 'var(--text-muted)' }}>{k}</span><span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{v}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-secondary)' }}>Free white-glove delivery and assembly across Hong Kong on orders over HK$2,000. Our team will position, level and calibrate the apparatus in your studio. Outlying islands and Asia-Pacific shipping quoted at checkout. Assembly typically completed within 48 hours of delivery.</p>
            )}
          </div>
        </div>

        {/* related */}
        <Related go={go} addToCart={addToCart} exclude={p.id} />
      </div>
    );
  }

  function Swatch({ name, color, defaultActive }) {
    const [active, setActive] = React.useState(defaultActive);
    return (
      <button onClick={() => setActive(true)} title={name} style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '7px 14px 7px 8px',
        borderRadius: 'var(--radius-pill)', cursor: 'pointer', background: 'var(--white)',
        border: '1px solid ' + (active ? 'var(--blue-700)' : 'var(--border-strong)'),
        fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500,
      }}>
        <span style={{ width: 18, height: 18, borderRadius: '50%', background: color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)' }} />
        {name}
      </button>
    );
  }

  function Related({ go, addToCart, exclude }) {
    const { ProductCard } = window.T8FitnessDesignSystem_ce2827;
    const items = window.T8_PRODUCTS.filter((x) => x.id !== exclude).slice(0, 4);
    return (
      <section style={{ marginTop: 72 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.025em', marginBottom: 26 }}>You may also like</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {items.map((p) => (
            <ProductCard key={p.id} {...p} fit={p.fit || 'contain'} onClick={() => go('product', p.id)} onAdd={() => addToCart(p)} />
          ))}
        </div>
      </section>
    );
  }

  function fmt(n) { return 'HK$' + Number(n).toLocaleString('en-US'); }

  window.Product = Product;
})();
