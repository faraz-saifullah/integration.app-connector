import { FormFieldDefinition } from '@/types';

export const CONTACT_FORM_FIELD_DEFINITIONS: FormFieldDefinition[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "e.g., Jane Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "e.g., jane.doe@example.com",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "e.g., (555) 123-4567",
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "e.g., Acme Corp",
  },
  {
    name: "pronouns",
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

export const INITIAL_CONTACT_FORM_DATA = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  pronouns: "",
} as const; 