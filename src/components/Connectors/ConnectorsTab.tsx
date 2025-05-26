import { useEffect, useState } from "react";
import ConnectorCard from "./ConnectorCard";
import { useIntegrationApp, useConnections } from "@integration-app/react";
import { useContacts } from "@/contexts/ContactsContext";
import { Loader2 } from "lucide-react";

interface Connector {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const CONNECTORS: Connector[] = [
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Connect your Pipedrive account to sync your CRM data.",
    icon: "/images/connectors/pipedrive.png",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "Connect your HubSpot account to sync your marketing and sales data.",
    icon: "/images/connectors/hubspot.png",
  },
];

export default function ConnectorsTab() {
  const integrationApp = useIntegrationApp();
  const { connections, loading: connectionsLoading } = useConnections();
  const { loadContacts } = useContacts();
  const [connectedConnectors, setConnectedConnectors] = useState<string[]>([]);

  // Update connected connectors when connections change
  useEffect(() => {
    if (connections) {
      const connectedIds = connections
        .map((conn) => conn.integration?.key)
        .filter(Boolean) as string[];
      setConnectedConnectors(connectedIds);
    }
  }, [connectionsLoading]); // Use connectionsLoading to avoid infinite loops with connections array

  const handleConnect = async (connectorId: string) => {
    try {
      // Open the connection UI for the selected connector
      const connection = await integrationApp
        .integration(connectorId)
        .openNewConnection();

      // if connection was successful and we get connectorId then update state variable
      if (connection?.id) {
        setConnectedConnectors((prev) => [...prev, connectorId]);
        console.log("Connection created:", connection);

        // Automatically refresh contacts when a new connection is established
        console.log("Refreshing contacts after successful connection...");
        loadContacts(true);
      }
    } catch (error) {
      const err = error as Error;
      console.error("Failed to open connection dialog:", err.message || err);
      // Handle any errors that occur when trying to open the connection dialog
    }
  };

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      <div className="space-y-6 px-6">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Available Connectors
          </h2>
          <p className="mt-1 text-gray-600">
            Connect your CRM systems to sync and manage your data
          </p>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>
              • <strong>Connect:</strong> Click &quot;Connect&quot; to
              authenticate with your CRM account
            </p>
            <p>
              • <strong>Configure:</strong> Set up field mappings for custom
              fields like pronouns after connecting
            </p>
            <p>
              • <strong>Manage:</strong> View and create contacts in the
              Contacts tab once connected
            </p>
          </div>
        </div>

        {/* Connectors Grid */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            {connectionsLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-600">
                  Loading connectors...
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CONNECTORS.map((connector) => (
                  <ConnectorCard
                    key={connector.id}
                    name={connector.name}
                    description={connector.description}
                    icon={connector.icon}
                    isConnected={connectedConnectors.includes(connector.id)}
                    onConnect={() => handleConnect(connector.id)}
                    connectionKey={connector.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
