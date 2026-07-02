import { cn } from '@/utils/cn';

const colorMap = {
  primary: 'bg-primary-500',
  success: 'bg-success-500',
  danger: 'bg-danger-500',
  warning: 'bg-warning-500',
  info: 'bg-info-500',
};

export function ProgressBar({ value, max = 100, color = 'primary', size = 'md', className, showLabel }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const h = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2';

  return (
    <div className={cn('w-full', className)}>
      <div className={cn('w-full bg-surface-100 rounded-full overflow-hidden', h)}>
        <div
          className={cn('h-full rounded-full transition-all duration-500', colorMap[color] || colorMap.primary)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && <span className="text-xs text-surface-500 mt-1">{Math.round(pct)}%</span>}
    </div>
  );
}
