import { cn } from '@/utils/cn';

const sizeMap: Record<string, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

interface AvatarProps {
  src?: string;
  name?: string;
  size?: string;
  className?: string;
}

export function Avatar({ src, name = '', size = 'md', className }: AvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const colors = [
    'bg-primary-500', 'bg-success-500', 'bg-danger-500',
    'bg-warning-500', 'bg-info-500', 'bg-purple-500',
  ];
  const colorIndex = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % colors.length;

  return (
    <div className={cn(
      'rounded-full flex items-center justify-center font-semibold text-white shrink-0 overflow-hidden',
      sizeMap[size] || sizeMap.md,
      !src && colors[colorIndex],
      className
    )}>
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        initials || '?'
      )}
    </div>
  );
}
