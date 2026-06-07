/* T8 Fitness storefront — Cart drawer (slide-over) */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const { Button, QuantityStepper, IconButton } = DS;

  function CartDrawer({ open, items, onClose, setQty, removeItem, go }) {
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const free = subtotal >= 2000;
    return (
      <>
        <div onClick={onClose} style={{
          position: 'fixed', inset: 0, zIndex: 800, background: 'var(--overlay-scrim)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity var(--dur-base) var(--ease-standard)',
        }} />
        <aside style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(440px, 92vw)', zIndex: 900,
          background: 'var(--white)', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform var(--dur-slow) var(--ease-out)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>Your cart ({items.reduce((s, i) => s + i.qty, 0)})</h2>
            <IconButton label="Close" variant="ghost" onClick={onClose}><window.Ico n="x" s={22} /></IconButton>
          </div>

          {items.length === 0 ? (
            <div style={{ flex: 1, display: 'grid', placeItems: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', textAlign: 'center', padding: 32 }}>
              <div>
                <window.Ico n="shopping-bag" s={40} color="var(--ink-300)" />
                <p style={{ marginTop: 14 }}>Your cart is empty.</p>
                <div style={{ marginTop: 16 }}><Button variant="secondary" onClick={() => { onClose(); go('collection'); }}>Browse apparatus</Button></div>
              </div>
            </div>
          ) : (
            <>
              <div style={{ flex: 1, overflowY: 'auto', padding: '8px 24px' }}>
                {items.map((i) => (
                  <div key={i.id} style={{ display: 'flex', gap: 14, padding: '18px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ width: 84, height: 84, flex: 'none', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--white)', border: '1px solid var(--border-subtle)' }}>
                      <img src={i.image} alt={i.title} style={{ width: '100%', height: '100%', objectFit: i.fit || 'contain', padding: i.fit === 'cover' ? 0 : '8%', boxSizing: 'border-box', display: 'block' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>{i.title}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 3 }}>{i.category}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                        <QuantityStepper value={i.qty} min={1} max={10} size="sm" onChange={(q) => setQty(i.id, q)} />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{fmt(i.price * i.qty)}</span>
                      </div>
                    </div>
                    <button onClick={() => removeItem(i.id)} aria-label="Remove" style={{ background: 'none', border: 0, cursor: 'pointer', color: 'var(--text-muted)', alignSelf: 'flex-start', padding: 2 }}><window.Ico n="trash-2" s={16} /></button>
                  </div>
                ))}
              </div>

              <div style={{ padding: '20px 24px 24px', borderTop: '1px solid var(--border-default)', background: 'var(--sand-50)' }}>
                {!free ? (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', marginBottom: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <window.Ico n="truck" s={15} color="var(--blue-700)" /> Add {fmt(2000 - subtotal)} for free HK delivery
                  </div>
                ) : (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--green-700)', marginBottom: 14, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <window.Ico n="check-circle-2" s={15} color="var(--green-700)" /> You've unlocked free HK delivery
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-secondary)' }}>Subtotal</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em' }}>{fmt(subtotal)}</span>
                </div>
                <Button variant="accent" size="lg" fullWidth>Checkout</Button>
                <button onClick={onClose} style={{ display: 'block', width: '100%', marginTop: 12, background: 'none', border: 0, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)' }}>Continue shopping</button>
              </div>
            </>
          )}
        </aside>
      </>
    );
  }
  function fmt(n) { return 'HK$' + Number(n).toLocaleString('en-US'); }
  window.CartDrawer = CartDrawer;
})();
