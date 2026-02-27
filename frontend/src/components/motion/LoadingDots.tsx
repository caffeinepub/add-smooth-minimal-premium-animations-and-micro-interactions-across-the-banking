import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function LoadingDots() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-current opacity-60" />
        <div className="h-2 w-2 rounded-full bg-current opacity-60" />
        <div className="h-2 w-2 rounded-full bg-current opacity-60" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="loading-dot h-2 w-2 rounded-full bg-current" style={{ animationDelay: '0ms' }} />
      <div className="loading-dot h-2 w-2 rounded-full bg-current" style={{ animationDelay: '150ms' }} />
      <div className="loading-dot h-2 w-2 rounded-full bg-current" style={{ animationDelay: '300ms' }} />
    </div>
  );
}
