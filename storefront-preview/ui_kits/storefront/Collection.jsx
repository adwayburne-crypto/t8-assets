/* T8 Fitness storefront — Collection / listing screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const { ProductCard, Tag, Checkbox, Select, Badge } = DS;

  function Collection({ go, addToCart }) {
    const [cat, setCat] = React.useState('All');
    const [inStock, setInStock] = React.useState(false);
    const [onSale, setOnSale] = React.useState(false);
    const [sort, setSort] = React.useState('Featured');

    let items = window.T8_PRODUCTS.filter((p) => cat === 'All' || p.category === cat);
    if (onSale) items = items.filter((p) => p.compareAt);
    if (sort === 'Price: low to high') items = [...items].sort((a, b) => a.price - b.price);
    if (sort === 'Price: high to low') items = [...items].sort((a, b) => b.price - a.price);

    return (
      <div>
        {/* breadcrumb + header band */}
        <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="t8-container" style={{ padding: '28px var(--container-pad) 32px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.08em', color: 'var(--text-muted)', display: 'flex', gap: 8 }}>
              <a onClick={() => go('home')} style={{ cursor: 'pointer' }}>Home</a><span>/</span><span style={{ color: 'var(--text-primary)' }}>{cat === 'All' ? 'All apparatus' : cat}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.6vw,46px)', letterSpacing: '-0.025em', marginTop: 14 }}>
              {cat === 'All' ? 'All apparatus' : cat}
            </h1>
            <p style={{ marginTop: 8, color: 'var(--text-secondary)', fontSize: 16, maxWidth: 560 }}>
              Reformers, towers, chairs and barrels engineered for studios and serious home practitioners.
            </p>
          </div>
        </div>

        <div className="t8-container" style={{ display: 'grid', gridTemplateColumns: '248px 1fr', gap: 40, padding: '36px var(--container-pad) 80px', alignItems: 'start' }}>
          {/* sidebar */}
          <aside style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <FilterGroup title="Category">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {window.T8_CATEGORIES.map((c) => (
                  <Tag key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Tag>
                ))}
              </div>
            </FilterGroup>
            <FilterGroup title="Availability">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Checkbox label="In stock only" checked={inStock} onChange={setInStock} />
                <Checkbox label="On sale" checked={onSale} onChange={setOnSale} />
              </div>
            </FilterGroup>
            <FilterGroup title="Price range">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Checkbox label="Under HK$2,000" />
                <Checkbox label="HK$2,000 – 10,000" />
                <Checkbox label="HK$10,000+" />
              </div>
            </FilterGroup>
          </aside>

          {/* grid */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{items.length} products</span>
              <div style={{ width: 230 }}>
                <Select options={['Featured', 'Price: low to high', 'Price: high to low', 'Newest']} value={sort} onChange={(e) => setSort(e.target.value)} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {items.map((p) => (
                <ProductCard key={p.id} {...p} fit={p.fit || 'contain'} onClick={() => go('product', p.id)} onAdd={() => addToCart(p)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function FilterGroup({ title, children }) {
    return (
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--border-default)' }}>{title}</div>
        {children}
      </div>
    );
  }

  window.Collection = Collection;
})();
