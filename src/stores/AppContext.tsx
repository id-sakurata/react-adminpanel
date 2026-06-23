import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AppState {
  currentPage: string;
  sidebarOpen: boolean;
  searchOpen: boolean;
  notificationsOpen: boolean;
  profileOpen: boolean;
  navigate: (page: string) => void;
  setSidebarOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  setNotificationsOpen: (v: boolean) => void;
  setProfileOpen: (v: boolean) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppContext.Provider value={{
      currentPage, sidebarOpen, searchOpen, notificationsOpen, profileOpen,
      navigate, setSidebarOpen, setSearchOpen, setNotificationsOpen, setProfileOpen,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
