// User and Authentication Types
export interface User {
  id: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  emailAddresses?: Array<{ emailAddress: string }>;
  createdAt?: number;
}

// Contact Types
export interface Contact {
  id: string;
  name: string;
  email?: string;
  hubspotUrl?: string;
  pipedriveUrl?: string;
  updatedAt: string; // ISO string format
}

export interface ContactRecord {
  id: string;
  fields?: {
    name?: string;
    email?: string;
  };
  uri?: string;
  updatedTime?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  pronouns: string;
}

export interface ContactCreationResult {
  crmId: string;
  result: unknown;
}

// Form Field Types
export interface FormFieldDefinition {
  name: keyof ContactFormData;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}

// CRM Types
export interface CRMOption {
  id: string;
  name: string;
  icon: string;
}

// API Error Types
export interface ApiError extends Error {
  response?: {
    data?: {
      message?: string;
    };
  };
}

// Context Types
export interface ContactsContextType {
  contacts: Contact[];
  isLoading: boolean;
  error: string | null;
  fetchContacts: () => Promise<void>;
  refreshContacts: () => Promise<void>;
}

// Component Props Types
export interface CreateContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newContact: ContactCreationResult[]) => void;
}

export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  defaultActiveTab?: number;
  onTabChange?: (index: number) => void;
  children: React.ReactNode;
}

// Integration Types
export type IntegrationProvider = 'hubspot' | 'pipedrive';

export interface Connection {
  integration?: {
    key: string;
  };
} 