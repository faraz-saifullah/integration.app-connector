import { useIntegrationApp, useFieldMappingInstance, Button } from "@integration-app/react";
import { Loader2 } from "lucide-react";
import { FIELD_MAPPING_KEYS } from '@/constants';

interface FieldMappingStatusProps {
  connectionKey: string;
  onFieldMappingConfigured?: () => void;
}

export default function FieldMappingStatus({ connectionKey, onFieldMappingConfigured }: Readonly<FieldMappingStatusProps>) {
  const integrationApp = useIntegrationApp();
  const { fieldMappingInstance, loading: fieldMappingsLoading, error: fieldMappingError } = useFieldMappingInstance({
    connectionId: connectionKey,
    fieldMappingKey: FIELD_MAPPING_KEYS.CONTACT,
    autoCreate: false
  });

  const isConfigured = !!fieldMappingInstance?.id;
  const hasFieldMappingError = !!fieldMappingError;

  const handleConfigure = async () => {
    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping(FIELD_MAPPING_KEYS.CONTACT)
        .openConfiguration();

      if (onFieldMappingConfigured) {
        onFieldMappingConfigured();
      }
    } catch (error) {
      console.error('Error opening field mapping configuration:', error);
    }
  };

  const handleResetConfiguration = async () => {
    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping(FIELD_MAPPING_KEYS.CONTACT)
        .openConfiguration();
    } catch (error) {
      console.error('Error opening field mapping configuration for reset:', error);
    }
  };

  if (hasFieldMappingError) {
    return (
      <div className="text-red-600 text-sm">
        Error loading field mapping configuration
      </div>
    );
  }

  if (fieldMappingsLoading) {
    return (
      <div className="flex items-center justify-center py-2">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <Button
        onClick={handleConfigure}
        className="w-full"
        variant="outline"
        size="medium"
        disabled={fieldMappingsLoading}
      >
        Configure Contact Mapping
      </Button>
    );
  }

  return (
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
  );
} 