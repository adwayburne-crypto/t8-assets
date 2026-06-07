import * as React from 'react';

/** Small status / metadata pill in mono caps. */
export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
  variant?: 'soft' | 'solid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
