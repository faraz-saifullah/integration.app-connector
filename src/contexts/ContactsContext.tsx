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
import { isConnectionAvailable } from "@/utils/integration-utils";

const ContactsContext = createContext<ContactsContextType | undefined>(
  undefined
);

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { connections, loading: connectionsLoading } = useConnections();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const integrationApp = useIntegrationApp();

  const fetchContacts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      // Wait for connections to load before making any decisions
      if (connectionsLoading) {
        console.log("Connections still loading, waiting...");
        return;
      }

      // Only fetch from connectors that are actually connected
      const fetchPromises: Promise<Contact[]>[] = [];

      if (
        isConnectionAvailable(
          INTEGRATION_PROVIDERS.HUBSPOT,
          connections,
          connectionsLoading
        )
      ) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT));
      } else {
        console.log("HubSpot connection not available, skipping...");
        fetchPromises.push(Promise.resolve([]));
      }

      if (
        isConnectionAvailable(
          INTEGRATION_PROVIDERS.PIPEDRIVE,
          connections,
          connectionsLoading
        )
      ) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE));
      } else {
        console.log("Pipedrive connection not available, skipping...");
        fetchPromises.push(Promise.resolve([]));
      }

      const [hubspotContacts, pipedriveContacts] = await Promise.all(
        fetchPromises
      );

      const mergedContacts = mergeContacts(hubspotContacts, pipedriveContacts);
      setContacts(mergedContacts);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError(ERROR_MESSAGES.FETCH_CONTACTS);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshContacts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      // Wait for connections to load before making any decisions
      if (connectionsLoading) {
        console.log("Connections still loading, waiting...");
        return;
      }

      // Only fetch from connectors that are actually connected
      const fetchPromises: Promise<Contact[]>[] = [];

      if (
        isConnectionAvailable(
          INTEGRATION_PROVIDERS.HUBSPOT,
          connections,
          connectionsLoading
        )
      ) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.HUBSPOT));
      } else {
        fetchPromises.push(Promise.resolve([]));
      }

      if (
        isConnectionAvailable(
          INTEGRATION_PROVIDERS.PIPEDRIVE,
          connections,
          connectionsLoading
        )
      ) {
        fetchPromises.push(fetchContactsFrom(INTEGRATION_PROVIDERS.PIPEDRIVE));
      } else {
        fetchPromises.push(Promise.resolve([]));
      }

      const [hubspotContacts, pipedriveContacts] = await Promise.all(
        fetchPromises
      );
      const newContacts = mergeContacts(hubspotContacts, pipedriveContacts);

      // Only update contacts if they are different
      if (!areContactsEqual(contacts, newContacts)) {
        setContacts(newContacts);
      }
    } catch (err) {
      console.error("Error refreshing contacts:", err);
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
      fetchContacts();
    }
  }, [connectionsLoading]); // Depend on connectionsLoading so it runs when loading completes

  return (
    <ContactsContext.Provider
      value={{ contacts, isLoading, error, fetchContacts, refreshContacts }}
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
