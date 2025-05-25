import { Connection, IntegrationProvider } from '@/types';
import { INTEGRATION_PROVIDERS } from '@/constants';

/**
 * Checks if a specific integration provider is connected
 */
export function isConnectionAvailable(
  provider: IntegrationProvider,
  connections: Connection[],
  connectionsLoading: boolean
): boolean {
  if (connectionsLoading) return false;
  if (!connections) return false;
  return connections.some((conn) => conn.integration?.key === provider);
}

/**
 * Gets all available (connected) CRM providers
 */
export function getAvailableCRMs(
  connections: Connection[],
  crmOptions: Record<string, { id: string; name: string; icon: string }>
): Array<{ id: string; name: string; icon: string }> {
  return Object.values(crmOptions).filter((crm) =>
    connections.some((connection) => connection.integration?.key === crm.id)
  );
}

/**
 * Transforms contact form data into the format expected by the integration API
 */
export function transformFormDataToPayload(formData: {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  pronouns: string;
}) {
  return {
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    company: formData.companyName,
    pronouns: formData.pronouns,
  };
}

/**
 * Handles errors from integration API calls
 */
export function handleIntegrationError(error: unknown, provider: string): string {
  console.error(`Error with ${provider} integration:`, error);
  
  if (error instanceof Error) {
    if (error.message.includes("not found") || error.message.includes("Connection")) {
      return `${provider} connection not available`;
    }
    return error.message;
  }
  
  return `Unknown error occurred with ${provider}`;
}

/**
 * Gets the list of connected providers
 */
export function getConnectedProviders(connections: Connection[]): IntegrationProvider[] {
  const connectedProviders: IntegrationProvider[] = [];
  
  if (isConnectionAvailable(INTEGRATION_PROVIDERS.HUBSPOT, connections, false)) {
    connectedProviders.push(INTEGRATION_PROVIDERS.HUBSPOT);
  }
  
  if (isConnectionAvailable(INTEGRATION_PROVIDERS.PIPEDRIVE, connections, false)) {
    connectedProviders.push(INTEGRATION_PROVIDERS.PIPEDRIVE);
  }
  
  return connectedProviders;
} 