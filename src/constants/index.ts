export const CONTACTS_PAGE_SIZE = 25;

// Integration providers
export const INTEGRATION_PROVIDERS = {
  HUBSPOT: 'hubspot',
  PIPEDRIVE: 'pipedrive'
} as const;

// Action keys
export const ACTION_KEYS = {
  LIST_CONTACTS: 'list-contacts',
  CREATE_CONTACT: 'create-contact',
  CONTACT_MAPPING: 'contact-mapping'
} as const;

// Field mapping keys
export const FIELD_MAPPING_KEYS = {
  CONTACT: 'contact-mapping'
} as const;

// Error messages
export const ERROR_MESSAGES = {
  FETCH_CONTACTS: 'Failed to load contacts. Please try again later.',
  NO_CONNECTION: 'No connection found for provider:',
  FETCH_ERROR: 'Error fetching contacts from provider:',
  AUTH_ERROR: 'Failed to initialize integration. Please refresh the page to try again.'
} as const;

// URL field names
export const URL_FIELDS = {
  hubspot: 'hubspotUrl',
  pipedrive: 'pipedriveUrl'
} as const;

// Table column keys
export const TABLE_COLUMNS = {
  ID: 'id',
  NAME: 'name',
  HUBSPOT_URL: 'hubspotUrl',
  PIPEDRIVE_URL: 'pipedriveUrl'
} as const;

// CRM Options
export const CRM_OPTIONS = {
  HUBSPOT: {
    id: 'hubspot',
    name: 'HubSpot',
    icon: '/images/connectors/hubspot.png'
  },
  PIPEDRIVE: {
    id: 'pipedrive',
    name: 'Pipedrive',
    icon: '/images/connectors/pipedrive.png'
  }
} as const;

// Contact form fields
export const CONTACT_FORM_FIELDS = {
  FULL_NAME: 'fullName',
  EMAIL: 'email',
  PHONE: 'phone',
  COMPANY_NAME: 'companyName',
  PRONOUNS: 'pronouns'
} as const;
