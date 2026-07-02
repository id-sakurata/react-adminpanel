import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { orders } from '@/data/mock';
import { Download, Filter } from 'lucide-react';
import { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

const statusVariant = {
  Completed: 'success',
  Processing: 'warning',
  Shipped: 'info',
  Cancelled: 'danger',
};

const columns = [
  { key: 'id', label: 'Order ID', sortable: true, render: (r) => <span className="font-medium text-primary-600">{r.id}</span> },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'items', label: 'Items', sortable: true, hideOnMobile: true },
  { key: 'total', label: 'Total', sortable: true, render: (r) => <span className="font-medium">${r.total.toFixed(2)}</span> },
  {
    key: 'status', label: 'Status', sortable: true,
    render: (r) => <Badge variant={statusVariant[r.status]} dot>{r.status}</Badge>
  },
  { key: 'date', label: 'Date', sortable: true, hideOnMobile: true },
];

const tabList = [
  { key: 'all', label: 'All', count: orders.length },
  { key: 'completed', label: 'Completed', count: orders.filter(o => o.status === 'Completed').length },
  { key: 'processing', label: 'Processing', count: orders.filter(o => o.status === 'Processing').length },
  { key: 'shipped', label: 'Shipped', count: orders.filter(o => o.status === 'Shipped').length },
];

export function OrdersPage() {
  const [tab, setTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = tab === 'all' ? orders : orders.filter(o => o.status.toLowerCase() === tab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Breadcrumb />
          <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Orders</h1>
          <p className="text-sm text-surface-500 mt-1">Track and manage customer orders.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Filter className="w-4 h-4" /> Filter</Button>
          <Button variant="outline" size="sm"><Download className="w-4 h-4" /> Export</Button>
        </div>
      </div>

      <Tabs tabs={tabList} active={tab} onChange={setTab} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className={cn(selectedOrder ? 'lg:col-span-2' : 'lg:col-span-3')}>
          <DataTable
            columns={columns}
            data={filtered}
            searchPlaceholder="Search orders..."
            onRowClick={setSelectedOrder}
          />
        </div>

        {selectedOrder && (
          <Card className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-surface-900">Order Detail</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-sm text-surface-400 hover:text-surface-600 cursor-pointer">
                Close
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-surface-400">Order ID</p>
                <p className="text-sm font-medium text-primary-600">{selectedOrder.id}</p>
              </div>
              <div>
                <p className="text-xs text-surface-400">Customer</p>
                <p className="text-sm font-medium text-surface-900">{selectedOrder.customer}</p>
              </div>
              <div>
                <p className="text-xs text-surface-400">Items</p>
                <p className="text-sm font-medium text-surface-900">{selectedOrder.items} items</p>
              </div>
              <div>
                <p className="text-xs text-surface-400">Total</p>
                <p className="text-lg font-bold text-surface-900">${selectedOrder.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-surface-400">Status</p>
                <Badge variant={statusVariant[selectedOrder.status]} dot className="mt-1">
                  {selectedOrder.status}
                </Badge>
              </div>
              <div>
                <p className="text-xs text-surface-400">Date</p>
                <p className="text-sm text-surface-700">{selectedOrder.date}</p>
              </div>
              <div className="pt-3 border-t border-surface-100 space-y-2">
                <Button variant="primary" size="sm" className="w-full">Update Status</Button>
                <Button variant="outline" size="sm" className="w-full">Print Invoice</Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
