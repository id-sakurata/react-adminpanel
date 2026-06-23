import { useApp } from '@/stores/AppContext';
import { Search, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const suggestions = [
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'Users Management', page: 'users' },
  { label: 'Products', page: 'products' },
  { label: 'Orders', page: 'orders' },
  { label: 'Profile Settings', page: 'profile' },
  { label: 'Notifications', page: 'notifications' },
  { label: 'Components', page: 'components' },
];

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, navigate } = useApp();
  const [query, setQuery] = useState('');

  if (!searchOpen) return null;

  const filtered = suggestions.filter(s =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (page: string) => {
    navigate(page);
    setSearchOpen(false);
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => { setSearchOpen(false); setQuery(''); }} />
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-surface-100">
          <Search className="w-5 h-5 text-surface-400 shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search pages, features..."
            className="flex-1 h-14 text-sm outline-none bg-transparent placeholder:text-surface-400"
          />
          <button onClick={() => { setSearchOpen(false); setQuery(''); }} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 cursor-pointer">
            <X className="w-4 h-4 text-surface-400" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="text-sm text-surface-400 text-center py-8">No results found</p>
          ) : (
            filtered.map(item => (
              <button
                key={item.page}
                onClick={() => handleSelect(item.page)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-surface-700 hover:bg-surface-50 transition-colors cursor-pointer"
              >
                <span className="flex-1 text-left">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-surface-300" />
              </button>
            ))
          )}
        </div>

        <div className="px-4 py-2.5 bg-surface-50 border-t border-surface-100">
          <p className="text-xs text-surface-400">Press <kbd className="px-1.5 py-0.5 bg-white border border-surface-200 rounded text-xs">ESC</kbd> to close</p>
        </div>
      </div>
    </div>
  );
}
