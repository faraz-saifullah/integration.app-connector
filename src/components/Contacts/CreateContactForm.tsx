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
import { useIntegrationApp, useConnections } from "@integration-app/react";
import { CRM_OPTIONS, CONTACT_FORM_FIELDS } from "@/constants";

interface ApiError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

interface ContactFormData {
  [CONTACT_FORM_FIELDS.FULL_NAME]: string;
  [CONTACT_FORM_FIELDS.EMAIL]: string;
  [CONTACT_FORM_FIELDS.PHONE]: string;
  [CONTACT_FORM_FIELDS.COMPANY_NAME]: string;
  [CONTACT_FORM_FIELDS.PRONOUNS]: string;
}

interface ContactCreationResult {
  crmId: string;
  result: unknown;
}

interface CreateContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newContact: ContactCreationResult[]) => void;
}

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  pronouns: "",
};

const contactFieldDefinitions = [
  {
    name: "fullName" as keyof ContactFormData,
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "e.g., Jane Doe",
  },
  {
    name: "email" as keyof ContactFormData,
    label: "Email",
    type: "email",
    required: true,
    placeholder: "e.g., jane.doe@example.com",
  },
  {
    name: "phone" as keyof ContactFormData,
    label: "Phone",
    type: "tel",
    placeholder: "e.g., (555) 123-4567",
  },
  {
    name: "companyName" as keyof ContactFormData,
    label: "Company Name",
    type: "text",
    placeholder: "e.g., Acme Corp",
  },
  {
    name: "pronouns" as keyof ContactFormData,
    label: "Pronouns",
    type: "select",
    options: [
      { label: "Select Pronouns", value: "" },
      { label: "He/Him", value: "he_him" },
      { label: "She/Her", value: "she_her" },
      { label: "They/Them", value: "they_them" },
      { label: "Other", value: "other" },
      { label: "Prefer not to say", value: "prefer_not_to_say" },
    ],
  },
];

export default function CreateContactForm({
  isOpen,
  onClose,
  onSuccess,
}: CreateContactFormProps): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [selectedCRMs, setSelectedCRMs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const integrationApp = useIntegrationApp();
  const { connections, loading: connectionsLoading } = useConnections();

  // Get available CRMs that are actually connected
  const availableCRMs = Object.values(CRM_OPTIONS).filter((crm) =>
    connections.some((connection) => connection.integration?.key === crm.id)
  );

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
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        pronouns: formData.pronouns,
      };

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
        setFormData(initialFormData);
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
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-sm text-gray-600">
            Loading connected CRMs...
          </span>
        </div>
      );
    }

    if (availableCRMs.length === 0) {
      return (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-amber-800">
                No CRMs Connected
              </h4>
              <p className="text-sm text-amber-700 mt-1">
                You need to connect at least one CRM (HubSpot or Pipedrive)
                before creating contacts. Go to the Connectors tab to set up
                your integrations first.
              </p>
            </div>
          </div>
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
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
                  Select CRMs
                </h3>

                {renderCRMSelection()}
              </div>

              {formError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-3 text-sm text-red-700">{formError}</p>
                  </div>
                </div>
              )}

              {!connectionsLoading && availableCRMs.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* HubSpot automation note */}
                  {availableCRMs.some((crm) => crm.id === "hubspot") && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5">
                      <div className="flex items-start">
                        <svg
                          className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <h4 className="text-xs font-medium text-blue-800">
                            HubSpot Tip
                          </h4>
                          <p className="text-xs text-blue-700 mt-0.5">
                            If HubSpot&apos;s automation for creating and
                            associating companies with contacts is enabled, the
                            system will auto-assign companies based on email
                            domains rather than the company name you enter in
                            this form.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contactFieldDefinitions.map((field) => (
                      <div
                        key={field.name}
                        className={
                          field.name === "pronouns" ? "md:col-span-2" : ""
                        }
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
                  <div className="flex justify-end space-x-3 pt-1">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={onClose}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Contact"}
                    </Button>
                  </div>
                </form>
              )}

              {!connectionsLoading && availableCRMs.length === 0 && (
                <div className="flex justify-end pt-1">
                  <Button type="button" variant="secondary" onClick={onClose}>
                    Close
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
