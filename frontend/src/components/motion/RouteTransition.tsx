import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RouteTransitionProps {
  children: ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={prefersReducedMotion ? '' : 'route-transition'}>
      {children}
    </div>
  );
}
