import { useApp } from '@/stores/AppContext';
import { cn } from '@/utils/cn';
import { LayoutGrid, Search, Home, Bell, User } from 'lucide-react';

const navItems = [
  { key: 'menu', icon: LayoutGrid, label: 'Menu' },
  { key: 'search', icon: Search, label: 'Search' },
  { key: 'dashboard', icon: Home, label: 'Home', isCenter: true },
  { key: 'notifications', icon: Bell, label: 'Alerts' },
  { key: 'profile', icon: User, label: 'Profile' },
];

export function BottomNav() {
  const { currentPage, navigate, setSidebarOpen, sidebarOpen, setSearchOpen } = useApp();

  const handleClick = (key: string) => {
    if (key === 'menu') {
      setSidebarOpen(!sidebarOpen);
    } else if (key === 'search') {
      setSearchOpen(true);
    } else {
      navigate(key);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="mx-3 mb-3 bg-white/90 backdrop-blur-xl border border-surface-200/60 rounded-2xl shadow-lg px-2 py-1.5 pb-safe">
        <div className="flex items-center justify-around">
          {navItems.map(item => {
            const active = currentPage === item.key;
            const Icon = item.icon;

            if (item.isCenter) {
              return (
                <button
                  key={item.key}
                  onClick={() => handleClick(item.key)}
                  className="relative -mt-5 cursor-pointer"
                >
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200',
                    active
                      ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white scale-105'
                      : 'bg-gradient-to-br from-primary-400 to-primary-600 text-white'
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                </button>
              );
            }

            return (
              <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={cn(
                  'flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[48px] cursor-pointer',
                  active ? 'text-primary-600' : 'text-surface-400 hover:text-surface-600'
                )}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {item.key === 'notifications' && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-danger-500 rounded-full" />
                  )}
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
                {active && <div className="w-4 h-0.5 bg-primary-500 rounded-full mt-0.5" />}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
