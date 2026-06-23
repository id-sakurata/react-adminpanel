import { DataTable, type Column } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { products } from '@/data/mock';
import { Plus, Download, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';

type Product = typeof products[0];

const columns: Column<Product>[] = [
  {
    key: 'name', label: 'Product', sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-surface-400">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div>
          <p className="font-medium text-surface-900">{row.name}</p>
          <p className="text-xs text-surface-400">{row.category}</p>
        </div>
      </div>
    )
  },
  {
    key: 'price', label: 'Price', sortable: true,
    render: (row) => <span className="font-medium">${row.price.toFixed(2)}</span>
  },
  { key: 'stock', label: 'Stock', sortable: true, hideOnMobile: true },
  {
    key: 'status', label: 'Status', sortable: true,
    render: (row) => {
      const v = row.status === 'In Stock' ? 'success' : row.status === 'Low Stock' ? 'warning' : 'danger';
      return <Badge variant={v} dot>{row.status}</Badge>;
    }
  },
];

const tabList = [
  { key: 'all', label: 'All', count: products.length },
  { key: 'in-stock', label: 'In Stock', count: products.filter(p => p.status === 'In Stock').length },
  { key: 'low', label: 'Low Stock', count: products.filter(p => p.status === 'Low Stock').length },
  { key: 'out', label: 'Out of Stock', count: products.filter(p => p.status === 'Out of Stock').length },
];

export function ProductsPage() {
  const [tab, setTab] = useState('all');

  const filtered = tab === 'all'
    ? products
    : tab === 'in-stock'
    ? products.filter(p => p.status === 'In Stock')
    : tab === 'low'
    ? products.filter(p => p.status === 'Low Stock')
    : products.filter(p => p.status === 'Out of Stock');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Breadcrumb />
          <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Products</h1>
          <p className="text-sm text-surface-500 mt-1">Manage your product catalog and inventory.</p>
        </div>
      </div>

      <Tabs tabs={tabList} active={tab} onChange={setTab} />

      {/* Card Grid View (Mobile Friendly) */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {filtered.map(p => (
          <Card key={p.id} hover padding="p-3">
            <div className="w-full aspect-square bg-surface-100 rounded-xl flex items-center justify-center text-surface-300 mb-3">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-surface-900 truncate">{p.name}</p>
            <p className="text-xs text-surface-400 mt-0.5">{p.category}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-surface-900">${p.price}</span>
              <Badge variant={p.status === 'In Stock' ? 'success' : p.status === 'Low Stock' ? 'warning' : 'danger'} className="text-[10px]">
                {p.status}
              </Badge>
            </div>
          </Card>
        ))}
      </div>

      {/* Table View (Tablet+) */}
      <div className="hidden sm:block">
        <DataTable
          columns={columns}
          data={filtered}
          searchPlaceholder="Search products..."
          actions={
            <>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" /> Export
              </Button>
              <Button variant="primary" size="sm">
                <Plus className="w-4 h-4" /> Add Product
              </Button>
            </>
          }
        />
      </div>
    </div>
  );
}
