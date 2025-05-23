import { useEffect, useState } from "react";
import ConnectorCard from "./ConnectorCard";
import { useIntegrationApp, useConnections } from "@integration-app/react";

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
  // TODO: Add logic for handling paginated connectors list
  const { connections, loading: connectionsLoading } = useConnections();
  const [connectedConnectors, setConnectedConnectors] = useState<string[]>([]);

  // Update connected connectors when connections change
  useEffect(() => {
    if (connections) {
      const connectedIds = connections
        .map((conn) => conn.integration?.key)
        .filter(Boolean) as string[];
      setConnectedConnectors(connectedIds);
    }
  }, [connectionsLoading]);

  const handleConnect = async (connectorId: string) => {
    try {
      // Open the connection UI for the selected connector
      const connection = await integrationApp
        .integration(connectorId)
        .openNewConnection();
      // if connection was successful and we get connectorId then update state variable
      if (connection.id) {
        setConnectedConnectors((prev) => [...prev, connectorId]);
      }

      console.log("Connection created:", connection);
    } catch (error) {
      const err = error as Error;
      console.error("Failed to open connection dialog:", err.message || err);
      // Handle any errors that occur when trying to open the connection dialog
    }
  };

  const handlePronounsConfigured = () => {
    // You might want to trigger a re-fetch of the connections or update any related state
    // This callback will be called whenever the pronouns field mapping is configured
    console.log("Pronouns field mapping configured");
  };

  return (
    <>
      {connectionsLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="text-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONNECTORS.map((connector) => (
              <ConnectorCard
                key={connector.id}
                name={connector.name}
                description={connector.description}
                icon={connector.icon}
                isConnected={connectedConnectors.includes(connector.id)}
                onConnect={() => handleConnect(connector.id)}
                isHubspot={connector.id === "hubspot"}
                onPronounsConfigured={connector.id === "hubspot" ? handlePronounsConfigured : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
