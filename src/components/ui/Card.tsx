import { cn } from '@/utils/cn';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: string;
}

export function Card({ children, className, hover, padding = 'p-4 sm:p-5', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-surface-200/80 shadow-sm',
        padding,
        hover && 'hover:shadow-md hover:border-surface-300 transition-all duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-base font-semibold text-surface-900', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-sm text-surface-500 mt-1', className)}>{children}</p>;
}
