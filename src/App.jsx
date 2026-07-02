import { AppProvider, useApp } from '@/stores/AppContext';
import { AppLayout } from '@/layouts/AppLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { UsersPage } from '@/pages/UsersPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { OrdersPage } from '@/pages/OrdersPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotificationsPage } from '@/pages/NotificationsPage';
import { ComponentsPage } from '@/pages/ComponentsPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { useEffect } from 'react';

const pages = {
  dashboard: DashboardPage,
  users: UsersPage,
  products: ProductsPage,
  orders: OrdersPage,
  profile: ProfilePage,
  notifications: NotificationsPage,
  components: ComponentsPage,
  settings: SettingsPage,
};

function PageRouter() {
  const { currentPage, setSearchOpen } = useApp();
  const Page = pages[currentPage] || DashboardPage;

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [setSearchOpen]);

  return (
    <AppLayout>
      <Page />
    </AppLayout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <PageRouter />
    </AppProvider>
  );
}
