import {
  useIntegrationApp,
  useFieldMappingInstance,
  Button,
} from "@integration-app/react";
import { Loader2 } from "lucide-react";
import { FIELD_MAPPING_KEYS } from "@/constants";

interface FieldMappingStatusProps {
  connectionKey: string;
}

export default function FieldMappingStatus({
  connectionKey,
}: Readonly<FieldMappingStatusProps>) {
  const integrationApp = useIntegrationApp();
  const {
    fieldMappingInstance,
    loading: fieldMappingsLoading,
    error: fieldMappingError,
  } = useFieldMappingInstance({
    connectionId: connectionKey,
    fieldMappingKey: FIELD_MAPPING_KEYS.CONTACT,
    autoCreate: false,
  });

  const isConfigured = !!fieldMappingInstance?.id;
  const hasFieldMappingError = !!fieldMappingError;

  const handleConfigure = async () => {
    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping(FIELD_MAPPING_KEYS.CONTACT)
        .openConfiguration();
    } catch (error) {
      console.error("Error opening field mapping configuration:", error);
    }
  };

  const handleResetConfiguration = async () => {
    try {
      await integrationApp
        .connection(connectionKey)
        .fieldMapping(FIELD_MAPPING_KEYS.CONTACT)
        .openConfiguration();
    } catch (error) {
      console.error(
        "Error opening field mapping configuration for reset:",
        error
      );
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
    <div className="w-full mt-3">
      <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-blue-700">
            Custom Field Mapping
          </span>
          <Button
            variant="outline"
            size="small"
            onClick={handleResetConfiguration}
            className="text-xs bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-1"
            disabled={fieldMappingsLoading}
          >
            Configure
          </Button>
        </div>
      </div>
    </div>
  );
}
