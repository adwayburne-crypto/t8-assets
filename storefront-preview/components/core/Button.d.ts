import * as React from 'react';

/**
 * T8 Fitness primary action control — confident, athletic, squared-soft.
 * @startingPoint section="Core" subtitle="Primary / accent / secondary / ghost actions" viewport="700x220"
 */
export interface ButtonProps {
  /** Visual style. `accent` = coral (sale/CTA), `primary` = T8 blue. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  /** Icon node rendered before the label (e.g. a Lucide SVG). */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /** Render as an anchor when provided. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
