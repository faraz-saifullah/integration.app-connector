export const CONTACTS_PAGE_SIZE = 25;

// Integration providers
export const INTEGRATION_PROVIDERS = {
  HUBSPOT: "hubspot",
  PIPEDRIVE: "pipedrive",
} as const;

// Action keys
export const ACTION_KEYS = {
  LIST_CONTACTS: "list-contacts",
  CREATE_CONTACT: "create-contact",
  CONTACT_MAPPING: "contact-mapping",
} as const;

// Field mapping keys
export const FIELD_MAPPING_KEYS = {
  CONTACT: "contact-mapping",
} as const;

// Error messages
export const ERROR_MESSAGES = {
  FETCH_CONTACTS: "Failed to load contacts. Please try again later.",
  NO_CONNECTION: "No connection found for provider:",
  FETCH_ERROR: "Error fetching contacts from provider:",
  AUTH_ERROR:
    "Failed to initialize integration. Please refresh the page to try again.",
} as const;

// URL field names
export const URL_FIELDS = {
  hubspot: "hubspotUrl",
  pipedrive: "pipedriveUrl",
} as const;

// Table column keys
export const TABLE_COLUMNS = {
  ID: "id",
  NAME: "name",
  HUBSPOT_URL: "hubspotUrl",
  PIPEDRIVE_URL: "pipedriveUrl",
  UPDATED_AT: "updatedAt",
} as const;

// CRM Options
export const CRM_OPTIONS = {
  HUBSPOT: {
    id: "hubspot",
    name: "HubSpot",
    icon: "/images/connectors/hubspot.png",
  },
  PIPEDRIVE: {
    id: "pipedrive",
    name: "Pipedrive",
    icon: "/images/connectors/pipedrive.png",
  },
} as const;

// Contact form fields
export const CONTACT_FORM_FIELDS = {
  FULL_NAME: "fullName",
  EMAIL: "email",
  PHONE: "phone",
  COMPANY_NAME: "companyName",
  PRONOUNS: "pronouns",
} as const;

// Loading states
export const LOADING_MESSAGES = {
  CONNECTIONS: "Loading connected CRMs...",
  CONTACTS: "Loading contacts...",
  USER: "Loading user information...",
  CREATING_CONTACT: "Creating contact...",
} as const;

// UI Messages
export const UI_MESSAGES = {
  NO_CRMS_CONNECTED: "No CRMs Connected",
  NO_CRMS_DESCRIPTION: "Please connect to at least one CRM in the Connectors tab before creating contacts.",
  NO_USER_INFO: "No user information available",
  NO_USER_INFO_DESCRIPTION: "Please try refreshing the page.",
  WELCOME_TITLE: "Welcome!",
  WELCOME_DESCRIPTION: "Please sign in to access your integration dashboard and manage your connections.",
  GET_STARTED: "Get Started",
} as const;

// Form Labels
export const FORM_LABELS = {
  SELECT_CRMS: "Select CRMs",
  CREATE_CONTACT: "Create Contact",
  CREATING: "Creating...",
  CANCEL: "Cancel",
  CLOSE: "Close",
} as const;

// Tab Labels
export const TAB_LABELS = {
  USER_INFORMATION: "User Information",
  CONTACTS: "Contacts",
  CONNECTORS: "Connectors",
} as const;
