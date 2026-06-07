import * as React from 'react';

/** Selectable filter / category chip. Optional dismiss button. */
export interface TagProps {
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** When provided, renders a × dismiss control. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
