import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: string | number;
  icon: ReactNode;
  className?: string;
}

export function CounterGlass({ label, value, icon, className }: Props) {
  return (
    <div className={cn(
      'rounded-2xl p-4 sm:p-5 border border-white/30 glass shadow-lg',
      className
    )}>
      <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-primary-600 mb-3">
        {icon}
      </div>
      <p className="text-sm text-surface-500">{label}</p>
      <p className="text-2xl font-bold text-surface-900 mt-0.5">{value}</p>
    </div>
  );
}
