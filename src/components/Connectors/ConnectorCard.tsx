import { Button } from "@integration-app/react";
import Image from "next/image";
import { useIntegrationApp } from "@integration-app/react";
import { useState, useEffect } from "react";
import { ReactNode } from "react";

interface ConnectorCardProps {
  name: string;
  description: string;
  icon: string;
  isConnected: boolean;
  isLoading?: boolean;
  onConnect: () => void;
  // New props for field mappings
  connectionKey?: string;
  onFieldMappingConfigured?: () => void;
}

export default function ConnectorCard({
  name,
  description,
  icon,
  isConnected,
  onConnect,
  connectionKey,
  onFieldMappingConfigured,
}: Readonly<ConnectorCardProps>): ReactNode {
  const integrationApp = useIntegrationApp();
  const [isUsingFieldMapping, setIsUsingFieldMapping] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    const checkConfiguration = async () => {
      if (!connectionKey) return;
      
      try {
        const instance = await integrationApp
          .connection(connectionKey)
          .fieldMapping('pronouns')
          .get();
        console.log(`${connectionKey} field mapping instance:`, instance);
        setIsConfigured(!!instance);
      } catch (error) {
        setIsConfigured(false);
      }
    };
    checkConfiguration();
  }, [connectionKey, integrationApp]);

  const handleFieldMappingToggle = async () => {
    if (!connectionKey) return;

    if (!isUsingFieldMapping) {
      // User is enabling field mapping
      setIsUsingFieldMapping(true);
      setIsConfigured(false);
    } else {
      // User is disabling field mapping
      try {
        await integrationApp
          .connection(connectionKey)
          .fieldMapping('pronouns')
          .archive();
        setIsUsingFieldMapping(false);
        setIsConfigured(false);
        if (onFieldMappingConfigured) {
          onFieldMappingConfigured();
        }
      } catch (error) {
        console.error('Error disabling field mapping:', error);
      }
    }
  };

  const handleConfigure = async () => {
    if (!connectionKey) return;

    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping('pronouns')
        .openConfiguration();
      setIsConfigured(true);
      if (onFieldMappingConfigured) {
        onFieldMappingConfigured();
      }
    } catch (error) {
      console.error('Error opening field mapping configuration:', error);
    }
  };

  const handleResetConfiguration = async () => {
    if (!connectionKey) return;

    try {
      // Open the configuration again to reset it
      await integrationApp
        .connection(connectionKey)
        .fieldMapping('pronouns')
        .openConfiguration();
    } catch (error) {
      console.error('Error opening field mapping configuration for reset:', error);
    }
  };

  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center bg-white">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <Image
          src={icon}
          alt={`${name} logo`}
          width={64}
          height={64}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      {isConnected ? (
        <div className="space-y-4">
          <span className="px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md">
            Connected
          </span>
          
          {connectionKey && (
            <div className="w-full">
              {!isConfigured && (
                <Button onClick={handleConfigure} className="mt-2">
                  Configure Pronouns Field
                </Button>
              )}

              {isConfigured && (
                <div className="mt-2">
                  <div className="text-green-600 mb-2">
                    Pronouns field mapping configured 
                  </div>
                  <Button
                    variant="secondary"
                    size="small"
                    onClick={handleResetConfiguration}
                    className="mt-2"
                  >
                    Reset Configuration
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <Button onClick={onConnect} variant="primary">
          Connect
        </Button>
      )}
    </div>
  );
}
