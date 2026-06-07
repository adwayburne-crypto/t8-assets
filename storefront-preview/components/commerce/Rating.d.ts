import * as React from 'react';

/** Read-only star rating with fractional fill and optional review count. */
export interface RatingProps {
  /** Rating value, e.g. 4.5 */
  value?: number;
  max?: number;
  /** Review count shown in parentheses. */
  count?: number;
  /** Star pixel size. */
  size?: number;
  style?: React.CSSProperties;
}

export function Rating(props: RatingProps): JSX.Element;
