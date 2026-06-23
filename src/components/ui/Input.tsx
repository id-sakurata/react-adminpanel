import { cn } from '@/utils/cn';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({ label, error, icon, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && <label className="text-sm font-medium text-surface-700">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full h-11 px-3 rounded-xl border bg-white text-sm transition-all duration-200',
            'border-surface-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none',
            'placeholder:text-surface-400',
            icon && 'pl-10',
            error && 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/20',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-danger-600">{error}</p>}
    </div>
  );
}
