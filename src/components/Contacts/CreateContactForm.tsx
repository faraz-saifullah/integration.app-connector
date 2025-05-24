'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, FormEvent, ChangeEvent } from 'react';
import type { JSX } from 'react';
import { Button } from '@/components/Common/Button';
import { useIntegrationApp } from '@integration-app/react'; 

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  pronouns: string;
}

interface CreateContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newContact: any) => void; 
}

interface CRMSelection {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

const CRM_OPTIONS: CRMSelection[] = [
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '/images/connectors/hubspot.png',
    selected: false,
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    icon: '/images/connectors/pipedrive.png',
    selected: false,
  },
];

const initialFormData: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  pronouns: '',
};

const contactFieldDefinitions = [
  {
    name: 'fullName' as keyof ContactFormData,
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'e.g., Jane Doe',
  },
  {
    name: 'email' as keyof ContactFormData,
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'e.g., jane.doe@example.com',
  },
  {
    name: 'phone' as keyof ContactFormData,
    label: 'Phone',
    type: 'tel',
    placeholder: 'e.g., (555) 123-4567',
  },
  {
    name: 'companyName' as keyof ContactFormData,
    label: 'Company Name',
    type: 'text',
    placeholder: 'e.g., Acme Corp',
  },
  {
    name: 'pronouns' as keyof ContactFormData,
    label: 'Pronouns',
    type: 'select',
    options: [
      { label: 'Select Pronouns', value: '' },
      { label: 'He/Him', value: 'he_him' },
      { label: 'She/Her', value: 'she_her' },
      { label: 'They/Them', value: 'they_them' },
      { label: 'Other', value: 'other' },
      { label: 'Prefer not to say', value: 'prefer_not_to_say' },
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCRMSelect = (crmId: string) => {
    setSelectedCRMs((prev) => 
      prev.includes(crmId) 
        ? prev.filter(id => id !== crmId) 
        : [...prev, crmId]
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!integrationApp) {
      setFormError('Integration SDK not available. Please ensure IntegrationProvider is set up correctly.');
      setIsSubmitting(false);
      return;
    }

    if (selectedCRMs.length === 0) {
      setFormError('Please select at least one CRM to create the contact in.');
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

      const results: any[] = [];
      for (const crmId of selectedCRMs) {
        try {
          const result = await integrationApp
            .connection(crmId)
            .action('create-contact')
            .run(payload);
          results.push({ crmId, result });
        } catch (error: any) {
          console.error(`Failed to create contact in ${crmId}:`, error);
        }
      }

      if (results.length > 0) {
        console.log('Contact creation successful in selected CRMs:', results);
        onSuccess(results);
        setFormData(initialFormData);
        setSelectedCRMs([]);
        onClose();
      } else {
        throw new Error('Failed to create contact in any selected CRM');
      }
    } catch (error: any) {
      console.error('Failed to create contact:', error);
      setFormError(error?.response?.data?.message || error.message || 'An unexpected error occurred while creating the contact.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear={true} show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create New Contact
                </Dialog.Title>
                
                <div className="mt-4 space-y-4">
                  {/* CRM Selection Section */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Select CRMs</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {CRM_OPTIONS.map((crm) => (
                        <button
                          key={crm.id}
                          onClick={() => handleCRMSelect(crm.id)}
                          className={`relative group flex items-center justify-center rounded-lg p-3 transition-all duration-200 ${
                            selectedCRMs.includes(crm.id)
                              ? 'bg-blue-500 text-white hover:bg-blue-600'
                              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className="absolute -top-1 -right-1 p-1 bg-white rounded-full border border-gray-200">
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
                            <img
                              src={crm.icon}
                              alt={`${crm.name} logo`}
                              className="w-8 h-8 mb-1"
                            />
                            <span className="text-sm font-medium">
                              {crm.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formError && (
                    <div className="text-red-500 text-sm mb-2">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contactFieldDefinitions.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {field.label}
                          {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="mt-1">
                          {field.type === 'select' ? (
                            <select
                              id={field.name}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              required={field.required}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2.5 px-3 text-gray-900"
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
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2.5 px-3 text-gray-900 placeholder-gray-400"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end space-x-3">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Creating...' : 'Create Contact'}
                      </Button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
