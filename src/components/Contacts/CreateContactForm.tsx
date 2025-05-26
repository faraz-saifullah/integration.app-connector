"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState, FormEvent, ChangeEvent } from "react";
import type { JSX } from "react";
import Image from "next/image";
import { Button } from "@/components/Common/Button";
import { LoadingSpinner } from "@/components/Common/LoadingSpinner";
import { useIntegrationApp, useConnections } from "@integration-app/react";
import { CRM_OPTIONS } from "@/constants";
import {
  ContactFormData,
  ContactCreationResult,
  CreateContactFormProps,
  ApiError,
} from "@/types";
import {
  CONTACT_FORM_FIELD_DEFINITIONS,
  INITIAL_CONTACT_FORM_DATA,
} from "@/config/form-fields";
import {
  getAvailableCRMs,
  transformFormDataToPayload,
} from "@/utils/integration-utils";
import { UI_MESSAGES, FORM_LABELS, LOADING_MESSAGES } from "@/constants";
import { CheckIcon, WarningIcon, ErrorIcon, InfoIcon } from "@/components/Common/Icons";

export default function CreateContactForm({
  isOpen,
  onClose,
  onSuccess,
}: CreateContactFormProps): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_CONTACT_FORM_DATA);
  const [selectedCRMs, setSelectedCRMs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const integrationApp = useIntegrationApp();
  const { connections, loading: connectionsLoading } = useConnections();

  // Get available CRMs that are actually connected
  const availableCRMs = getAvailableCRMs(connections, CRM_OPTIONS);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCRMSelect = (crmId: string) => {
    setSelectedCRMs((prev) =>
      prev.includes(crmId)
        ? prev.filter((id) => id !== crmId)
        : [...prev, crmId]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!integrationApp) {
      setFormError(
        "Integration SDK not available. Please ensure IntegrationProvider is set up correctly."
      );
      setIsSubmitting(false);
      return;
    }

    if (selectedCRMs.length === 0) {
      setFormError("Please select at least one CRM to create the contact in.");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = transformFormDataToPayload(formData);
      const results: ContactCreationResult[] = [];

      for (const crmId of selectedCRMs) {
        try {
          const result = await integrationApp
            .connection(crmId)
            .action("create-contact")
            .run(payload);
          results.push({ crmId, result });
        } catch (error: unknown) {
          console.error(`Failed to create contact in ${crmId}:`, error);
        }
      }

      if (results.length > 0) {
        console.log("Contact creation successful in selected CRMs:", results);
        onSuccess(results);
        setFormData(INITIAL_CONTACT_FORM_DATA);
        setSelectedCRMs([]);
        onClose();
      } else {
        throw new Error("Failed to create contact in any selected CRM");
      }
    } catch (error: unknown) {
      console.error("Failed to create contact:", error);
      const errorMessage =
        error instanceof Error
          ? (error as ApiError)?.response?.data?.message || error.message
          : "An unexpected error occurred while creating the contact.";
      setFormError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCRMSelection = () => {
    if (connectionsLoading) {
      return (
        <LoadingSpinner
          size="md"
          text={LOADING_MESSAGES.CONNECTIONS}
          className="py-8"
        />
      );
    }

    if (availableCRMs.length === 0) {
      return (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
            <WarningIcon className="text-yellow-600" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            {UI_MESSAGES.NO_CRMS_CONNECTED}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {UI_MESSAGES.NO_CRMS_DESCRIPTION}
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        {availableCRMs.map((crm) => (
          <button
            key={crm.id}
            onClick={() => handleCRMSelect(crm.id)}
            className={`relative group flex items-center justify-center rounded-xl p-4 transition-all duration-200 border-2 ${selectedCRMs.includes(crm.id)
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100"
              }`}
          >
            <div className="absolute -top-2 -right-2 p-1 bg-white rounded-full border-2 border-gray-200 shadow-sm">
              {selectedCRMs.includes(crm.id) && (
                <CheckIcon className="text-blue-500" />
              )}
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={crm.icon}
                alt={`${crm.name} logo`}
                width={32}
                height={32}
                className="w-8 h-8 mb-2"
              />
              <span className="text-sm font-medium">{crm.name}</span>
            </div>
          </button>
        ))}
      </div>
    );
  };

  const renderFormFields = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {CONTACT_FORM_FIELD_DEFINITIONS.map((field) => (
        <div
          key={field.name}
          className={field.name === "pronouns" ? "md:col-span-2" : ""}
        >
          <label
            htmlFor={field.name}
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            {field.label}
            {field.required && (
              <span className="text-red-500 ml-1">*</span>
            )}
          </label>
          <div>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 text-gray-900 bg-white transition-colors duration-200"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 text-gray-900 placeholder-gray-400 bg-white transition-colors duration-200"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderHubSpotTip = () => {
    if (!availableCRMs.some((crm) => crm.id === "hubspot")) return null;

    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5">
        <div className="flex items-start">
          <InfoIcon className="w-3 h-3 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h4 className="text-xs font-medium text-blue-800">HubSpot Tip</h4>
            <p className="text-xs text-blue-700 mt-0.5">
              If HubSpot&apos;s automation for creating and associating
              companies with contacts is enabled, the system will auto-assign
              companies based on email domains rather than the company name you
              enter in this form.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderErrorMessage = () => {
    if (!formError) return null;

    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <ErrorIcon className="text-red-400" />
          <p className="ml-3 text-sm text-red-700">{formError}</p>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/10 backdrop-blur-sm" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-white p-5 text-left align-middle shadow-2xl transition-all border border-gray-100">
            <DialogTitle className="text-lg font-semibold leading-6 text-gray-900 mb-3 text-center">
              Create New Contact
            </DialogTitle>

            <div className="space-y-3">
              {/* CRM Selection Section */}
              <div>
                <h3 className="text-base font-medium text-gray-700 mb-4">
                  {FORM_LABELS.SELECT_CRMS}
                </h3>
                {renderCRMSelection()}
              </div>

              {renderErrorMessage()}

              {!connectionsLoading && availableCRMs.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {renderHubSpotTip()}
                  {renderFormFields()}

                  <div className="flex justify-end space-x-3 pt-1">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={onClose}
                      disabled={isSubmitting}
                    >
                      {FORM_LABELS.CANCEL}
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? FORM_LABELS.CREATING : FORM_LABELS.CREATE_CONTACT}
                    </Button>
                  </div>
                </form>
              )}

              {!connectionsLoading && availableCRMs.length === 0 && (
                <div className="flex justify-end pt-1">
                  <Button type="button" variant="secondary" onClick={onClose}>
                    {FORM_LABELS.CLOSE}
                  </Button>
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
