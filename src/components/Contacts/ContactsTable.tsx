import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  flexRender,
} from "@tanstack/react-table";
import { CONTACTS_PAGE_SIZE, TABLE_COLUMNS } from "@/constants";
import { Loader2 } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  hubspotUrl?: string;
  pipedriveUrl?: string;
  updatedAt: string; // ISO string format
}

interface ContactsTableProps {
  contacts: Contact[];
  isLoading?: boolean;
}

export function ContactsTable({
  contacts,
  isLoading = false,
}: ContactsTableProps) {
  const [page, setPage] = useState(0);
  const [pageSize] = useState(CONTACTS_PAGE_SIZE);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: TABLE_COLUMNS.UPDATED_AT,
      desc: true,
    },
  ]);
  const [filter, setFilter] = useState("");

  const columns = useMemo<ColumnDef<Contact>[]>(
    () => [
      {
        id: TABLE_COLUMNS.ID,
        header: () => "#",
        accessorFn: (row) => row.id,
        cell: ({ row }) => <span>{row.index + 1 + page * pageSize}</span>,
      },
      {
        id: TABLE_COLUMNS.NAME,
        header: () => "Name",
        accessorFn: (row) => row.name,
        cell: ({ row }) => {
          const name = row.original.name;
          return name || "Unnamed Contact";
        },
        enableSorting: true,
        sortingFn: (rowA, rowB) => {
          return rowA.original.name.localeCompare(rowB.original.name);
        },
        filterFn: "includesString",
      },
      {
        id: TABLE_COLUMNS.HUBSPOT_URL,
        header: () => "HubSpot URL",
        accessorFn: (row) => row.hubspotUrl,
        cell: ({ row }) => {
          const url = row.original.hubspotUrl;
          return url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open in HubSpot
            </a>
          ) : null;
        },
        enableSorting: false,
      },
      {
        id: TABLE_COLUMNS.PIPEDRIVE_URL,
        header: () => "Pipedrive URL",
        accessorFn: (row) => row.pipedriveUrl,
        cell: ({ row }) => {
          const url = row.original.pipedriveUrl;
          return url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open in Pipedrive
            </a>
          ) : null;
        },
        enableSorting: false,
      },
      {
        id: TABLE_COLUMNS.UPDATED_AT,
        header: () => "Updated At",
        accessorFn: (row) => row.updatedAt,
        cell: ({ row }) => {
          const date = new Date(row.original.updatedAt);
          return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Asia/Karachi",
          });
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
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: Math.ceil(contacts.length / pageSize),
    state: {
      pagination: {
        pageIndex: page,
        pageSize,
      },
      sorting,
      globalFilter: filter,
    },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex: page, pageSize })
          : updater;
      setPage(newState.pageIndex);
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search contacts..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    header.column.getCanSort()
                      ? "cursor-pointer hover:bg-gray-50"
                      : ""
                  }`}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() && (
                      <span className="text-sm">
                        {header.column.getIsSorted() === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-8">
                <div className="flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                </div>
              </td>
            </tr>
          ) : (
              rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="py-3 px-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-700">
            Showing {isLoading ? 0 : page * pageSize + 1} to{" "}
            {isLoading ? 0 : Math.min((page + 1) * pageSize, contacts.length)}{" "}
            of {contacts.length} results
          </div>
          <div className="flex items-center">
            <button
              onClick={() =>
                table.setPageIndex(table.getState().pagination.pageIndex - 1)
              }
              disabled={!table.getCanPreviousPage() || isLoading}
              className="px-4 py-2 border border-gray-300 rounded-md mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() =>
                table.setPageIndex(table.getState().pagination.pageIndex + 1)
              }
              disabled={!table.getCanNextPage() || isLoading}
              className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
