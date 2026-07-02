import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/utils/cn';

export function CounterProgress({ label, value, max = 100, color = 'primary', icon, suffix = '%', className }) {
  return (
    <Card className={cn('', className)}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-surface-500">{label}</p>
        {icon && <div className="text-surface-400">{icon}</div>}
      </div>
      <p className="text-2xl font-bold text-surface-900">{value}{suffix}</p>
      <ProgressBar value={value} max={max} color={color} className="mt-3" />
    </Card>
  );
}
