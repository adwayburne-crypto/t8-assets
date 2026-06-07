import * as React from 'react';

/** Styled native select with chevron affordance. */
export interface SelectProps {
  label?: string;
  hint?: string;
  /** Options as strings or {value,label} objects. */
  options?: Array<string | { value: string; label: string }>;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
