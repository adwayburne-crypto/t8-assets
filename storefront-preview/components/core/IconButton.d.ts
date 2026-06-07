import * as React from 'react';

/** Icon-only control for headers, toolbars and card actions. */
export interface IconButtonProps {
  variant?: 'ghost' | 'soft' | 'outline' | 'brand' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'round';
  /** Accessible label (also the tooltip). Required for icon-only controls. */
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** The icon node (e.g. a Lucide SVG). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
