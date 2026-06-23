import { useApp } from '@/stores/AppContext';
import { cn } from '@/utils/cn';
import { Menu, Bell, Search, X } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { useState, useRef, useEffect } from 'react';

export function TopNav() {
  const { navigate, currentPage, setSidebarOpen, sidebarOpen, setSearchOpen } = useApp();
  const [profileDrop, setProfileDrop] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setProfileDrop(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 h-16 glass border-b border-surface-200/60">
      <div className="flex items-center justify-between h-full px-4 sm:px-5 lg:px-6 max-w-[1400px] mx-auto">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-100 transition-colors cursor-pointer"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button onClick={() => navigate('dashboard')} className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-semibold text-surface-900 hidden sm:block">AdminPanel</span>
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-100 transition-colors text-surface-500 cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate('notifications')}
            className={cn(
              'w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-100 transition-colors relative cursor-pointer',
              currentPage === 'notifications' ? 'text-primary-600 bg-primary-50' : 'text-surface-500'
            )}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-danger-500 rounded-full" />
          </button>

          {/* Profile dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setProfileDrop(!profileDrop)}
              className="flex items-center gap-2 p-1 rounded-xl hover:bg-surface-100 transition-colors cursor-pointer"
            >
              <Avatar name="John Doe" size="sm" />
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-surface-900 leading-none">John Doe</p>
                <p className="text-xs text-surface-400 mt-0.5">Administrator</p>
              </div>
            </button>

            {profileDrop && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-surface-200 shadow-lg py-2 z-50">
                <div className="px-3 py-2 border-b border-surface-100">
                  <p className="text-sm font-medium text-surface-900">John Doe</p>
                  <p className="text-xs text-surface-400">john@example.com</p>
                </div>
                <button onClick={() => { navigate('profile'); setProfileDrop(false); }} className="w-full text-left px-3 py-2 text-sm text-surface-700 hover:bg-surface-50 cursor-pointer">
                  My Profile
                </button>
                <button onClick={() => { navigate('settings'); setProfileDrop(false); }} className="w-full text-left px-3 py-2 text-sm text-surface-700 hover:bg-surface-50 cursor-pointer">
                  Settings
                </button>
                <div className="border-t border-surface-100 mt-1 pt-1">
                  <button className="w-full text-left px-3 py-2 text-sm text-danger-600 hover:bg-danger-50 cursor-pointer">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
