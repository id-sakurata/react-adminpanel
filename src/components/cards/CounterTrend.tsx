import { cn } from '@/utils/cn';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: string | number;
  trend: number; // percentage
  icon?: ReactNode;
  className?: string;
}

export function CounterTrend({ label, value, trend, icon, className }: Props) {
  const isUp = trend >= 0;
  return (
    <Card className={cn('', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-surface-500">{label}</p>
          <p className="text-2xl font-bold text-surface-900 mt-1">{value}</p>
          <div className={cn(
            'flex items-center gap-1 mt-2 text-xs font-medium',
            isUp ? 'text-success-600' : 'text-danger-600'
          )}>
            {isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span>{isUp ? '+' : ''}{trend}%</span>
            <span className="text-surface-400 ml-1">vs last month</span>
          </div>
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-surface-500">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
