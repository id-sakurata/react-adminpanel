import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface CounterBasicProps {
  label: string;
  value: string | number;
  className?: string;
}

export function CounterBasic({ label, value, className }: CounterBasicProps) {
  return (
    <Card className={cn('', className)}>
      <p className="text-sm text-surface-500">{label}</p>
      <p className="text-2xl font-bold text-surface-900 mt-1">{value}</p>
    </Card>
  );
}

interface CounterIconProps extends CounterBasicProps {
  icon: ReactNode;
  iconBg?: string;
}

export function CounterIcon({ label, value, icon, iconBg = 'bg-primary-100 text-primary-600', className }: CounterIconProps) {
  return (
    <Card className={cn('flex items-center gap-4', className)}>
      <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center shrink-0', iconBg)}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-surface-500">{label}</p>
        <p className="text-xl font-bold text-surface-900">{value}</p>
      </div>
    </Card>
  );
}
