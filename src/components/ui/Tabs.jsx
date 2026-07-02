import { cn } from '@/utils/cn';

export function Tabs({ tabs, active, onChange, className }) {
  return (
    <div className={cn('flex gap-1 bg-surface-100 p-1 rounded-xl overflow-x-auto', className)}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            'px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer',
            active === tab.key
              ? 'bg-white text-surface-900 shadow-sm'
              : 'text-surface-500 hover:text-surface-700'
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className={cn(
              'ml-1.5 text-xs px-1.5 py-0.5 rounded-full',
              active === tab.key ? 'bg-primary-100 text-primary-700' : 'bg-surface-200 text-surface-500'
            )}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
