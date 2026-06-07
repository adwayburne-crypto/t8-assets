import * as React from 'react';

/** −/+ quantity stepper for cart & product pages. */
export interface QuantityStepperProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
