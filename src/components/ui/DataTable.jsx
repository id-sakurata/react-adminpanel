import { cn } from '@/utils/cn';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown, Search, Inbox } from 'lucide-react';
import { useState, useMemo } from 'react';

export function DataTable({
  columns, data, pageSize = 10, searchable = true,
  searchPlaceholder = 'Search...', emptyTitle = 'No data found',
  emptyDescription = 'Try adjusting your search or filters.',
  onRowClick, actions
}) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortDir, setSortDir] = useState('asc');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = data;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(row =>
        Object.values(row).some(v => String(v).toLowerCase().includes(q))
      );
    }
    if (sortKey) {
      result = [...result].sort((a, b) => {
        const av = a[sortKey], bv = b[sortKey];
        const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return result;
  }, [data, search, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  return (
    <div>
      {(searchable || actions) && (
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          {searchable && (
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                placeholder={searchPlaceholder}
                className="w-full h-10 pl-9 pr-3 rounded-xl border border-surface-300 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white placeholder:text-surface-400"
              />
            </div>
          )}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}

      <div className="hidden md:block overflow-hidden rounded-xl border border-surface-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-100 bg-surface-50/50">
              {columns.map(col => (
                <th
                  key={col.key}
                  className={cn(
                    'text-left px-4 py-3 font-medium text-surface-500 text-xs uppercase tracking-wider',
                    col.sortable && 'cursor-pointer select-none hover:text-surface-700',
                    col.className
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {col.sortable && <ArrowUpDown className="w-3 h-3" />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-12">
                  <Inbox className="w-10 h-10 text-surface-300 mx-auto mb-3" />
                  <p className="font-medium text-surface-700">{emptyTitle}</p>
                  <p className="text-surface-400 text-sm mt-1">{emptyDescription}</p>
                </td>
              </tr>
            ) : (
              paged.map((row, i) => (
                <tr
                  key={i}
                  onClick={() => onRowClick?.(row)}
                  className={cn(
                    'border-b border-surface-100 last:border-0 transition-colors',
                    onRowClick && 'cursor-pointer hover:bg-surface-50'
                  )}
                >
                  {columns.map(col => (
                    <td key={col.key} className={cn('px-4 py-3 text-surface-700', col.className)}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {paged.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-surface-200">
            <Inbox className="w-10 h-10 text-surface-300 mx-auto mb-3" />
            <p className="font-medium text-surface-700">{emptyTitle}</p>
            <p className="text-surface-400 text-sm mt-1">{emptyDescription}</p>
          </div>
        ) : (
          paged.map((row, i) => (
            <div
              key={i}
              onClick={() => onRowClick?.(row)}
              className={cn(
                'bg-white rounded-xl border border-surface-200 p-4 space-y-2',
                onRowClick && 'cursor-pointer active:bg-surface-50'
              )}
            >
              {columns.filter(c => !c.hideOnMobile).map(col => (
                <div key={col.key} className="flex items-start justify-between gap-2">
                  <span className="text-xs font-medium text-surface-400 shrink-0">{col.label}</span>
                  <span className="text-sm text-surface-700 text-right">
                    {col.render ? col.render(row) : row[col.key]}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 text-sm">
          <p className="text-surface-400 hidden sm:block">
            Showing {((page - 1) * pageSize) + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length}
          </p>
          <div className="flex items-center gap-1 mx-auto sm:mx-0">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
              let p;
              if (totalPages <= 5) {
                p = idx + 1;
              } else if (page <= 3) {
                p = idx + 1;
              } else if (page >= totalPages - 2) {
                p = totalPages - 4 + idx;
              } else {
                p = page - 2 + idx;
              }
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    'w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors cursor-pointer',
                    page === p
                      ? 'bg-primary-600 text-white'
                      : 'text-surface-600 hover:bg-surface-100'
                  )}
                >
                  {p}
                </button>
              );
            })}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
