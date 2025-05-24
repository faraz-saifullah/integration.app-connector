import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { CONTACTS_PAGE_SIZE, TABLE_COLUMNS } from '@/constants';

interface Contact {
  id: string;
  name: string;
  hubspotUrl?: string;
  pipedriveUrl?: string;
}

interface ContactsTableProps {
  contacts: Contact[];
}

export function ContactsTable({ contacts }: ContactsTableProps) {
  const [page, setPage] = useState(0);
  const [pageSize] = useState(CONTACTS_PAGE_SIZE);

  const columns = useMemo<ColumnDef<Contact>[]>(
    () => [
      {
        header: '#',
        accessorKey: TABLE_COLUMNS.ID,
        cell: ({ row }) => <span>{row.index + 1 + (page * pageSize)}</span>,
      },
      {
        header: 'Name',
        accessorKey: TABLE_COLUMNS.NAME,
        cell: ({ getValue }) => {
          const name = getValue() as string;
          return name || 'Unnamed Contact';
        },
      },
      {
        header: 'HubSpot URL',
        accessorKey: TABLE_COLUMNS.HUBSPOT_URL,
        cell: ({ getValue }) => {
          const url = getValue() as string;
          return url ? (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              View in HubSpot
            </a>
          ) : (
            <span className="text-gray-400">-</span>
          );
        },
      },
      {
        header: 'Pipedrive URL',
        accessorKey: TABLE_COLUMNS.PIPEDRIVE_URL,
        cell: ({ getValue }) => {
          const url = getValue() as string;
          return url ? (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              View in Pipedrive
            </a>
          ) : (
            <span className="text-gray-400">-</span>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex: page,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      const newState = typeof updater === 'function' ? updater({ pageIndex: page, pageSize }) : updater;
      setPage(newState.pageIndex);
    },
    pageCount: Math.ceil(contacts.length / pageSize),
  });

  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No contacts found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <span className="text-sm text-gray-700">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
              min="1"
              max={table.getPageCount()}
            />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 text-sm rounded disabled:opacity-50"
          >
            «
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 text-sm rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 text-sm rounded disabled:opacity-50"
          >
            Next
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 text-sm rounded disabled:opacity-50"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
