'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Common/Button';
import { ContactsTable } from './ContactsTable';
import { Loader2, RefreshCw } from 'lucide-react';
import { useContacts } from '@/contexts/ContactsContext';


export default function ContactsTab() {
  const { contacts, isLoading, error, refreshContacts } = useContacts();

  useEffect(() => {
    // No need to fetch here since it's handled by the context
  }, []);



  return (
    <div className="space-y-4">
      {error ? (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          <p>{error}</p>
          <button
            onClick={refreshContacts}
            className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Contacts</h2>
            <Button
              variant="outline"
              size="small"
              onClick={refreshContacts}
              disabled={isLoading}
              icon={isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              ariaLabel="Refresh contacts"
            >
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ContactsTable contacts={contacts} isLoading={isLoading} />
          </div>
        </div>
      )}
    </div>
  );
}
