import * as React from 'react';

/**
 * Storefront product tile composing Badge, PriceTag, Rating & Button.
 * @startingPoint section="Commerce" subtitle="Product grid tile with price, rating & add-to-cart" viewport="320x420"
 */
export interface ProductCardProps {
  /** Product image URL. Falls back to a neutral placeholder. */
  image?: string;
  /** object-fit for the image. `contain` (default for white cut-outs) or `cover` (lifestyle). */
  fit?: 'cover' | 'contain';
  /** Custom media node for the image area (overrides `image`). */
  media?: React.ReactNode;
  title: string;
  /** Mono eyebrow above the title, e.g. "Reformer". */
  category?: string;
  price: number;
  /** Original price — shows a strikethrough + colours the price coral. */
  compareAt?: number;
  currency?: string;
  /** Corner flag, e.g. { label: 'Sale', tone: 'accent' }. */
  badge?: { label: string; tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger' };
  rating?: number;
  reviews?: number;
  onAdd?: () => void;
  onWishlist?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
