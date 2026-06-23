import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: string | number;
  icon: ReactNode;
  iconColor?: string;
  className?: string;
}

export function CounterMini({ label, value, icon, iconColor = 'text-primary-500', className }: Props) {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-surface-200/80 p-3 flex items-center gap-3',
      className
    )}>
      <div className={cn('shrink-0', iconColor)}>{icon}</div>
      <div className="min-w-0">
        <p className="text-lg font-bold text-surface-900 leading-none">{value}</p>
        <p className="text-xs text-surface-400 mt-0.5 truncate">{label}</p>
      </div>
    </div>
  );
}
