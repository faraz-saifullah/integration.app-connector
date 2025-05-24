'use client';

import { useState, useEffect } from 'react';
import { useIntegrationApp } from '@integration-app/react';
import { Button } from '@/components/Common/Button';
import { ContactsTable } from './ContactsTable';
import { Loader2 } from 'lucide-react';
import { INTEGRATION_PROVIDERS, ERROR_MESSAGES, URL_FIELDS, ACTION_KEYS } from '@/constants';

interface Contact {
  id: string;
  name: string;
  email?: string;
  hubspotUrl?: string;
  pipedriveUrl?: string;
}

export default function ContactsTab() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch contacts from both HubSpot and Pipedrive in parallel
      const [hubspotContacts, pipedriveContacts] = await Promise.all([
        fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT),
        fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE),
      ]);

      // Merge and deduplicate contacts by email
      const mergedContacts = mergeContacts(hubspotContacts, pipedriveContacts);
      setContacts(mergedContacts);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(ERROR_MESSAGES.FETCH_CONTACTS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContactsFrom = async (provider: 'hubspot' | 'pipedrive'): Promise<Contact[]> => {
    try {
      const connection = integrationApp.connection(provider);
      if (!connection) {
        console.log(ERROR_MESSAGES.NO_CONNECTION + provider);
        return [];
      }
      
      console.log(`Fetching ${provider} contacts...`);
      const response = await connection.action(ACTION_KEYS.LIST_CONTACTS).run({}) as { output?: { records: any[] } };
      
      const contacts = response?.output?.records?.map((contact: any) => ({
        id: contact.id,
        name: contact.fields?.name || 'Unnamed Contact',
        email: contact.fields?.email,
        [URL_FIELDS[provider as keyof typeof URL_FIELDS]]: contact.uri,
      })) || [];
      
      return contacts;
    } catch (error) {
      console.error(ERROR_MESSAGES.FETCH_ERROR + provider, error);
      return [];
    }
  };

  const mergeContacts = (hubspotContacts: Contact[], pipedriveContacts: Contact[]): Contact[] => {
    const contactsMap = new Map<string, Contact>();

    // Add HubSpot contacts to the map
    hubspotContacts.forEach(contact => {
      if (contact.email) {
        contactsMap.set(contact.email, {
          ...contactsMap.get(contact.email),
          ...contact,
          hubspotUrl: contact.hubspotUrl,
        });
      }
    });

    // Add/merge Pipedrive contacts
    pipedriveContacts.forEach(contact => {
      if (contact.email) {
        contactsMap.set(contact.email, {
          ...(contactsMap.get(contact.email) || {}),
          ...contact,
          pipedriveUrl: contact.pipedriveUrl,
        });
      }
    });

    return Array.from(contactsMap.values());
  };

  const handleRefresh = () => {
    setError(null);
    setIsLoading(true);
    fetchContacts();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2">Loading contacts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 rounded-md">
        <p className="text-red-700">{error}</p>
        <button 
          onClick={handleRefresh}
          className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  console.log('Rendering ContactsTab with contacts:', contacts);
  console.log('Contacts length:', contacts.length);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Contacts</h2>
          <div className="flex space-x-2">
            <Button 
              onClick={handleRefresh}
              variant="outline"
              size="small"
              className="flex items-center"
              type="button"
              disabled={isLoading}
              ariaLabel="Refresh contacts"
              icon={
                <svg 
                  className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              }
              iconPosition="left"
            >
              Refresh
            </Button>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          View and manage your contacts across different CRMs
        </p>
      </div>
      
      {contacts.length > 0 ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ContactsTable contacts={contacts} />
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No contacts found.</p>
        </div>
      )}


    </div>
  );
}
