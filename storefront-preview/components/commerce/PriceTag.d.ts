import * as React from 'react';

/** Price with optional strikethrough compare-at; sale price renders in coral. */
export interface PriceTagProps {
  amount: number;
  /** Original price — renders struck-through and turns the price coral. */
  compareAt?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
}

export function PriceTag(props: PriceTagProps): JSX.Element;
