import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

const colorMap: Record<string, { bg: string; text: string; iconBg: string }> = {
  primary: { bg: 'bg-primary-50 border-primary-100', text: 'text-primary-700', iconBg: 'bg-primary-100' },
  success: { bg: 'bg-success-50 border-success-100', text: 'text-success-700', iconBg: 'bg-success-100' },
  danger: { bg: 'bg-danger-50 border-danger-100', text: 'text-danger-700', iconBg: 'bg-danger-100' },
  warning: { bg: 'bg-warning-50 border-warning-100', text: 'text-warning-700', iconBg: 'bg-warning-100' },
  info: { bg: 'bg-info-50 border-info-100', text: 'text-info-700', iconBg: 'bg-info-100' },
};

interface Props {
  label: string;
  value: string | number;
  icon: ReactNode;
  color?: string;
  className?: string;
}

export function CounterColored({ label, value, icon, color = 'primary', className }: Props) {
  const c = colorMap[color] || colorMap.primary;
  return (
    <div className={cn('rounded-2xl border p-4 sm:p-5', c.bg, className)}>
      <div className="flex items-center gap-3">
        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', c.iconBg, c.text)}>
          {icon}
        </div>
        <div>
          <p className={cn('text-sm opacity-75', c.text)}>{label}</p>
          <p className={cn('text-xl font-bold', c.text)}>{value}</p>
        </div>
      </div>
    </div>
  );
}
