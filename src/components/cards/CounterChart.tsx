import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

interface Props {
  label: string;
  value: string | number;
  data: number[];
  color?: string;
  className?: string;
}

export function CounterChart({ label, value, data, color = '#3b82f6', className }: Props) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 40;
  const w = 100;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((d - min) / range) * h;
    return `${x},${y}`;
  }).join(' ');

  return (
    <Card className={cn('', className)}>
      <p className="text-sm text-surface-500">{label}</p>
      <p className="text-2xl font-bold text-surface-900 mt-1">{value}</p>
      <div className="mt-3">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`grad-${label.replace(/\s/g,'')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,${h} ${points} ${w},${h}`}
            fill={`url(#grad-${label.replace(/\s/g,'')})`}
          />
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Card>
  );
}
