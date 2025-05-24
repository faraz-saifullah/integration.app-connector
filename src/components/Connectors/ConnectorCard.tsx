import { Button } from "@integration-app/react";
import Image from "next/image";
import { useIntegrationApp, useFieldMappingInstance } from "@integration-app/react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ConnectorCardProps {
  name: string;
  description: string;
  icon: string;
  isConnected: boolean;
  isLoading?: boolean;
  onConnect: () => void;
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
}: ConnectorCardProps) {
  const integrationApp = useIntegrationApp();
  const { fieldMappingInstance, loading: fieldMappingsLoading, error: fieldMappingError } = useFieldMappingInstance(
    connectionKey ? {
      connectionId: connectionKey,
      fieldMappingKey: 'contact-mapping',
      autoCreate: false
    } : undefined
  );

  
  const isConfigured = !!fieldMappingInstance?.id;
  const hasFieldMappingError = !!fieldMappingError;

  const handleConfigure = async () => {
    if (!connectionKey) return;

    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping('contact-mapping')
        .openConfiguration();
      
      // The useFieldMappings hook will automatically refetch after configuration
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
        .fieldMapping('contact-mapping')
        .openConfiguration();
      
      // The useFieldMappings hook will automatically refetch after reconfiguration
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
              {hasFieldMappingError ? (
                <div className="text-red-600 text-sm">
                  Error loading field mapping configuration
                </div>
              ) : fieldMappingsLoading ? (
                <div className="flex items-center justify-center py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              ) : !isConfigured ? (
                <Button 
                  onClick={handleConfigure} 
                  className="w-full"
                  variant="outline"
                  size="medium"
                  disabled={fieldMappingsLoading}
                >
                  Configure Contact Mapping
                </Button>
              ) : (
                <div className="w-full space-y-2">
                  <span className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md inline-block">
                    Contact Mapping Configured
                  </span>
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleResetConfiguration}
                    className="w-full text-sm text-gray-600 hover:text-gray-900"
                    disabled={fieldMappingsLoading}
                  >
                    Reconfigure
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <Button onClick={onConnect} variant="primary" size="medium">
          Connect
        </Button>
      )}
    </div>
  );
}
