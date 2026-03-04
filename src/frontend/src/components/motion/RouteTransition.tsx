import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ReactNode } from "react";

interface RouteTransitionProps {
  children: ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={prefersReducedMotion ? "" : "route-transition"}>
      {children}
    </div>
  );
}
