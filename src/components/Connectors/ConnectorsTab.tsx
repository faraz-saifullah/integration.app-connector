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
      <div className="space-y-4 px-6">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Available Connectors
          </h2>
          <p className="mt-1 text-gray-600">
            Connect your CRM systems to sync and manage your data
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Connectors Section - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Your Connectors</h3>
                {connectionsLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                    <span className="ml-2 text-gray-600">Loading connectors...</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Help Section - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 h-[35em] overflow-y-auto">
              <h4 className="text-base font-semibold text-blue-800 mb-3">Quick Guide</h4>

              {/* Quick Steps */}
              <div className="mb-4">
                <div className="text-xs text-blue-700 space-y-1">
                  <p>1. Click <strong>&quot;Connect&quot;</strong> to authenticate</p>
                  <p>2. Click <strong>&quot;Configure&quot;</strong> for field mapping</p>
                  <p>3. Create contacts in the Contacts tab</p>
                </div>
              </div>

              {/* Custom Field Configuration - Always Visible */}
              <div className="border-t border-blue-200 pt-4">
                <h5 className="text-sm font-medium text-blue-800 mb-3">⚙️ Custom Field Setup</h5>

                <div className="space-y-3">
                  {/* How To */}
                  <div className="bg-white rounded p-3">
                    <h6 className="text-xs font-semibold text-gray-800 mb-2">📋 How to Configure Custom Fields</h6>
                    <div className="text-xs text-gray-700 space-y-2">
                      <p><strong>1. Access Configuration:</strong> Click the &quot;Configure&quot; button on any connected CRM</p>
                      <p><strong>2. Choose Mapping Type:</strong> You&apos;ll see two tabs in the popup:</p>
                      <div className="ml-3 space-y-1">
                        <p>• <strong>Export Field Mappings:</strong> For sending data TO your CRM (e.g., creating contacts)</p>
                        <p>• <strong>Import Field Mappings:</strong> For receiving data FROM your CRM (e.g., fetching contacts)</p>
                      </div>
                      <p><strong>3. Configure Export Fields:</strong> Click &quot;Add Field&quot;, search for your CRM&apos;s custom field name (e.g., &quot;Custom_Pronouns&quot;), and map it to &quot;Pronouns&quot;</p>
                      <p><strong>4. Configure Import Fields:</strong> The &quot;Pronouns&quot; field will already be listed - just map it to your CRM&apos;s custom field name</p>
                    </div>
                  </div>

                  {/* Why */}
                  <div className="bg-amber-50 border border-amber-200 rounded p-3">
                    <h6 className="text-xs font-semibold text-amber-800 mb-2">🤔 Why Manual Configuration is Required</h6>
                    <div className="text-xs text-amber-700 space-y-2">
                      <p>Every CRM system uses different names for custom fields. For example:</p>
                      <div className="ml-3 space-y-1">
                        <p>• HubSpot might use &quot;pronouns_field&quot; or &quot;preferred_pronouns&quot;</p>
                        <p>• Pipedrive might use &quot;Custom: Pronouns&quot; or &quot;person_pronouns&quot;</p>
                      </div>
                      <p>Since we can&apos;t predict your specific field names, manual mapping ensures accurate data synchronization between our app and your CRM systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
