import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

const gradients: Record<string, string> = {
  primary: 'bg-gradient-to-br from-primary-500 to-primary-700',
  success: 'bg-gradient-to-br from-success-500 to-success-700',
  danger: 'bg-gradient-to-br from-danger-500 to-danger-700',
  warning: 'bg-gradient-to-br from-warning-400 to-warning-600',
  info: 'bg-gradient-to-br from-info-400 to-info-600',
  purple: 'bg-gradient-to-br from-purple-500 to-purple-700',
};

interface Props {
  label: string;
  value: string | number;
  icon: ReactNode;
  gradient?: string;
  className?: string;
}

export function CounterGradient({ label, value, icon, gradient = 'primary', className }: Props) {
  return (
    <div className={cn(
      'rounded-2xl p-4 sm:p-5 text-white shadow-lg relative overflow-hidden',
      gradients[gradient] || gradients.primary,
      className
    )}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
          {icon}
        </div>
        <p className="text-sm text-white/80">{label}</p>
        <p className="text-2xl font-bold mt-0.5">{value}</p>
      </div>
    </div>
  );
}
