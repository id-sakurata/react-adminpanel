import { useApp } from '@/stores/AppContext';
import { cn } from '@/utils/cn';
import {
  LayoutDashboard, Users, ShoppingBag, Package, UserCircle, Bell,
  Component, Settings, ChevronRight, X
} from 'lucide-react';

const menuItems = [
  { key: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { key: 'users', icon: Users, label: 'Users' },
  { key: 'products', icon: ShoppingBag, label: 'Products' },
  { key: 'orders', icon: Package, label: 'Orders' },
  { key: 'notifications', icon: Bell, label: 'Notifications', badge: 3 },
  { key: 'profile', icon: UserCircle, label: 'Profile' },
  { key: 'components', icon: Component, label: 'Components' },
  { key: 'settings', icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  const { currentPage, navigate, sidebarOpen, setSidebarOpen } = useApp();

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={cn(
        'fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-surface-200 z-50 transition-transform duration-300 flex flex-col',
        'lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:translate-x-0 lg:z-10',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex items-center justify-between p-4 border-b border-surface-100 lg:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-semibold text-surface-900">AdminPanel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 cursor-pointer">
            <X className="w-5 h-5 text-surface-400" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider px-3 py-2">Navigation</p>
          {menuItems.map(item => {
            const active = currentPage === item.key;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => navigate(item.key)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer',
                  active
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-danger-100 text-danger-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {active && <ChevronRight className="w-4 h-4 shrink-0 opacity-50" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-surface-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-surface-900 truncate">John Doe</p>
              <p className="text-xs text-surface-400 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
