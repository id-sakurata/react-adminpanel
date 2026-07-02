import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useCallback((page) => {
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
