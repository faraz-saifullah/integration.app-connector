"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useConnections, useIntegrationApp } from "@integration-app/react";
import {
  INTEGRATION_PROVIDERS,
  ERROR_MESSAGES,
  ACTION_KEYS,
} from "@/constants";
import {
  Contact,
  ContactRecord,
  ContactsContextType,
  IntegrationProvider,
} from "@/types";
import {
  transformContactRecord,
  mergeContacts,
  areContactsEqual,
} from "@/utils/contact-utils";

const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined
);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { connections, loading: connectionsLoading } = useConnections();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();

  const loadContacts = async (shouldCheckForChanges = false) => {
    try {
      setError(null);
      setIsLoading(true);
      console.log("loadContacts called - starting fetch...", connections);

      // Always attempt to fetch from both providers
      const fetchPromises: Promise<Contact[]>[] = [
        fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT),
        fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE),
      ];

      const [hubspotContacts, pipedriveContacts] = await Promise.all(
        fetchPromises
      );

      const mergedContacts = mergeContacts(hubspotContacts, pipedriveContacts);

      // If shouldCheckForChanges is true, only update if contacts are different
      if (shouldCheckForChanges) {
        if (!areContactsEqual(contacts, mergedContacts)) {
          setContacts(mergedContacts);
        }
      } else {
        // Always update contacts
        setContacts(mergedContacts);
      }
    } catch (err) {
      console.error("Error loading contacts:", err);
      setError(ERROR_MESSAGES.FETCH_CONTACTS);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContactsFrom = async (
    provider: IntegrationProvider
  ): Promise<Contact[]> => {
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
        console.log(
          `Error getting connection for "${provider}":`,
          connectionError
        );
        return [];
      }

      console.log(`Fetching ${provider} contacts...`);
      const response = (await connection
        .action(ACTION_KEYS.LIST_CONTACTS)
        .run({})) as { output?: { records: ContactRecord[] } };

      const contacts =
        response?.output?.records?.map((contact: ContactRecord) =>
          transformContactRecord(contact, provider)
        ) || [];

      console.log(
        `Successfully fetched ${contacts.length} contacts from ${provider}`
      );
      return contacts;
    } catch (error) {
      console.error(ERROR_MESSAGES.FETCH_ERROR + provider, error);
      // If it's a connection error, don't treat it as a fatal error
      if (
        error instanceof Error &&
        (error.message.includes("not found") ||
          error.message.includes("Connection"))
      ) {
        console.log(`Provider "${provider}" not connected, skipping...`);
        return [];
      }
      return [];
    }
  };

  useEffect(() => {
    // Only fetch contacts when connections have finished loading
    if (!connectionsLoading) {
      loadContacts();
    }
  }, [connectionsLoading]);

  return (
    <ContactsContext.Provider
      value={{ contacts, isLoading, error, loadContacts }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
}
