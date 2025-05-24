'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/Common/Button';
import { ContactsTable } from './ContactsTable';
import { Loader2, RefreshCw, Plus } from 'lucide-react';
import { useContacts } from '@/contexts/ContactsContext';
import CreateContactForm from './CreateContactForm';


export default function ContactsTab() {
  const { contacts, isLoading, error, refreshContacts } = useContacts();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    // No need to fetch here since it's handled by the context
  }, []);



  return (
    <div className="space-y-6 p-6">
      {error ? (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <p>{error}</p>
          <button
            onClick={refreshContacts}
            className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Contacts</h2>
            <div className="flex items-center gap-4">
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
              <Button
                variant="primary"
                size="small"
                icon={<Plus className="h-4 w-4" />}
                ariaLabel="Create new contact"
                onClick={() => setIsCreateModalOpen(true)}
              >
                Create Contact
              </Button>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg p-6">
            <ContactsTable contacts={contacts} isLoading={isLoading} />
          </div>
        </div>
      )}
      <CreateContactForm
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={() => {
          setIsCreateModalOpen(false);
          refreshContacts();
        }}
      />
    </div>
  );
}
