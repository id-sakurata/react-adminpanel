import {
  Users, ShoppingBag, DollarSign, Package, TrendingUp, ArrowRight,
  Activity, Eye, Zap, HardDrive, BarChart3
} from 'lucide-react';
import { CounterGradient } from '@/components/cards/CounterGradient';
import { CounterTrend } from '@/components/cards/CounterTrend';
import { CounterProgress } from '@/components/cards/CounterProgress';
import { CounterChart } from '@/components/cards/CounterChart';
import { CounterMini } from '@/components/cards/CounterMini';
import { CounterGlass } from '@/components/cards/CounterGlass';
import { CounterColored } from '@/components/cards/CounterColored';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { useApp } from '@/stores/AppContext';
import { activities, chartData } from '@/data/mock';
import { Breadcrumb } from '@/components/app/Breadcrumb';

export function DashboardPage() {
  const { navigate } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Breadcrumb />
          <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Good morning, John! 👋</h1>
          <p className="text-sm text-surface-500 mt-1">Here's what's happening with your projects today.</p>
        </div>
        <Button variant="primary" size="sm" onClick={() => navigate('orders')}>
          <Package className="w-4 h-4" /> View Orders
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <CounterGradient label="Total Revenue" value="$24,500" icon={<DollarSign className="w-5 h-5" />} gradient="primary" />
        <CounterGradient label="Total Users" value="1,245" icon={<Users className="w-5 h-5" />} gradient="success" />
        <CounterGradient label="Total Orders" value="856" icon={<ShoppingBag className="w-5 h-5" />} gradient="info" />
        <CounterGradient label="Products" value="142" icon={<Package className="w-5 h-5" />} gradient="purple" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <CounterTrend label="Revenue" value="$8,245" trend={12.5} icon={<DollarSign className="w-5 h-5" />} />
        <CounterTrend label="New Users" value="384" trend={8.2} icon={<Users className="w-5 h-5" />} />
        <CounterTrend label="Orders" value="250" trend={-4.1} icon={<ShoppingBag className="w-5 h-5" />} />
        <CounterTrend label="Conversion" value="3.2%" trend={1.8} icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <CounterChart label="Revenue Trend" value="$24,500" data={chartData.revenue} color="#3b82f6" />
        <CounterChart label="User Growth" value="1,245" data={chartData.users} color="#22c55e" />
        <CounterChart label="Orders Trend" value="856" data={chartData.orders} color="#06b6d4" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <CounterColored label="Active Users" value="892" icon={<Users className="w-5 h-5" />} color="primary" />
        <CounterColored label="Completed" value="156" icon={<Activity className="w-5 h-5" />} color="success" />
        <CounterProgress label="Storage" value={75} color="warning" icon={<HardDrive className="w-4 h-4" />} />
        <CounterProgress label="Bandwidth" value={42} color="info" icon={<Zap className="w-4 h-4" />} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <CounterGlass label="Page Views" value="12.4K" icon={<Eye className="w-5 h-5" />} />
        <CounterMini label="Sessions" value="3,842" icon={<Activity className="w-4 h-4" />} iconColor="text-success-500" />
        <CounterMini label="Bounce Rate" value="24.5%" icon={<BarChart3 className="w-4 h-4" />} iconColor="text-warning-500" />
        <CounterGlass label="Avg. Duration" value="4m 32s" icon={<Zap className="w-5 h-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-surface-900">Recent Activity</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            {activities.map(act => (
              <div key={act.id} className="flex items-start gap-3">
                <Avatar name={act.user} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-surface-700">
                    <span className="font-medium">{act.user}</span>{' '}
                    {act.action}{' '}
                    {act.target && <span className="font-medium text-primary-600">{act.target}</span>}
                  </p>
                  <p className="text-xs text-surface-400 mt-0.5">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-surface-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {[
              { label: 'View Users', icon: Users, page: 'users', color: 'bg-primary-100 text-primary-600' },
              { label: 'View Products', icon: ShoppingBag, page: 'products', color: 'bg-success-100 text-success-600' },
              { label: 'View Orders', icon: Package, page: 'orders', color: 'bg-info-100 text-info-600' },
              { label: 'Components', icon: Zap, page: 'components', color: 'bg-warning-100 text-warning-600' },
            ].map(item => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-50 transition-colors cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="flex-1 text-left text-sm font-medium text-surface-700">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-surface-300 group-hover:text-surface-500 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-surface-100">
            <h3 className="font-semibold text-surface-900 mb-3 text-sm">Recent Orders</h3>
            <div className="space-y-2.5">
              {[
                { id: '#ORD-012', amount: '$274.97', status: 'Completed' },
                { id: '#ORD-011', amount: '$89.99', status: 'Shipped' },
                { id: '#ORD-010', amount: '$159.98', status: 'Completed' },
              ].map(order => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-surface-700">{order.id}</p>
                    <p className="text-xs text-surface-400">{order.amount}</p>
                  </div>
                  <Badge variant={order.status === 'Completed' ? 'success' : 'info'}>
                    {order.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
