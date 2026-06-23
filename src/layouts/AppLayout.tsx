import { TopNav } from '@/components/app/TopNav';
import { BottomNav } from '@/components/app/BottomNav';
import { Sidebar } from '@/components/app/Sidebar';
import { SearchOverlay } from '@/components/app/SearchOverlay';
import type { ReactNode } from 'react';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-50">
      <TopNav />
      <div className="flex max-w-[1400px] mx-auto">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 sm:px-5 lg:px-6 py-5 lg:py-6 pb-28 lg:pb-6">
          {children}
        </main>
      </div>
      <BottomNav />
      <SearchOverlay />
    </div>
  );
}
