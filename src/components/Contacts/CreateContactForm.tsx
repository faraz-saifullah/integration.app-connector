'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, FormEvent, ChangeEvent } from 'react';
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
  onSuccess: (newContact: any) => void; // Adjust 'any' to your contact type
  // Add a prop for integrationKey if it needs to be dynamic
  // integrationKey: string; 
}

const initialFormData: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  pronouns: '',
};

// This structure can be used to dynamically render form fields
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
}: CreateContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const integrationApp = useIntegrationApp();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    try {
      // TODO: Make 'hubspot' and 'create-new-contact' dynamic if needed (e.g., via props)
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        pronouns: formData.pronouns,
      };

      const result = await integrationApp
        .connection('hubspot') // Example connection key
        .action('create-contact') // Example action key
        .run(payload);

      console.log('Contact creation successful via SDK:', result);
      onSuccess(result); // Pass the actual result from the SDK
      setFormData(initialFormData); // Reset form
      onClose();
    } catch (error: any) {
      console.error('Failed to create contact via SDK:', error);
      // Attempt to get a more specific error message if available
      const errorMessage = error?.response?.data?.message || error.message || 'An unexpected error occurred while creating the contact.';
      setFormError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
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
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
                        {/* Basic error display for individual fields can be added here if needed */}
                      </div>
                    </div>
                  ))}
                  
                  {formError && (
                    <div className="rounded-md bg-red-50 p-4 mt-4">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-700">{formError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end space-x-3">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        onClose();
                        setFormError(null); // Clear error on close
                        setFormData(initialFormData); // Reset form on cancel
                      }}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Create Contact
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
