import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';
import { PriceTag } from './PriceTag.jsx';
import { Rating } from './Rating.jsx';

/**
 * T8 Fitness — ProductCard
 * Storefront product tile. Composes Badge, PriceTag, Rating & Button.
 */
export function ProductCard({
  image, media, fit = 'cover', title, category, price, compareAt, currency = 'HK$',
  badge, rating, reviews, onAdd, onWishlist, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [wish, setWish] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--white)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...style,
      }} {...rest}>
      <div style={{ position: 'relative', aspectRatio: '4 / 3', background: image ? 'var(--white)' : 'var(--sand-100)', overflow: 'hidden' }}>
        {media ? media : image ? (
          <img src={image} alt={title} style={{
            width: '100%', height: '100%', objectFit: fit, display: 'block',
            padding: fit === 'contain' ? '6%' : 0, boxSizing: 'border-box',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-standard)',
          }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--ink-300)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em' }}>IMAGE</div>
        )}
        {badge ? (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge tone={badge.tone || 'accent'} variant="solid">{badge.label}</Badge>
          </div>
        ) : null}
        <div style={{ position: 'absolute', top: 10, right: 10, opacity: hover ? 1 : 0, transition: 'opacity var(--dur-fast)' }}>
          <IconButton label="Add to wishlist" variant="soft" shape="round"
            onClick={(e) => { e.stopPropagation(); setWish((w) => !w); onWishlist && onWishlist(); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={wish ? 'var(--coral-500)' : 'none'} stroke={wish ? 'var(--coral-500)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          </IconButton>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 'var(--space-5)' }}>
        {category ? (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{category}</span>
        ) : null}
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
        {rating != null ? <Rating value={rating} count={reviews} size={14} /> : null}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, gap: 12 }}>
          <PriceTag amount={price} compareAt={compareAt} currency={currency} size="md" />
          <Button variant="primary" size="sm" onClick={(e) => { e.stopPropagation(); onAdd && onAdd(); }}>Add</Button>
        </div>
      </div>
    </div>
  );
}
