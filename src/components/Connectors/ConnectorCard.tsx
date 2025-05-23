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
  // New props for pronouns configuration
  isHubspot?: boolean;
  onPronounsConfigured?: () => void;
}

export default function ConnectorCard({
  name,
  description,
  icon,
  isConnected,
  onConnect,
  isHubspot,
  onPronounsConfigured,
}: Readonly<ConnectorCardProps>): ReactNode {
  const integrationApp = useIntegrationApp();
  const [isUsingPronouns, setIsUsingPronouns] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    const checkConfiguration = async () => {
      if (!isHubspot) return;
      
      try {
        const instance = await integrationApp
          .connection('hubspot')
          .fieldMapping('pronouns')
          .get();
        console.log('Pronouns field mapping instance:', instance);
        setIsConfigured(!!instance);
      } catch (error) {
        setIsConfigured(false);
      }
    };
    checkConfiguration();
  }, [isHubspot, integrationApp]);

  const handlePronounsToggle = async () => {
    if (!isHubspot) return;

    if (!isUsingPronouns) {
      // User is enabling pronouns
      setIsUsingPronouns(true);
      setIsConfigured(false);
    } else {
      // User is disabling pronouns
      try {
        await integrationApp
          .connection('hubspot')
          .fieldMapping('pronouns')
          .archive();
        setIsUsingPronouns(false);
        setIsConfigured(false);
        if (onPronounsConfigured) {
          onPronounsConfigured();
        }
      } catch (error) {
        console.error('Error disabling pronouns field mapping:', error);
      }
    }
  };

  const handleConfigure = async () => {
    if (!isHubspot) return;

    try {
      await integrationApp
        .connection('hubspot')
        .fieldMapping('pronouns')
        .openConfiguration();
      setIsConfigured(true);
      if (onPronounsConfigured) {
        onPronounsConfigured();
      }
    } catch (error) {
      console.error('Error opening field mapping configuration:', error);
    }
  };

  const handleResetConfiguration = async () => {
    if (!isHubspot) return;

    try {
      // Open the configuration again to reset it
      await integrationApp
        .connection('hubspot')
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
          
          {isHubspot && (
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
