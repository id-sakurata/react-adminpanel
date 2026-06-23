import { DataTable, type Column } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/app/Breadcrumb';
import { users } from '@/data/mock';
import { Plus, Download } from 'lucide-react';

type User = typeof users[0];

const columns: Column<User>[] = [
  {
    key: 'name', label: 'User', sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.name} size="sm" />
        <div>
          <p className="font-medium text-surface-900">{row.name}</p>
          <p className="text-xs text-surface-400">{row.email}</p>
        </div>
      </div>
    )
  },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status', label: 'Status', sortable: true,
    render: (row) => (
      <Badge variant={row.status === 'Active' ? 'success' : 'secondary'} dot>
        {row.status}
      </Badge>
    )
  },
  { key: 'joined', label: 'Joined', sortable: true, hideOnMobile: true },
];

export function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Breadcrumb />
          <h1 className="text-xl sm:text-2xl font-bold text-surface-900 mt-2">Users</h1>
          <p className="text-sm text-surface-500 mt-1">Manage and monitor all registered users.</p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={users}
        searchPlaceholder="Search users..."
        actions={
          <>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4" /> Export
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="w-4 h-4" /> Add User
            </Button>
          </>
        }
      />
    </div>
  );
}
