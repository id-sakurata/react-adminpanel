import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { notifications } from '@/data/mock';
import { cn } from '@/utils/cn';
import { Bell, CheckCircle, AlertCircle, AlertTriangle, Info, Check } from 'lucide-react';
import { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';

const iconMap: Record<string, any> = {
  info: Info,
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
};

const colorMap: Record<string, string> = {
  info: 'bg-info-100 text-info-600',
  success: 'bg-success-100 text-success-600',
  danger: 'bg-danger-100 text-danger-600',
  warning: 'bg-warning-100 text-warning-600',
};

export function NotificationsPage() {
  const [items, setItems] = useState(notifications);
  const [tab, setTab] = useState('all');

  const filtered = tab === 'all'
    ? items
    : tab === 'unread'
    ? items.filter(n => !n.read)
    : items.filter(n => n.read);

  const markAllRead = () => {
    setItems(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = items.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Breadcrumb />
          <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Notifications</h1>
          <p className="text-sm text-surface-500 mt-1">
            You have <span className="font-medium text-primary-600">{unreadCount}</span> unread notifications.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={markAllRead}>
          <Check className="w-4 h-4" /> Mark All Read
        </Button>
      </div>

      <Tabs
        tabs={[
          { key: 'all', label: 'All', count: items.length },
          { key: 'unread', label: 'Unread', count: unreadCount },
          { key: 'read', label: 'Read', count: items.length - unreadCount },
        ]}
        active={tab}
        onChange={setTab}
      />

      <div className="space-y-2">
        {filtered.length === 0 ? (
          <Card className="text-center py-12">
            <Bell className="w-10 h-10 text-surface-300 mx-auto mb-3" />
            <p className="font-medium text-surface-700">No notifications</p>
            <p className="text-sm text-surface-400 mt-1">You're all caught up!</p>
          </Card>
        ) : (
          filtered.map(n => {
            const Icon = iconMap[n.type] || Info;
            return (
              <Card
                key={n.id}
                hover
                padding="p-4"
                className={cn(!n.read && 'border-l-4 border-l-primary-500 bg-primary-50/30')}
                onClick={() => setItems(prev => prev.map(item => item.id === n.id ? { ...item, read: true } : item))}
              >
                <div className="flex items-start gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', colorMap[n.type])}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={cn('text-sm', !n.read ? 'font-semibold text-surface-900' : 'font-medium text-surface-700')}>
                        {n.title}
                      </p>
                      {!n.read && <span className="w-2 h-2 bg-primary-500 rounded-full shrink-0 mt-1.5" />}
                    </div>
                    <p className="text-sm text-surface-500 mt-0.5">{n.description}</p>
                    <p className="text-xs text-surface-400 mt-1.5">{n.time}</p>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
