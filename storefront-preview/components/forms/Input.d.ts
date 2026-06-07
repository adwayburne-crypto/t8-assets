import * as React from 'react';

/** Text input with label, hint/error and optional leading/trailing nodes. */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message — also turns the field red. */
  error?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
