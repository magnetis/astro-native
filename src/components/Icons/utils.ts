import { GradientID } from '@tokens/gradients';
import React, { ReactNode } from 'react';

interface getFillParams {
  gradient?: GradientID;
  color: string;
  id: string;
}

export function cloneChildrenWithProps(children: ReactNode, props: Record<string, any>): ReactNode {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
}

export function getFill({ gradient, color, id }: getFillParams) {
  if (gradient) {
    return `url(#${id})`;
  }
  return color;
}
