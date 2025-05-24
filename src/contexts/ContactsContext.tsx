'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useIntegrationApp } from '@integration-app/react';
import { INTEGRATION_PROVIDERS, ERROR_MESSAGES, ACTION_KEYS } from '@/constants';

interface ContactsContextType {
  contacts: Contact[];
  isLoading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
  refreshContacts: () => Promise<void>;
}

interface Contact {
  id: string;
  name: string;
  email?: string;
  hubspotUrl?: string;
  pipedriveUrl?: string;
  updatedAt: string; // ISO string format
}

interface ContactRecord {
  id: string;
  fields?: {
    name?: string;
    email?: string;
  };
  uri?: string;
  updatedTime?: string;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();

  // Helper function to safely check if a connection is available
  const isConnectionAvailable = (provider: 'hubspot' | 'pipedrive'): boolean => {
    try {
      const connection = integrationApp.connection(provider);
      return !!connection;
    } catch (error) {
      console.log(`Connection "${provider}" not available:`, error);
      return false;
    }
  };

  const fetchContacts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      // Only fetch from connectors that are actually connected
      const fetchPromises: Promise<Contact[]>[] = [];

      if (isConnectionAvailable(INTEGRATION_PROVIDERS.HUBSPOT)) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT));
      } else {
        console.log('HubSpot connection not available, skipping...');
        fetchPromises.push(Promise.resolve([]));
      }

      if (isConnectionAvailable(INTEGRATION_PROVIDERS.PIPEDRIVE)) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE));
      } else {
        console.log('Pipedrive connection not available, skipping...');
        fetchPromises.push(Promise.resolve([]));
      }

      const [hubspotContacts, pipedriveContacts] = await Promise.all(fetchPromises);

      const mergedContacts = mergeContacts(hubspotContacts, pipedriveContacts);
      setContacts(mergedContacts);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(ERROR_MESSAGES.FETCH_CONTACTS);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshContacts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      // Only fetch from connectors that are actually connected
      const fetchPromises: Promise<Contact[]>[] = [];

      if (isConnectionAvailable(INTEGRATION_PROVIDERS.HUBSPOT)) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT));
      } else {
        fetchPromises.push(Promise.resolve([]));
      }

      if (isConnectionAvailable(INTEGRATION_PROVIDERS.PIPEDRIVE)) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE));
      } else {
        fetchPromises.push(Promise.resolve([]));
      }

      const [hubspotContacts, pipedriveContacts] = await Promise.all(fetchPromises);
      const newContacts = mergeContacts(hubspotContacts, pipedriveContacts);
      
      // Only update contacts if they are different
      if (!areContactsEqual(contacts, newContacts)) {
        setContacts(newContacts);
      }
    } catch (err) {
      console.error('Error refreshing contacts:', err);
      setError(ERROR_MESSAGES.FETCH_CONTACTS);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContactsFrom = async (provider: 'hubspot' | 'pipedrive'): Promise<Contact[]> => {
    try {
      // Safely get connection with error handling
      let connection;
      try {
        connection = integrationApp.connection(provider);
        if (!connection) {
          console.log(`Connection "${provider}" not found`);
          return [];
        }
      } catch (connectionError) {
        console.log(`Error getting connection for "${provider}":`, connectionError);
        return [];
      }

      console.log(`Fetching ${provider} contacts...`);
      const response = await connection.action(ACTION_KEYS.LIST_CONTACTS).run({}) as { output?: { records: ContactRecord[] } };

      const contacts = response?.output?.records?.map((contact: ContactRecord) => ({
        id: contact.id,
        name: contact.fields?.name || 'Unnamed Contact',
        email: contact.fields?.email,
        [`${provider}Url`]: contact.uri,
        updatedAt: contact.updatedTime || '',
      })) || [];

      console.log(`Successfully fetched ${contacts.length} contacts from ${provider}`);
      return contacts;
    } catch (error) {
      console.error(ERROR_MESSAGES.FETCH_ERROR + provider, error);
      // If it's a connection error, don't treat it as a fatal error
      if (error instanceof Error && (error.message.includes('not found') || error.message.includes('Connection'))) {
        console.log(`Provider "${provider}" not connected, skipping...`);
        return [];
      }
      return [];
    }
  };

  const areContactsEqual = (contacts1: Contact[], contacts2: Contact[]): boolean => {
    if (contacts1.length !== contacts2.length) return false;
    
    return contacts1.every((contact1, index) => {
      const contact2 = contacts2[index];
      return contact1.id === contact2.id &&
             contact1.name === contact2.name &&
             contact1.email === contact2.email;
    });
  };

  const mergeContacts = (contacts1: Contact[], contacts2: Contact[]): Contact[] => {
    const mergedContacts = [...contacts1];
    
    contacts2.forEach(contact2 => {
      const existingContact = mergedContacts.find(c => c.email === contact2.email);
      if (existingContact) {
        // Update URLs if they exist in both
        if (contact2.hubspotUrl) existingContact.hubspotUrl = contact2.hubspotUrl;
        if (contact2.pipedriveUrl) existingContact.pipedriveUrl = contact2.pipedriveUrl;
      } else {
        mergedContacts.push(contact2);
      }
    });

    return mergedContacts;
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, isLoading, error, fetchContacts, refreshContacts }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
}
