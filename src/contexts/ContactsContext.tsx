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

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();

  const fetchContacts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const [hubspotContacts, pipedriveContacts] = await Promise.all([
        fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT),
        fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE),
      ]);

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

      const [hubspotContacts, pipedriveContacts] = await Promise.all([
        fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT),
        fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE),
      ]);

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
        [`${provider}Url`]: contact.uri,
        updatedAt: contact.updatedTime || null,
      })) || [];

      return contacts;
    } catch (error) {
      console.error(ERROR_MESSAGES.FETCH_ERROR + provider, error);
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
