"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/Common/Button";
import { ContactsTable } from "./ContactsTable";
import { Loader2, RefreshCw, Plus, Upload } from "lucide-react";
import { useContacts } from "@/contexts/ContactsContext";
import CreateContactForm from "./CreateContactForm";
import { BulkUploadStatusModal } from "./BulkUploadStatusModal";
import { useConnections, useIntegrationApp } from "@integration-app/react";
import { LoadingSpinner } from "@/components/Common/LoadingSpinner";
import { transformFormDataToPayload } from "@/utils/integration-utils";
import {
  parseContactsCSV,
  prepareContactsForTransform,
  validateCSV,
} from "@/utils/csv-parser";

export default function ContactsTab() {
  const { contacts, isLoading, error, loadContacts } = useContacts();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isBulkUploading, setIsBulkUploading] = useState(false);
  const [bulkUploadFlowRunId, setBulkUploadFlowRunId] = useState<string | null>(null);
  const [isBulkUploadModalOpen, setIsBulkUploadModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { connections, loading: connectionsLoading } = useConnections();
  const integrationApp = useIntegrationApp();

  useEffect(() => {
    // No need to fetch here since it's handled by the context
  }, []);

  // Handle CSV file upload
  const handleCSVUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsBulkUploading(true);
    try {
      const csvText = await file.text();

      // Validate CSV format
      const validation = validateCSV(csvText);
      if (!validation.isValid) {
        alert(`CSV validation failed:\n${validation.errors.join("\n")}`);
        return;
      }

      // Parse CSV to contacts
      const parsedContacts = parseContactsCSV(csvText);

      if (parsedContacts.length === 0) {
        alert(
          "No valid contacts found in CSV. Please check that you have name and email columns."
        );
        return;
      }

      // Prepare contacts for transformation
      const preparedContacts = prepareContactsForTransform(parsedContacts);

      // Transform each contact using the existing function
      const transformedContacts = preparedContacts.map(
        transformFormDataToPayload
      );

      // Call the bulk flow
      const result = await integrationApp
        .connection("hubspot")
        .flow("create-contacts-bulk")
        .run({
          input: {
            contacts: transformedContacts,
          },
        });

      console.log("Bulk import result:", result);

      // Store the flow run ID and show the status modal
      setBulkUploadFlowRunId(result.id);
      setIsBulkUploadModalOpen(true);

    } catch (error) {
      console.error("Bulk upload error:", error);
      alert("Failed to upload CSV. Please check the format and try again.");
    } finally {
      setIsBulkUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  // Show loading state while checking connections
  if (connectionsLoading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="flex items-center">
          <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
          <span className="ml-2 text-gray-600">Checking connections...</span>
        </div>
      </div>
    );
  }

  // Show no CRM connected state
  if (!connections || connections.length === 0) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center py-12">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-10.656a4 4 0 015.656 0l4 4a4 4 0 11-5.656 5.656l-1.102-1.102"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No CRM Connected
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            To view and create contacts, you need to connect at least one CRM
            integration like HubSpot or Pipedrive first.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
            <h4 className="text-sm font-medium text-blue-800 mb-2">
              Getting Started:
            </h4>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside text-left">
              <li>
                Go to the <strong>Connectors</strong> tab above
              </li>
              <li>Choose HubSpot or Pipedrive</li>
              <li>Follow the connection setup</li>
              <li>Return here to manage contacts</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // Show normal contacts view when CRMs are connected
  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      <div className="space-y-6 p-6">
        {error ? (
          <div className="p-4 bg-red-100 text-red-700 rounded-md">
            <p>{error}</p>
            <button
              onClick={() => loadContacts(true)}
              className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Contacts</h2>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="small"
                    onClick={() => loadContacts(true)}
                  disabled={isLoading}
                    icon={
                      isLoading ? (
                        <LoadingSpinner size="sm" />
                      ) : (
                        <RefreshCw className="h-4 w-4" />
                    )
                  }
                >
                    {isLoading ? "Refreshing..." : "Refresh"}
                </Button>

                  {/* CSV Bulk Upload Button */}
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isBulkUploading}
                    icon={
                      isBulkUploading ? (
                        <LoadingSpinner size="sm" />
                      ) : (
                        <Upload className="h-4 w-4" />
                      )
                    }
                    className="text-green-600 border-green-300 hover:bg-green-50"
                  >
                    {isBulkUploading ? "Uploading..." : "Bulk Import CSV"}
                  </Button>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                    className="hidden"
                  />

                <Button
                  variant="primary"
                  size="small"
                  icon={<Plus className="h-4 w-4" />}
                  ariaLabel="Create new contact"
                  onClick={() => setIsCreateModalOpen(true)}
                >
                  Create Contact
                </Button>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <ContactsTable contacts={contacts} isLoading={isLoading} />
            </div>
          </div>
        )}
        <CreateContactForm
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSuccess={() => {
            setIsCreateModalOpen(false);
            loadContacts();
          }}
        />
        <BulkUploadStatusModal
          isOpen={isBulkUploadModalOpen}
          onClose={() => setIsBulkUploadModalOpen(false)}
          flowRunId={bulkUploadFlowRunId}
          onComplete={() => {
            setIsBulkUploadModalOpen(false);
            loadContacts(true);
          }}
        />
      </div>
    </div>
  );
}
