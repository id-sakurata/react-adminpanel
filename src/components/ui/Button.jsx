import { cn } from '@/utils/cn';

const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
  secondary: 'bg-surface-100 text-surface-700 hover:bg-surface-200',
  success: 'bg-success-600 text-white hover:bg-success-700 shadow-sm',
  danger: 'bg-danger-600 text-white hover:bg-danger-700 shadow-sm',
  warning: 'bg-warning-500 text-white hover:bg-warning-600 shadow-sm',
  info: 'bg-info-600 text-white hover:bg-info-700 shadow-sm',
  outline: 'border border-surface-300 text-surface-700 hover:bg-surface-50',
  ghost: 'text-surface-600 hover:bg-surface-100',
  link: 'text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline',
};

const sizeStyles = {
  sm: 'h-8 px-3 text-xs rounded-lg',
  md: 'h-10 px-4 text-sm rounded-xl',
  lg: 'h-12 px-6 text-base rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
        variantStyles[variant] || variantStyles.primary,
        sizeStyles[size] || sizeStyles.md,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
