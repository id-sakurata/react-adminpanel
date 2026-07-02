import { useApp } from '@/stores/AppContext';
import { ChevronRight, Home } from 'lucide-react';

const pageLabels = {
  dashboard: 'Dashboard',
  users: 'Users',
  products: 'Products',
  orders: 'Orders',
  profile: 'Profile',
  notifications: 'Notifications',
  components: 'Components',
  settings: 'Settings',
};

export function Breadcrumb() {
  const { currentPage, navigate } = useApp();
  const label = pageLabels[currentPage] || currentPage;

  return (
    <div className="flex items-center gap-2 text-sm">
      <button onClick={() => navigate('dashboard')} className="text-surface-400 hover:text-surface-600 transition-colors cursor-pointer">
        <Home className="w-4 h-4" />
      </button>
      <ChevronRight className="w-3.5 h-3.5 text-surface-300" />
      <span className="text-surface-700 font-medium">{label}</span>
    </div>
  );
}
