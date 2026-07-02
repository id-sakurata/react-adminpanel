import { cn } from '@/utils/cn';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

const variants = {
  info: {
    container: 'bg-info-50 border-info-200 text-info-800',
    icon: <Info className="w-5 h-5 text-info-500" />,
  },
  success: {
    container: 'bg-success-50 border-success-200 text-success-800',
    icon: <CheckCircle className="w-5 h-5 text-success-500" />,
  },
  warning: {
    container: 'bg-warning-50 border-warning-200 text-warning-800',
    icon: <AlertTriangle className="w-5 h-5 text-warning-500" />,
  },
  danger: {
    container: 'bg-danger-50 border-danger-200 text-danger-800',
    icon: <AlertCircle className="w-5 h-5 text-danger-500" />,
  },
};

export function Alert({ variant = 'info', title, children, dismissible, onDismiss, className }) {
  const v = variants[variant] || variants.info;
  return (
    <div className={cn('flex gap-3 p-4 rounded-xl border', v.container, className)}>
      <div className="shrink-0 mt-0.5">{v.icon}</div>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm">{title}</p>}
        {children && <p className="text-sm mt-0.5 opacity-90">{children}</p>}
      </div>
      {dismissible && (
        <button onClick={onDismiss} className="shrink-0 text-current opacity-50 hover:opacity-100 cursor-pointer">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
