import { cn } from '@/utils/cn';

export function Skeleton({ className, width, height }) {
  return (
    <div
      className={cn('skeleton-shimmer rounded-lg', className)}
      style={{ width, height }}
    />
  );
}
